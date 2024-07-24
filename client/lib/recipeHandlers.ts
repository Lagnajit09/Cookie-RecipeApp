import client from "./sanity";

export const fetchRecipes = async () => {
  const query = `*[_type == "recipe"]{
    _id,
    title,
    ingredients,
    steps,
    cookingTime,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
};
