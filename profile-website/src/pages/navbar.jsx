import React from "react";

function Navabar() {

  return (
    <nav className="flex flex-col md:flex-row justify-between md:m-10">
      <div className="text-4xl font-bold">
        Artist John
      </div>

      <div className="text-center mt-5 md:mt-0">
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl bg-green-100 font-bold" href="#">Home</a>
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl md:ml-5 font-bold" href="#">About me</a>
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl md:ml-5 font-bold" href={"#"}>Gallery</a>
        <a className="md:hidden pt-3 pl-5 pr-5 pb-3 rounded-2xl bg-black text-white font-bold" href="#">Contact</a>

      </div>

      <div className="hidden md:block">
        <a className="pt-3 pl-5 pr-5 pb-3 bg-black text-white rounded-2xl text-l font-bold" href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navabar;
