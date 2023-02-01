import React, { useState } from 'react'
import * as emailjs from '@emailjs/browser'

export default function Contact() {

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
    <div className="flex relative h-screen md:text-left md:flex-row
                    max-w-3xl mx-auto px-10 justify-evenly items-center">
        <h3 className="absolute top-16 uppercase tracking-widest text-sm text-gray-400">
            Contact
        </h3>
        <p className="absolute px-10 top-24 tracking-widest text-sm font-thin text-gray-600 dark:text-gray-200">
            Send me a message and I&apos;ll get back to you as soon as I can!
        </p>

        <div className="w-full mt-20">
          <form action="#" className="space-y-4"
                onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"
                className="text-sm font-thin">
                  Your Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name || ""}
                onChange={handleChange}
                className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none
                           dark:text-white dark:bg-black dark:border-gray-200"
              />
            </div>
            <div>
              <label htmlFor="email"
                className="text-sm font-thin">
                Your Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
                value={formData.email || ""}
                onChange={handleChange}
                className="font-thin shadow-sm bg-gray-50 border border-gray-600 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none
                         dark:text-white dark:bg-black dark:border-gray-200"
              />
            </div>
            <div>
              <label htmlFor="message" 
                className="text-sm font-thin">
                  Your Message
              </label>
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
                className="py-2 px-8 text-sm text-center rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white dark:border-white sm:w-fit dark:hover:bg-white dark:hover:text-black transition ease-in-out mt-8"
              > 
                {formData.loading ? "Sending..." : "Send"}  
              </button>
            </div>
            <div variant={formData.variant}
              className={`alert ${formData.show ? "border border-green-800 rounded-md font-thin text-lg absolute top-36 inset-x-10 text-center text-green-800 bg-green-100" : "hidden"}`}
              onClose={() => setFormData({ show: false })}>
              <p>{formData.alertmessage}</p>
            </div>
          </form>
        </div>
        <div className={formData.loading ? "loading-bar" : "hidden"}></div>
    </div>  
  )
}