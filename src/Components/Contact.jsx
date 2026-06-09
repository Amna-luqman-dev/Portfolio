import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                amn10734@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-xl" />
                https://www.linkedin.com/in/amna-luqman-6453a134a
              </p>

              <p className="flex items-center gap-3">
                <FaGithub className="text-xl" />
                https://github.com/Amna-luqman-dev
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                +92 328 6178461
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}