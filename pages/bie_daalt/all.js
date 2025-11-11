 import React from "react";
 import Header from "../bie_daalt/components/header";
 import Card from "../bie_daalt/components/card";
 import productsData from "../bie_daalt/data/products.json";
 import Footer from "../bie_daalt/components/footer";
 
 export default function Home() {

  return (
    <div className="min-h-screen bg-neutral-800">
        <Header />
           <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-5 md:grid-rows-3 lg:max-h-[calc(100vh-200px)]">
        {productsData.products.map((product) => (
          <div
            key={product.id}
          >
            <Card
              onClick={() =>
                router.push(`/product/${item.id}`)
              }
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              size="grid"
              className="relative block aspect-square h-full w-full"
            />
          </div>
        ))}
      </section>
        <Footer />
    </div>
  );
}
