import React, { useEffect, useState } from "react";
import { postPost, updatePost } from "../../api/PostAPI";

const FormAxios = ({ data, setData, updateDataAPI, setUpdateDataAPI }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const isEmpty = Object.keys(updateDataAPI).length === 0;

  useEffect(() => {
    updateDataAPI &&
      setAddData({
        title: updateDataAPI.title || "",
        body: updateDataAPI.body || "",
      });
  }, [updateDataAPI]);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setAddData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  //  updatePostData
  const updatePostData = async () => {
    try {
      const response = await updatePost(updateDataAPI.id, addData);
      console.log(response);
      if (response.status === 200) {
        setData((prev) => {
          return prev.map((currentData) => {
            return currentData.id === response.data.id
              ? response.data
              : currentData;
          });
        });
        setAddData({title: "", body: ""});
        setUpdateDataAPI({});
      }
    } catch (error) {
      console.log(error);
    }
  };
  //  addPostData
  const addPostData = async () => {
    try {
      const response = await postPost(addData);
      if (response.status === 201) {
        setData([...data, response.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFormSubmit = (event) => {
    const action = event.nativeEvent.submitter.value;
    event.preventDefault();
    if (action === "ADD") {
      addPostData(data);
    } else if (action === "EDIT") {
      updatePostData();
    }
  };

  return (
    <>
      <section className=" flex justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-800 flex gap-4 items-center p-4"
        >
          <div>
            <label htmlFor="title"></label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Add Title"
              autoComplete="off"
              value={addData.title}
              onChange={handleInputChange}
              className="bg-white p-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="body"></label>
            <input
              type="text"
              name="body"
              id="body"
              placeholder="Add Post"
              autoComplete="off"
              value={addData.body}
              onChange={handleInputChange}
              className="bg-white p-2 outline-none"
            />
          </div>
          <button
            type="submit"
            value={isEmpty ? "ADD" : "EDIT"}
            className="bg-teal-700 text-black font-bold px-4 py-2 focus:scale-[1.03] hover:opacity-80"
          >
            {isEmpty ? "ADD" : "EDIT"}
          </button>
        </form>
      </section>
    </>
  );
};

export default FormAxios;
