import React, { useState, useRef } from "react";
import Sidebar from "../components/sidebar";
import Discounted from "../components/discounted";
import Products from "../components/products";



export default function Shop() {
  const [clicked, setClicked] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <div>
          <div className="flex items-center mb-4">
            <h1 className="font-bold text-xl">Хямдруулсан Бараанууд</h1>
            <h1 className="ml-2 text-gray-400">/ Бусад</h1>
            <div className="ml-auto flex items-center space-x-4">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <Discounted />
        </div>

        <div>
          <div className="flex justify-between items-center mt-8 mb-4">
            <h1 className="font-bold text-xl">Бүх Бараанууд</h1>
            <button className="ml-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full px-6 py-2 flex items-center space-x-2 shadow-md hover:opacity-90 transition">
              <span>Бараа Нэмэх</span>
              <img src="/plus.png" alt="plus" width={20} height={20} />
            </button>
          </div>
          <Products/>
        </div>
      </div>
    </div>
  );
}
