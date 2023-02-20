import Head from 'next/head'

import Cursor from '@/components/Cursor'
import React, { useState } from 'react'
import Fade from 'react-awesome-reveal'
import {
  AiOutlineClose
} from 'react-icons/ai'
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram
} from 'react-icons/bs'
import * as emailjs from '@emailjs/browser'

export default function Home() {

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: 'Kane Lariviere',
      message: formData.message,
    };

    emailjs
    .send(
      "service_9nqlymk",
      "template_cbr2ig8",
      templateParams,
      "FlTinMmd61zIwvS5c",
    )
    .then(
      (result) => {
        console.log(result.text);
        setFormData({
          loading: false,
          show: true,
          alertmessage: "Sent! Thank you!",
          variant: "success",
        });
      },
      (error) => {
        console.log(error.text);
        setFormData({
          alertmessage: `Failed to send! ${error.text}`,
          variant: 'danger',
          show: true,
        });
        document.getElementsByClassName('alert')[0].scrollIntoView();
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center px-4 md:px-8 mb-20 max-w-6xl mx-auto">
      <div className="border border-black w-full dark:border-white p-4">

          <div className="font-thin px-2">
            <span className="text-sm text-orange-400">04. </span>
            <span className="text-lg pl-4">Contact</span>
          </div>

          <Fade>
          <div className="grid md:grid-cols-3 gap-8 mt-4 items-center">

            <div className="col-span-1 md:mb-16">
              <h6 className="text-center font-thin">
                Fill out the form or send me an email directly at &nbsp;  
                <br />
                <strong><a href="mailto:kane@knlrvr.com" className="hover:text-gray-400 hover:underline hover:underline-offset-4 transition duration-300">
                  kane@knlrvr.com
                </a></strong>!
                <br /><br />
                You can also reach me anywhere below!
              </h6>
              <div className="px-8 flex justify-between mt-4 text-xl">
                <BsGithub 
                  className="hover:text-gray-300 transition duration-300" />
                <BsLinkedin 
                  className="hover:text-gray-300 transition duration-300" />
                <BsTwitter 
                  className="hover:text-gray-300 transition duration-300" />
                <BsInstagram 
                  className="hover:text-gray-300 transition duration-300" />
              </div>
            </div>
            <div className="md:col-span-2 mt-8 mb-4">
              <div variant={formData.variant}
                  className={`alert ${formData.show ? "flex justify-between items-center mb-4 p-1 px-4 rounded-md font-thin text-lg max-w-3xl mx-auto text-center text-green-800 bg-green-100" : "hidden"}`}>
                <p>
                  {formData.alertmessage}
                </p>
                <AiOutlineClose 
                  className="hover:text-gray-300"
                  onClick={() => setFormData({ show: false })} />
              </div>
              <form action="#" className="space-y-4"
                onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm block w-full p-2.5 focus:outline-none
                      dark:text-white dark:bg-black dark:border-gray-200"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm block w-full p-2.5 focus:outline-none
                    dark:text-white dark:bg-black dark:border-gray-200"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="12"
                    name="message"
                    placeholder="Type your message here!"
                    value={formData.message || ""}
                    onChange={handleChange}
                    required
                    className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm block w-full p-2.5 focus:outline-none
                    dark:text-white dark:bg-black dark:border-gray-200"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="py-2 px-8 text-sm text-center rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white dark:border-white sm:w-fit dark:hover:bg-white dark:hover:text-black transition ease-in-out mt-2"
                  > 
                    {formData.loading ? "Sending..." : "Send"}  
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}