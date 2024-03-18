import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Pizza exponentially enhances life&apos;s every aspect.
        </h1>
        <p className="mt-4 text-gray-500">
          Pizza is the missing piece that makes everyday complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 py-2">
          <button className="bg-primary text-white px-8 py-2 rounded-full">
            Order now
          </button>
          <button>Learn more</button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}
