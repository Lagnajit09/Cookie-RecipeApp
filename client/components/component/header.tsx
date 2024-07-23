import React from 'react'
import BurgerImg from "@/constants/assets/burger.png"
import Image from 'next/image'

const Header = () => {
  return (
    <section className="w-full h-[91vh] overflow-y-hidden py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Savor the Flavors</h1>
              <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a world of culinary delights with our curated collection of recipes.
              </p>
            </div>
            <Image src={BurgerImg} alt='Burger' width={450} height={450} />
          </div>
        </div>
        
      </section>
  )
}

export default Header