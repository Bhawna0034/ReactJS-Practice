import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../../api/PostAPI";
import FormAxios from "./FormAxios";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataAPI, setUpdateDataAPI] = useState({});
  console.log(getPost());
  const getPostData = async () => {
    try {
      const response = await getPost();
    //   console.log(response);
    setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDeletePosts = async(id) => {
    try{
        const response = await deletePost(id);
        // console.log(response.data);
        if(response.status === 200){
        const updatedPosts = data.filter((currentPost) => currentPost.id !== id);
        setData(updatedPosts);
    }

    }catch(error){
        console.log(error);
    }
}

const handleUpdatePost = (currentData) => setUpdateDataAPI(currentData);
  



  return (
    <>
     <section className="bg-blue-950 p-8">
        <div>
          <FormAxios  data={data} setData={setData} updateDataAPI={updateDataAPI} setUpdateDataAPI={setUpdateDataAPI}/>
        </div>
        <ol className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {
                data.map((currentData) => {
                    return <li key={currentData.id} className="bg-gray-700 border-l-4 border-l-white p-4 flex flex-col gap-4 justify-center">
                        <h2 className="text-xl text-white font-bold">Title: {currentData.title}</h2>
                        <p className="text-md text-white">Body: {currentData.body}</p>
                        <div className="flex gap-2 items-center">
                            <button onClick={() => handleUpdatePost(currentData)} className="bg-teal-700 px-4 py-2 hover:bg-black hover:text-white">EDIT</button>
                            <button onClick={() => handleDeletePosts(currentData.id)} className="bg-red-500 px-4 py-2 hover:bg-black hover:text-white">DELETE</button>
                        </div>
                    </li>
                })
            }
        </ol>

     </section>
    </>
  )
};

export default Posts;
