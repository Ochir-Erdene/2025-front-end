import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Apple() {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-gray-100 space-y-24">
      <div className="h-[50px] w-full  bg-white flex items-center justify-center space-x-8">
        <img
          onClick={() => router.push("/")}
          src="logo.png"
          className="w-8 mb-1"
        />
        <ul>
          <li className="flex space-x-10">
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-300"
            >
              Store
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Mac
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              iPad
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              iPhone
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Watch
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Vision
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              AirPods
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              TV & Home
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Entertainment
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Accessories
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-gray-200"
            >
              Support
            </Link>
            <MagnifyingGlassIcon className="w-4.5 h-4.5 text-gray-500 cursor-pointer" />
            <ShoppingBagIcon className="w-4.5 h-4.5 text-gray-500 cursor-pointer" />
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold">iPhone</h1>
        <h1 className="text-4xl">Meet the iPhone 16 family</h1>
        <div className="space-x-4 mt-2">
          <button className="w-[130px] h-[45px] bg-blue-500 text-white rounded-full">
            Learn More
          </button>
          <button className="w-[130px] h-[45px] border-1 border-blue-500 text-blue-500 rounded-full">
            Shop iPhone
          </button>
        </div>
        <h1 className="mt-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500">
          Built for Apple Intelligence
        </h1>
        <img className="w-[600px]" src="iphone.png" />
        <div className="w-full h-[650px] bg-black flex justify-center">
          <div className="mt-8 flex flex-col items-center space-y-4">
            <img className="w-92" src="apple.png" />
            <h1 className="font-semibold text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-800">
              Apple Event
            </h1>
            <h1 className="text-white text-3xl">
              Watch online on 9/9 at 10 a.m.P.T
            </h1>
            <button className="w-[170px] h-[50px] rounded-full bg-white text-lg">
              Add to calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
