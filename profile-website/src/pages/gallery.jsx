import React from "react";


function Gallary() {

  return (
    <div className="flex flex-col justify-center mt-50">
      <div className="font-bold text-4xl text-center">
        Gallery
      </div>
      <div className="grid grid-cols-3 gap-2 mt-20 justify-items-center">
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
        <img className="rounded-2xl" src={"https://static.zerochan.net/Frieren.1024.4133715.webp"} width={300} />
      </div>
    </div>
  )
}
export default Gallary;
