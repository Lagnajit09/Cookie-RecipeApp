import { RecipeType } from "@/constants/types";
import Image from "next/image";
import React from "react";
import { GoStopwatch } from "react-icons/go";

const Card = ({
  title,
  ingredients,
  cookingTime,
  steps,
  imageUrl,
}: RecipeType) => {
  const shortenString = (str: string) => {
    return str.length > 200 ? `${str.slice(0, 200)}...` : str;
  };

  return (
    <div className="flex flex-col w-[25%] border-2 border-primary rounded-lg overflow-hidden cursor-pointer shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className=" w-full h-[30vh] overflow-hidden object-cover"
      />
      <div className="flex flex-col p-3 gap-2 justify-between">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{shortenString(ingredients.join(", "))}</p>
        <p className="flex items-center gap-2">
          <GoStopwatch /> {cookingTime} mins
        </p>
      </div>
    </div>
  );
};

export default Card;
