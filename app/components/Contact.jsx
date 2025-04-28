import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Importing icons
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  // email templet setup
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_6wbujre", // Replace with your EmailJS service ID
        "template_26ave56", // Replace with your EmailJS template ID
        form.current,
        "E74vq7utIKcb9cvO-" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          alert("Your message has been sent!");
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log("Failed to send the message.", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };
  // ------end-------

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            DO YOU HAVE A PROJECT TO DISCUSS?
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            GET IN TOUCH <span className="inline-block ml-2">📬</span>
          </p>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-800 dark:text-indigo-300">
              CONTACT
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
              Feel free to reach out to discuss your project ideas or
              opportunities. I'm available to chat!
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-indigo-800 dark:text-indigo-300">
              SOCIAL MEDIA
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-indigo-800 dark:text-indigo-300 hover:text-indigo-500" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl text-indigo-800 dark:text-indigo-300 hover:text-indigo-500" />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl text-indigo-800 dark:text-indigo-300 hover:text-indigo-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 text-center lg:text-left">
            CONTACT FORM
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-950 via-purple-500 to-indigo-500 text-white font-medium transition duration-300 hover:opacity-80"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
