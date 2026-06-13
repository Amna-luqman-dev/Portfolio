import React from "react";
import radixImg from "../assets/radix.jpeg";
import kitchenImg from "../assets/kitchen.jpg";

export default function Project() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <div>
            <img
              src={radixImg}
              alt="Radix IT Academy"
              className="w-full  object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">
              Radix IT Academy
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Radix ka IT Department modern technology solutions provide karta
              hai jo company ke digital systems ko smooth, secure aur efficient
              banata hai. Yeh team software development, network management,
              troubleshooting aur system maintenance jaise important tasks
              handle karti hai. The main focus of this department is to deliver
              innovative, reliable, and user-friendly IT services to ensure
              smooth business operations.
            </p>

            <a
              href="https://github.com/Amna-luqman-dev/Radix-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3
   rounded-lg font-semibold transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <div className="p-8 order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-4">
              Kitchen Reservation System
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Developed a Kitchen Reservation System that allows customers to
              book tables and manage reservations efficiently. The system
              includes reservation scheduling, customer information management,
              table availability tracking, and booking confirmation. Designed
              with a user-friendly interface to streamline restaurant
              operations and improve customer experience with secure database
              integration.
            </p>

             
            <a
              href="https://github.com/Amna-luqman-dev/KitchenAura-with-html-css"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3
   rounded-lg font-semibold transition duration-300"
            >
              View Project
            </a>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={kitchenImg}
              alt="Kitchen Reservation System"
              className="w-full  object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}