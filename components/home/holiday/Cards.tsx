"use client";

import Card from "./Card";
import Image from "next/image";
import React from "react";
import city1 from "../../../public/images/home/city-1.jpeg";
import city2 from "../../../public/images/home/greece.jpeg";
import city3 from "../../../public/images/home/ibiza2.jpeg";
import city4 from "../../../public/images/home/ibiza3.jpeg";
import city5 from "../../../public/images/home/cannes.jpeg";

const cards = [
  { id: 1, image: city1, city: "Ibiza" },
  { id: 2, image: city3, city: "Cannes" },
  { id: 3, image: city4, city: "Valencia" },
  { id: 4, image: city5, city: "Primošten" },
];
const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 row-span-2">
      <div className="relative cursor-pointer">
        <Image alt="marina" src={city2} className="object-fill rounded-md h-full w-full" />
        <div className="absolute inset-0 z-10 text-white rounded-md bg-gradient-to-b from-transparent via-black to-black opacity-20 duration-300 hover:opacity-0 "></div>
        <div className="absolute inset-0 p-2 flex justify-end text-white bold">
          Marina
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 row-span-2">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
