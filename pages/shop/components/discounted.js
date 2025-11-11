const discountedData = [
    {
      id: 1,
      title: "Le Male Le Elixir",
      brand: "Jean Paul Gaultier",
      originalPrice: "$120.00",
      discountedPrice: "$99.00",
      discountLabel: "18% OFF",
      img: "Elixir.png",
    },
    {
      id: 2,
      title: "Le Male Le Parfum",
      brand: "Jean Paul Gaultier",
      originalPrice: "$110.00",
      discountedPrice: "$95.00",
      discountLabel: "14% OFF",
      img: "Parfum.png",
    },
    {
      id: 3,
      title: "Le Beau Flower",
      brand: "Jean Paul Gaultier",
      originalPrice: "$130.00",
      discountedPrice: "$115.00",
      discountLabel: "12% OFF",
      img: "Flower.png",
    },
    {
      id: 4,
      title: "Scandal Pour Homme",
      brand: "Jean Paul Gaultier",
      originalPrice: "$140.00",
      discountedPrice: "$125.00",
      discountLabel: "11% OFF",
      img: "Scandal.png",
    },
    // {
    //   id: 5,
    //   title: "Le Male Elixir Collector",
    //   brand: "Jean Paul Gaultier",
    //   originalPrice: "$150.00",
    //   discountedPrice: "$135.00",
    //   discountLabel: "10% OFF",
    //   img: "Collector.png",
    // },
    // {
    //   id: 6,
    //   title: "Le  Male Le Elixir",
    //   brand: "Jean Paul Gaultier",
    //   originalPrice: "$120.00",
    //   discountedPrice: "$99.00",
    //   discountLabel: "18% OFF",
    //   img: "Elixir.png",
    // }
  ];

export default function Discounted() {
    return(
        <div className="relative">
          <div
            className="overflow-x-auto flex flex-nowrap whitespace-nowrap scroll-smooth no-scrollbar space-x-6 pb-4"
          >
            {discountedData.map((item) => (
              <div key={item.id} className="inline-block">
                <div
                  className="min-w-[220px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative"
                >
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.discountLabel}
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-36 h-36 object-contain mb-4"
                  />
                  <div className="text-sm text-gray-500">{item.brand}</div>
                  <div className="font-semibold text-lg">{item.title}</div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="line-through text-gray-400">{item.originalPrice}</span>
                    <span className="text-red-600 font-bold">{item.discountedPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}