import React from "react";


function AboutMe() {

  return (
    <div className="flex flex-col md:flex-row justify-center mt-30 md:mt-50">
      <div className="mt-5 md:mr-20 justify-items-center">
        <img className="rounded-xl" src={"https://s1.zerochan.net/Frieren.600.4172163.jpg"} alt={"Frieren image"} width={400} />
      </div>

      <div className="flex justify-center flex-row">

        <div className="flex flex-col ">
          <div className="font-bold text-4xl text-center">
            About Me
          </div>
          <div className="font-bold text-l mt-5 text-center">
            Artist & Designer
          </div>
          <div className="mt-5">
            <p className="w-100 font-bold md:text-center">

              Frieren ｢フリーレン Furīren?｣ is the main protagonist of Frieren: Beyond Journey's End. She was the Mage of the Hero Party and traveled alongside Himmel the Hero, Eisen the Warrior, and Heiter the Priest in a ten-year journey to defeat the Demon King.
              After Himmel's death, Frieren began journeying with Fern and Stark to visit Aureole and speak with Himmel once again.
            </p>

          </div>
          <div className="mt-10 text-center">
            <a className="pt-2 pb-2 pl-15 pr-15 bg-black text-white font-bold rounded-2xl" href="#">Read more</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutMe;
