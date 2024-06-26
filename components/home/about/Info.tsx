"use client";

import Button from "../../Button";
import React from "react";
import { useRouter } from "next/navigation";

const Info = () => {
    const router = useRouter(); 
  return (
    <div className="md:flex-1 text-center md:text-right mx-auto">
      <h3 className="text-white medium mb-5">درباره ما</h3>
      <h2 className="text-lg md:text-2xl lg:text-5xl mb-10 text-white bold">
        خدمات اجاره سوپرقایق
      </h2>
      <p className="text-gray-200 max-w-lg mb-5">
        به سبکی بی نظیر سفر کنید و آزادی واقعی را تجربه کنید. ماجراجویی یک عمر
        در بزرگ‌ترین قایق‌های تفریحی جهان در انتظار شماست که همگی توسط کارگزار
        حرفه‌ای شما مدیریت می‌شوند.
      </p>
      <p className="text-gray-200 max-w-lg mb-5">
        آبروی ما بر ما مقدم است. کارنامه ما گویای خود است. بیش از چهل سال دانش
        در یک هدف خلاصه شده است و چشم انداز شما را به واقعیت تبدیل می کند.
      </p>
      <Button label="بیشتر" small onClick={() => router.push('/')} />
    </div>
  );
};

export default Info;
