import React from "react";
import Image from "next/image";

const Two = () => {
  return (
    <div className="flex justify-center py-12 px-8">
      <div className="flex flex-col md:flex-row items-center max-w-4xl">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/assets/comp.png"
            alt="Compatible Devices"
            width={500}
            height={300}
            objectFit="contain"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-2xl text-purple-700 font-bold">Modern & Responsive Web Applications</h2>
          <p className="mt-4">
            At Websol, we specialize in crafting web applications that are not only modern in design but also fully responsive, ensuring seamless user experiences across all devices. Whether it's a desktop, tablet, or smartphone, our applications adapt flawlessly, providing optimal performance and user engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
