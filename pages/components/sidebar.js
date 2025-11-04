export default function Sidebar() {
    return(
    <div className="w-1/5 h-screen flex">
    <div className="w-1/5 fixed">
      <div className="w-[100px] h-[100px] hidden md:block bg-teal-800 rounded-full m-20"></div>
      <div className="w-[100px] h-[100px] hidden md:block bg-cyan-500 rounded-full m-12"></div>
      <div className="w-[100px] h-[100px] hidden md:block bg-teal-600 rounded-full ml-24 mt-44"></div>
    </div>
    <div className="m-2 w-[80px] sm:w-[120px] lg:w-[270px] h-screen bg-black/60 fixed top-0 left-0 rounded-3xl backdrop-blur-2xl">
      <div className="flex">
        <div className=" w-[54px] h-[54px] bg-white rounded-xl m-4">
          <img
            src="/pfp.png"
            alt="Profile"
            width={54}
            height={54}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h1 className="text-white font-bold text-lg">Ochir-Erdene</h1>
          <h1 className="text-gray-300 font-light text-sm">Orders: 13</h1>
        </div>
      </div>
      <div className="flex items-center mt-12">
        <img
          src="/search.png"
          alt="Search Icon"
          width={24}
          height={24}
          className="absolute z-10 ml-4"
        />
        <input
          type="text"
          placeholder="Search ..."
          className="w-full bg-white backdrop-blur-sm text-black placeholder-gray-500 py-3 px-12 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 transition duration-300 shadow-lg"
        />
      </div>
      <div className="flex">
        <img
          src="/dashboard.png"
          alt="Dashboard"
          width={24}
          height={24}
          className="mt-4 ml-4"
        />
        <h1 className="text-white mt-4 ml-2 hidden sm:block">Dashboard</h1>
      </div>
      <div className="flex mt-2">
        <img
          src="/status.png"
          alt="Dashboard"
          width={24}
          height={24}
          className="mt-4 ml-4"
        />
        <h1 className="text-white mt-4 ml-2 hidden sm:block">Statics</h1>
      </div>
      <div className="flex mt-2">
        <img
          src="/note.png"
          alt="Dashboard"
          width={24}
          height={24}
          className="mt-4 ml-4"
        />
        <h1 className="text-white mt-4 ml-2 hidden sm:block">Orders</h1>
        <div className="w-[20px] h-[20px] bg-red-600 rounded-full text-white text-sm text-center absolute mt-4 ml-[232px] hidden sm:block">
          13
        </div>
      </div>
      <div className="flex mt-4 w-[250px] h-[50px] bg-white rounded-2xl items-center ml-2">
        <img
          src="/product.png"
          alt="products"
          width={24}
          height={24}
          className="ml-2"
        />
        <h1 className="ml-2 hidden md:block">Products</h1>
      </div>
      <div className="flex">
        <img
          src="/heart.png"
          alt="Likes"
          width={24}
          height={24}
          className="mt-4 ml-4"
        />
        <h1 className="text-white mt-4 ml-2 hidden sm:block">Likes</h1>
      </div>
      <div className="flex">
        <img
          src="/wallet.png"
          alt="wallet"
          width={24}
          height={24}
          className="mt-4 ml-4"
        />
        <h1 className="text-white mt-4 ml-2 hidden sm:block">Wallet</h1>
      </div>
    </div>
  </div>
  );
}