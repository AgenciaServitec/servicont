import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  description: string;
  items: React.ReactNode;
  direction: string;
}

export const ServiceComponent = ({
  title,
  image,
  description,
  items,
  direction,
}: Props): React.ReactNode => {
  return (
    <div className="xl:w-4/5 xl:p-4 lg:w-5/6 lg:p-3  w-11-12 flex sm:flex-col md:flex-row justify-center items-center gap-10 p-4 ">
      {direction === "right" ? (
        <>
          <div className="md:text-lg text-base flex flex-col md:w-3/5 w-4/5 gap-8 justify-center md:p-4 p-3 ">
            <div className="flex flex-col gap-4">
              <p className="font-bold lg:text-3xl text-2xl">{title}</p>
              <p className="text-lg flex flex-wrap text-gray-500">
                {description}
              </p>
            </div>
            <ul className="md:text-lg text-base flex flex-col justify-center  text-start gap-3 text-gray-500">
              {items}
            </ul>
          </div>
          <div className="w-2/5 flex justify-center">
            <Image
              src={image}
              width={320}
              height={320}
              alt="img"
              className="object-contain"
              style={{ filter: "drop-shadow(10px 10px 0px rgb(5, 106, 183))" }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-2/5 flex justify-center">
            <Image
              src={image}
              width={320}
              height={320}
              alt="img"
              className="object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(10px 10px 0px rgb(5, 106, 183))" }}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-8 justify-center p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl">{title}</p>
              <p className="text-lg flex flex-wrap text-gray-500">
                {description}
              </p>
            </div>
            <ul className="text-lg flex flex-col gap-3 text-gray-500">
              {items}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
