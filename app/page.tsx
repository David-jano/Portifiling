"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillApple,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";



async function getuserinfo() {
  try{
  const response=await fetch('http://rwandavehiclesplates.atwebpages.com/api.php');
  const feed=await response.json();
console.log('plate_no is'+ feed[0].plate_no);
}
catch(error){
console.log("faild to grab an API");
}
}
getuserinfo();

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/*just mappings */}
     
      <Head>
        <title>Portifolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Wrap everything in div with dark mode class toggle */}
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white  px-5 md:px-40 w-full dark:bg-teal-950">
          
  <section className="min-h-screen">
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-bu">Developed by Dav</h1>
      <ul className="flex items-center">
        <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"
        onClick={()=>setDarkMode(!darkMode)}
        /></li>
        <li><a href="/resume" className="bg-gradient-to-r from bg-cyan-500 to-teal-500 px-4 text-white py-2 rounded-md ml-6">Resume</a></li>
      </ul>
    </nav>
<div>
  <h2 className="text-5xl py-2 text-teal-600 font-bold text-center">Hi, Am David</h2>
  <h3 className="text-2xl py-2 text-center">A fullstack web developer and designer based in Rwanda</h3>
  <p className="text-md py-5 leading-8 text-gray-800 text-center max-w-200 mx-auto">
    In today's episode, we'll be building out a sleek portfolio
     using React and Tailwind. This project is a great way to learn
      all about Tailwind's utility classes.</p>
</div>
<div className="flex items-center justify-center p-10 gap-12">
  <AiFillTwitterCircle className="bg-white text-gray-600 hover:text-blue-800  text-4xl" />
  <AiFillApple className="bg-white text-gray-600 hover:text-black  p-0.5 text-4xl"/>
  <AiFillFacebook className="bg-white  text-gray-600 hover:text-blue-800 p-0.5 text-4xl"/>
  <AiFillYoutube className="bg-white text-gray-600 hover:text-red-700 p-0.5 text-4xl"/>
</div>

<div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto">
  <Image src={deved} alt="nnot found"/>
</div>
  </section>
  <section className="">
    <div>
      <h3 className="text-lg font-bold text-teal-600 text-center "> Sevices i offer </h3>
      <p className="text-center pb-10 max-w-200 mx-auto"> In today's episode, we'll be building out a sleek portfolio
          using React and Tailwind. This project is a great way to learn
          all about Tailwind's utility classes.</p>
    </div>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    <div className="text-center shadow-lg p-10 rounded-xl ">
      <Image src={design} alt="" width={100} height={100} className="mx-auto"/>
      <h3 className="text-lg font-bold text-teal-600 pt-8 pb-2">Beautful Designs</h3>
      <p className="py-2">In today's episode, we'll be building out a sleek portfolio
          using React and Tailwind. This project is a great way to learn
          all about Tailwind's utility classes.
          </p>
          <h4 className="py-4 text-teal-600">Design tools i use</h4>
          <p className="text-gray-500 py-1">Photoshop</p>
          <p className="text-gray-500 py-1">Illustrator</p>
          <p className="text-gray-500 py-1">Figma</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl">
      <Image src={code} alt="" width={100} height={100} className="mx-auto"/>
      <h3 className="text-lg font-bold text-teal-600 pt-8 pb-2">Epic Stunning Codes</h3>
      <p className="py-2">In today's episode, we'll be building out a sleek portfolio
          using React and Tailwind. This project is a great way to learn
          all about Tailwind's utility classes.
          </p>
          <h4 className="py-4 text-teal-600">Design tools i use</h4>
          <p className="text-gray-500 py-1">Photoshop</p>
          <p className="text-gray-500 py-1">Illustrator</p>
          <p className="text-gray-500 py-1">Figma</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl">
      <Image src={consulting} alt="" width={100} height={100} className="mx-auto"/>
      <h3 className="text-lg font-bold text-teal-600 pt-8 pb-2">Epic mocha</h3>
      <p className="py-2">In today's episode, we'll be building out a sleek portfolio
          using React and Tailwind. This project is a great way to learn
          all about Tailwind's utility classes.
          </p>
          <h4 className="py-4 text-teal-600">Design tools i use</h4>
          <p className="text-gray-500 py-1">Photoshop</p>
          <p className="text-gray-500 py-1">Illustrator</p>
          <p className="text-gray-500 py-1">Figma</p>
    </div>
    </div>
  </section>
  
    <div>
      <h3 className="text-xl text-teal-700 font-bold py-3 text-center pt-20">Some of my Works</h3>
      <p className="text-center pb-6">I designed a bunch of the Websites and i deveped new Features so far </p>
    </div>
   <section className="py-16 px-4 bg-white">
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[web1, web2, web3, web4, web5].map((img, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
      >
        <Image
          src={img}
          alt={`Work ${index + 1}`}
          className="w-full h-auto transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <a
            href="#"
            className="text-white text-lg font-semibold underline hover:text-amber-400 transition"
          >
            View Project {index + 1}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
</main>
<footer className="bg-gray-900 text-gray-200 py-10 px-6 w-full mt-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-amber-500">Cartify</h3>
      <p className="text-sm text-gray-400">
        Creating powerful and intuitive shopping experiences. Design meets function.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-amber-400 transition">Shop</a></li>
        <li><a href="#" className="hover:text-amber-400 transition">Services</a></li>
        <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-md focus:outline-none text-black"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>

  </div>

  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 w-full">
    © {new Date().getFullYear()} David. All rights reserved.
  </div>
</footer>

   
   </div>
   
   </>
  );
}
