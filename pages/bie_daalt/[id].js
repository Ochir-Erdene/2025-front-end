import React, { useState } from "react";
import Image from "next/image";
import productsData from "../bie_daalt/data/products.json";
import { useRouter } from "next/router";
import Header from "../bie_daalt/components/header";
import Footer from "../bie_daalt/components/footer";

export default function ItemDetails() {
  const products = productsData.products;
  const router = useRouter();
  const { id } = router.query; 
  const [selectedSize, setSelectedSize] = useState(null);
  const disBut = !selectedSize;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-800 text-white flex items-center justify-center">
        <Header />
        <p>Product not found.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-800">
      <Header />
      <div className="flex items-start gap-8 p-8">
        <div className="relative w-2/3 h-[600px] border rounded-3xl bg-black">
          <Image
            alt={product.name}
            src={product.images[0]}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-contain"
          />
        </div>

        <div className="mb-6 flex flex-col pb-6">
          <h1 className="mb-2 text-5xl text-white font-medium pb-2">
            {product.name}
          </h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <p>
              ${product.price.toFixed(2)}
              <span className="ml-1 inline">USD</span>
            </p>
          </div>
          <div className="border-b border-neutral-400 mt-6 mb-6"></div>

          <div className="flex gap-4 mb-6">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-transparent text-white border-white/50 hover:border-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <p className="mb-6 max-w-lg text-white/90">{product.description}</p>

          <button
            disabled={disBut}
            className={`relative flex w-full items-center justify-center rounded-full p-4 tracking-wide text-white transition ${
              disBut
                ? "bg-gray-600 cursor-not-allowed opacity-60"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            <div className="absolute left-0 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            Add To Cart
          </button>

        </div>
      </div>
      <Footer />
    </div>
  );
}
