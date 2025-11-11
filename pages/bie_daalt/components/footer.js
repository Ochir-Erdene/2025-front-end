import React from "react";

export default function Footer() {
  return (
    <div className="flex">
      <div className="flex gap-2 pl-16 pt-8">
        <img src="/icons/logo.png" alt="SpinX Logo" className="h-6 w-6" />
        <span className=" mb-1 text-white font-bold">SpinX</span>
      </div>
      <div className="flex flex-col gap-2 pl-16 py-8 text-white/40">
        <h1 className="text-white">Home</h1>
        <h1>About</h1>
        <h1>Terms & Conditions</h1>
        <h1>Shipping & Return Policy</h1>
        <h1>FAQ</h1>
      </div>
    </div>
  );
}
