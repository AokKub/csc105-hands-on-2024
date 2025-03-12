import React from "react";
import galleryPage from "./gallery.jsx"

function Navabar() {

  return (
    <nav className="flex flex-row justify-between m-10">
      <div className="text-4xl font-bold">
        Artist John
      </div>

      <div>
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl bg-green-100 font-bold" href="#">Home</a>
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl ml-5 font-bold" href="#">About me</a>
        <a className="pt-3 pl-5 pr-5 pb-3 rounded-2xl ml-5 font-bold" href={"#"}>Gallery</a>
      </div>

      <div>
        <a className="pt-3 pl-5 pr-5 pb-3 bg-black text-white rounded-2xl text-l font-bold" href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navabar;
