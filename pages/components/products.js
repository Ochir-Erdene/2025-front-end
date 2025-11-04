const allData = [
  {
    id: 1,
    title: "Le Male Le Elixir",
    stock: 20,
    price: "$99.00",
    img: "Elixir.png",
  },
  {
    id: 2,
    title: "Le Male Le Parfum",
    stock: 15,
    price: "$95.00",
    img: "Parfum.png",
  },
  {
    id: 3,
    title: "Le Beau Flower",
    stock: 10,
    price: "$115.00",
    img: "Flower.png",
  },
  {
    id: 4,
    title: "Scandal Pour Homme",
    stock: 12,
    price: "$125.00",
    img: "Scandal.png",
  },
  {
    id: 5,
    title: "Le Male Elixir Collector",
    stock: 8,
    price: "$135.00",
    img: "Collector.png",
  },
  {
    id: 6,
    title: "Le Male Le Elixir",
    stock: 5,
    price: "$99.00",
    img: "Elixir.png",
  },
  {
    id: 7,
    title: "Le Male Le Parfum",
    stock: 7,
    price: "$95.00",
    img: "Parfum.png",
  },
  {
    id: 8,
    title: "Le Beau Flower",
    stock: 3,
    price: "$115.00",
    img: "Flower.png",
  },
];

export default function Products() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-48 h-48 object-contain mb-4"
                />
                <div className="font-semibold text-lg mb-1">{item.title}</div>
                <div className="text-gray-500 mb-2">Үлд: {item.stock}</div>
                <div className="font-bold text-xl">{item.price}</div>
              </div>
            ))}
          </div>
    )
}
