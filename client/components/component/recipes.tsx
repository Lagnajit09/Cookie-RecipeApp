"use client";

import { fetchRecipes } from "@/lib/recipeHandlers";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { RecipeType } from "@/constants/types";

const Recipe = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  console.log(recipes);

  return (
    <div className="flex flex-col w-[90%] mx-auto my-20 gap-16">
      <div className="flex w-full justify-evenly flex-wrap">
        {recipes.map((recipe: RecipeType, index: number) => (
          <Card
            key={index}
            title={recipe.title}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            cookingTime={recipe.cookingTime}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </div>
      <p className="text-center font-semibold cursor-pointer text-red">
        Find your favorite recipe {"->"}
      </p>
    </div>
  );
};

export default Recipe;
