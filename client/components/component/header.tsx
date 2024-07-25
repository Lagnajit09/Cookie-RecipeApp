import React from "react";
import BurgerImg from "@/constants/assets/burger.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Savor the Flavors - Recipe Collection</title>
        <meta
          name="description"
          content="Discover a world of culinary delights with our curated collection of recipes. Find delicious recipes for every occasion."
        />
        <meta
          name="keywords"
          content="recipes, cooking, food, culinary, dishes, cuisine"
        />
        <meta name="author" content="Your Website Name" />
        <meta
          property="og:title"
          content="Savor the Flavors - Recipe Collection"
        />
        <meta
          property="og:description"
          content="Discover a world of culinary delights with our curated collection of recipes. Find delicious recipes for every occasion."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="w-full h-[91vh] overflow-y-hidden py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Savor the Flavors
              </h1>
              <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a world of culinary delights with our curated
                collection of recipes.
              </p>
            </div>
            <Button
              variant="ghost"
              className="hidden text-primary-foreground bg-red  font-semibold sm:inline-flex"
            >
              Find Recipes
            </Button>
            <Image src={BurgerImg} alt="Burger" width={450} height={450} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
