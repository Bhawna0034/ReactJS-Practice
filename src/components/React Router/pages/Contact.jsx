import React from "react";
import { Form } from "react-router-dom";

export const contactData = async({request}) => {
  try{
   const response =  await request.formData();
   const data = Object.fromEntries(response);
   console.log(data);
   return null;

  }catch(error){
    console.error(error);
  }

}

const Contact = () => {
  

  return (
    <div className="m-10">
      <div className="">
        <h2 className="text-4xl font-bold mb-1">Contact Us</h2>
        <p className="text-lg mb-4">
          Get in touch with us. We ae always here to help you.
        </p>
        <div>
          <Form method="POST" action="/contact">
            <div className="flex flex-col gap-1 mb-8">
              <label htmlFor="name" className="text-lg medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full Name"
                autoComplete="off"
                required
                className="bg-white border border-black w-full p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-8">
              <label htmlFor="email" className="text-lg medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com"
                autoComplete="off"
                required
                className="bg-white border border-black w-full p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-8">
              <label htmlFor="message" className="text-lg medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={10}
                rows={5}
                placeholder="We are always here to help you."
                autoComplete="off"
                required
                className="bg-white border border-black w-full p-2 focus:outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:scale-[1.02]">Send Message</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
