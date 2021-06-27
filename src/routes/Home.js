import React from "react";
import background from "../assets/background3.jpg"

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full">
        <img src={background} alt="background" className="shadow rounded w-full h-auto align-middle border-none" />
      </div>
    </div>
  );
}
