"use client";

import { fetchRecipes } from "@/lib/recipeHandlers";
import React, { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      console.log(data);
      setRecipes(data);
    };
    getRecipes();
  }, []);

  console.log(recipes);

  return <div>Recipe</div>;
};

export default Recipe;
