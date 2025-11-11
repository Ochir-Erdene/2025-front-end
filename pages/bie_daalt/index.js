"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import Header from "../bie_daalt/components/header";
import Card from "../bie_daalt/components/card";
import productsData from "../bie_daalt/data/products.json";
import Footer from "../bie_daalt/components/footer";

export default function Home() {
  const products = productsData.products;

  const elixirCol = products.find(
    (p) => p.id === "jpg-le-male-elixir-collector"
  );
  const elixir = products.find((p) => p.id === "jpg-la-male-elixir");
  const laMale = products.find((p) => p.id === "jpg-la-male");

  return (
    <div className="min-h-screen bg-neutral-800">
      <Header />

      <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        {elixirCol && (
          <div className="md:col-span-4 md:row-span-2">
            <Card
              id={elixirCol.id}
              name={elixirCol.name}
              price={elixirCol.price}
              image={elixirCol.images[0]}
              size="hero"
              className="relative block aspect-square h-full w-full"
            />
          </div>
        )}

        {elixir && (
          <div className="md:col-span-2 md:row-span-1">
            <Card
              id={elixir.id}
              name={elixir.name}
              price={elixir.price}
              image={elixir.images[0]}
              size="large"
              className="relative block aspect-square h-full w-full"
            />
          </div>
        )}

        {laMale && (
          <div className="md:col-span-2 md:row-span-1">
            <Card
              id={laMale.id}
              name={laMale.name}
              price={laMale.price}
              image={laMale.images[0]}
              size="large"
              className="relative block aspect-square h-full w-full"
            />
          </div>
        )}
      </section>

      <div className="w-full overflow-x-auto pb-6 pt-1">
        <Marquee speed={30} stopOnHover={true} gradient={false}>
          <ul className="flex gap-4">
            {products.map((product, index) => (
              <Card
                key={`${product.id}-${index}`}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                size="carousel"
              />
            ))}
          </ul>
        </Marquee>
      </div>

      <Footer />
    </div>
  );
}
