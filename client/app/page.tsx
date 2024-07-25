import Footer from "@/components/component/footer";
import Header from "@/components/component/header";
import Navbar from "@/components/component/navbar";
import Recipe from "@/components/component/recipes";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Recipe />
      <Footer />
    </>
  );
};

export default page;
