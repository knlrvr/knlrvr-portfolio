import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'
import Cursor from '@/components/Cursor'
import React, { useState } from 'react'
import Fade from 'react-awesome-reveal'
import {
  BsEnvelope
} from 'react-icons/bs'
import {
  AiOutlineClose
} from 'react-icons/ai'
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
    <div className="h-screen snap-y overflow-scroll bg-white dark:bg-black dark:text-gray-100 cursor-none">
      <Head>
        <title>Kane Lariviere</title>

        {/** REMEMBER META!!!!!! */}

      </Head>
      <Cursor />
      <Header />
      <ToTop />
      <Footer />

      {/** Page */}
      <section id="contact" className="snap-center">
        <div className="flex flex-col justify-center h-screen px-6">
          
          <Fade cascade triggerOnce>
            <div className="text-center font-thin">
              <p>Send me a message here or email me directly at &nbsp; 
                <a href="mailto:kane@knlrvr.com">
                <span className="font-bold hover:text-yellow-300 ">
                  kane@knlrvr.com
                </span></a>
                !
              </p>
            </div>

            <div className="text-5xl py-10 flex justify-center text-gray-300">
              <BsEnvelope />
            </div>

            <div variant={formData.variant}
                className={`alert ${formData.show ? "flex justify-between items-center p-1 px-4 rounded-md font-thin text-lg max-w-3xl mx-auto text-center text-green-800 bg-green-100" : "hidden"}`}>
              <p>
                {formData.alertmessage}
              </p>
              <AiOutlineClose 
                className="hover:text-gray-300"
                onClick={() => setFormData({ show: false })} />
            </div>
            

            <div className="mt-16 max-w-3xl mx-auto">
              <Fade dampening={0.5} triggerOnce>
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
                      className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none
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
                      className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none
                              dark:text-white dark:bg-black dark:border-gray-200"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="8"
                      name="message"
                      placeholder="Type your message here!"
                      value={formData.message || ""}
                      onChange={handleChange}
                      required
                      className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none
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
              </Fade>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  )
}