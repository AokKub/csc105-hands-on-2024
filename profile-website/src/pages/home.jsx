import React from "react";
import metaIcon from "./meta.png"
import emailIcon from "./email.png"


function Home() {
  return (

    <div className="flex flex-row justify-center mt-30">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:justify-center">
          <div className="font-bold text-2xl text-center">
            Hello, it's me.
          </div>
          <div className="font-bold text-4xl text-center md:m-2">
            Artist John
          </div>
          <div className="font-bold text-2xl text-center md:mb-2">
            I am a Artist
          </div>
          <div className="justify-items-center">
            <p className="w-75 font-bold text-center text-l md:mb-2">
              To write a poem, first decide whether you want to follow a specific structure such as a sonnet or haiku</p>
          </div>
          <div className="flex flex-row md:mr-5 mt-5 justify-center">
            <img className="mr-2" src={metaIcon} alt={"meta"} width={70} />
            <img className="mr-2" src={emailIcon} alt={"email"} width={70} />
            <img className="mr-2" src={"https://img.freepik.com/premium-photo/instagram-icon_1249159-1217.jpg"} alt={"ig"} width={70} />
          </div>
          <div className="flex flex-row mt-5 justify-center">
            <a className="font-bold pt-2 pb-2 pl-20 pr-20 text-center text-white bg-black rounded-3xl" href="#">My portfolio</a>
          </div>
        </div>

        <div className="mt-5 md:ml-20">
          <img className="rounded-xl" src={"https://s1.zerochan.net/Frieren.600.4172163.jpg"} alt={"Frieren image"} width={400} />
        </div>
      </div>


    </div>
  )

}

export default Home;
