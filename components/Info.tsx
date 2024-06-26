"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/images/home/Capture-removebg-preview.png";
import weel from "@/public/images/home/weel.png";

interface InfoProps {
  subject: string
  contact?: boolean
  title: string
  articles?: boolean
  description: string
}
const Info: React.FC<InfoProps> = ({
  subject,
  title,
  description,
  contact,
  articles
}) => {
  return (
    <div className="text-center mb-20">
      <div className={`flex flex-col gap-4  ${contact ? 'md:items-start' : 'items-center'} mb-7`}>
        {!contact && !articles && <Image alt="logo" src={logo} width={100} height={100} />}
        {articles && <Image alt="logo" src={weel} width={100} height={100} />}
        <p className='text-[#BFA888] medium'>{subject}</p>
      </div>
      <div className={`${contact && 'md:text-right'}`}>
        <h2 className={`text-[#0A1B40] mb-7 text-3xl lg:text-4xl ${!contact && 'xl:text-5xl'}  xl:medium bold`}>
          {title}
        </h2>
        <p className={`text-gray-400 medium ${contact && 'md:text-right'} lg:max-w-xl lg:mx-auto`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Info;
