import React from "react";
import contact from "../assets/Homeimage/contact.png";
import a1 from "../assets/Homeimage/a1.jpg";
import a2 from "../assets/Homeimage/a2.jpg";
import learn from "../assets/Homeimage/learn.jpg";
import enter from "../assets/Homeimage/enter.jpg";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import background from "../assets/Homeimage/background.png";
import Henry6 from "../assets/Homeimage/Henry6.png";
import Henry61 from "../assets/Homeimage/Henry61.png";
import Nancy6 from "../assets/Homeimage/Nancy6.png";
import Nancy61 from "../assets/Homeimage/Nancy61.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Aboutus() {
  return (
    <>
      <div className="bg-[#E4E4E4]">
        <div
          className="h-screen bg-contain relative  bg-no-repeat"
          style={{ backgroundImage: `url(${contact})` }}
        >
          <h1 className="font-medium text-white text-2xl absolute top-[30px] left-[700px] ">
            About Us{" "}
          </h1>{" "}
          <br />
          <p className="text-xl text-white text-justify absolute top-[45px] left-[110px] w-[1250px] p-8 ">
            Welcome to S.T. Tech, where learning meets innovation. Our mission
            is to make quality education accessible to everyone, everywhere.
            With a wide range of expert-designed courses and interactive
            learning tools, we empower individuals to achieve their goals and
            thrive in their careers. We aim to break barriers to education by
            delivering innovative, engaging, and practical learning experiences
            to learners worldwide.
          </p>
        </div>

        <div className="absolute flex p-4 gap-25 ml-40 top-[260px] ">
          <img
            src={a1}
            alt="a1"
            className="a1 w-[250px] h-[254px] object-cover rounded-lg  "
          />
          <img
            src={a2}
            alt="a2"
            className="a2 w-[180px] h-[200px] object-cover rounded-lg"
          />
          <img
            src={a1}
            alt="a1"
            className="a1 w-[250px] h-[254px] object-cover  rounded-lg"
          />
          <img
            src={a2}
            alt="a2"
            className="a2  w-[180px] h-[200px] object-cover rounded-lg"
          />
        </div>

          <div className="pl-30 pb-10 -mt-45 w-[700px] text-justify">
          <h2 className="font-bold text-2xl pb-5">Mission</h2> 
          <p className="text-xl  border-l-4 border-[#E1BB50] p-2">
            To empower individuals through accessible, high-quality education
            that fosters personal growth, professional development, and lifelong
            learning. We aim to break barriers to education by delivering
            innovative, engaging, and practical learning experiences to learners
            worldwide.
          </p>
        </div>

         <div className="flex gap-10 pl-30 pb-20">
          <div>
            <img src={learn} alt="learn" className="w-[2000px] h-[300px] object-cover rounded-lg" />
          </div>
          <div className=" text-justify">
            <h2 className="font-bold text-2xl pb-5">Vision</h2> <br />
            <p className="text-xl  border-l-4 border-[#E1BB50] pl-2 pr-38">
              To be a global leader in e-learning, transforming lives by making
              education universally available, bridging the gap between
              knowledge and opportunity, and nurturing a community of empowered,
              skilled, and confident individuals. We aim to break barriers to education by delivering
            innovative, engaging, and practical learning experiences to learners
            worldwide.
            </p>
          </div>
        </div> 

       <img src={enter} alt="enter" className="h-[626px] w-full object-cover mt-[30px]" />

      {/* Success Stories Button */}
      <div className="text-center">
        <button className="relative top-[-20px] bg-[#E4E4E4] rounded-2xl px-[20px] py-[5px] shadow-sm">
          <b>Success Stories</b>
        </button>
        <p className="text-2xl font-medium pb-[40px]">From a small team to a global platform</p>
      </div>

      {/* Testimonials/Team Cards */}
    <div className="flex justify-center gap-15 py-16 mb-30  ">
  
  {/* Card 1 */}
  <div
    className="relative w-[230px] h-18 pt-16 pb-8 text-center rounded-xl bg-no-repeat bg-cover shadow-lg"
    style={{ backgroundImage: `url(${background})` }}
  >
    <img
      src={Jamessmith}
      alt="James Smith"
      className="w-[110px] h-[110px] rounded-full object-cover border-4 border-white absolute -top-14 left-14"
    />
    <div className="absolute top-20 p-6 text-justify h-55 rounded-b-lg bg-white">
    <h3 className=" font-semibold text-center text-2xl text-[#003372]">James Smith</h3>
    <p className="mt-2 text-sm font-semibold text-black">
      Lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.consectetur dont as adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit.
    </p>
    </div>
   
  </div>

  {/* Card 2 */}
  <div
    className="relative w-[230px] h-18 pt-16 pb-8 text-center rounded-xl bg-no-repeat bg-cover shadow-lg"
    style={{ backgroundImage: `url(${background})` }}
  >
    <img
      src={Jameswhite}
      alt="James White"
      className="w-[110px] h-[110px] rounded-full object-cover border-4 border-white absolute -top-14 left-14"
    />
     <div className="absolute top-20 p-6 text-justify h-55 rounded-b-lg bg-white">
    <h3 className=" font-semibold text-center text-2xl text-[#003372]">James White</h3>
    <p className="mt-2 text-sm font-semibold text-black">
      Lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative w-[230px] h-18 pt-16 pb-8 text-center rounded-xl bg-no-repeat bg-cover shadow-lg"
    style={{ backgroundImage: `url(${background})` }}
  >
    <img
      src={Nancysmith}
      alt="Nancy Smith"
      className="w-[110px] h-[110px] rounded-full object-cover border-4 border-white absolute -top-14 left-14"
    />
     <div className="absolute top-20 p-6 text-justify h-55 rounded-b-lg bg-white">
    <h3 className=" font-semibold text-center text-2xl text-[#003372]">Nancy Smith</h3>
    <p className="mt-2 text-sm font-semibold text-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam numquam ipsa eligendi mollitia nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. laboriosam numquam elit.
    </p>
    </div>
  </div>

</div>

      <div className=" py-18">
        <h2 className="text-center text-2xl font-bold py-[15px]">Our Team</h2>
        <div className="flex justify-center gap-[40px] text-center p-[30px]">
          {[
            { img: Henry6, name: "Henry Smith", role: "Founder", left: true },
            { img: Nancy6, name: "Nancy White", role: "Manager" },
            { img: Henry61, name: "Henry Smith", role: "Marketing Head" },
            { img: Nancy61, name: "Nancy White", role: "Designer", right: true },
          ].map((member, index) => (
            <div key={index} className="bg-gradient-to-b from-[#286491] via-[#1e4a6b] to-[#0c1d2a] rounded-lg w-[200px] h-[250px] p-[8px] m-[10px] leading-[1.5] text-white">
              <img src={member.img} alt="Team" className="rounded-[50px] border-4 shadow-2xl border-[#1841E6] w-[95px] h-[95px] object-cover mx-auto mt-2" />
              <div className="relative">
                <h3 className="font-bold mt-2">{member.name}</h3>
                
              </div>
              <p className="text-sm">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 text-yellow-400">
                 <a href="https://www.facebook.com"> <FaFacebook size={25}  /></a>
                        <a href="https://www.instagram.com"> <FaInstagram size={25}/></a>
                        <a href="https://www.linkedin.com"><FaLinkedin size={25}/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Aboutus;