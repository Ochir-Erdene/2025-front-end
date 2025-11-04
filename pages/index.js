import React from "react";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [data3, setData3] = React.useState([]);
  const [data4, setData4] = React.useState([]);
  const [data5, setData5] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const responsedog = await fetch(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100"
        );
        const responsedragon = await fetch(
          "https://dragonball-api.com/api/characters"
        );
        const responserandom = await fetch(
          "https://whoa.onrender.com/whoas/random"
        );
        const responsestarwars = await fetch(
          "https://starwars-databank-server.vercel.app/api/v1/characters"
        );
        const responsestarwars2 = await fetch(
          "https://starwars-databank-server.vercel.app/api/v1/droids/"
        );
        const json = await responsedog.json();
        const json2 = await responsedragon.json();
        const json3 = await responserandom.json();
        const json4 = await responsestarwars.json();
        const json5 = await responsestarwars2.json();
        setData(json);
        setData2(json2);
        setData3(json3);
        setData4(json4);
        setData5(json5);
        console.log(json5);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full p-6">
        <h1 className="font-bold text-5xl text-center pb-8">Dogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((items, index) => (
            <div
              key={index}
              className="flex rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                className="object-cover h-50"
                src={items.url}
                alt="dogs"
                width={200}
              />
              <div className="pl-4 space-y-4 font-semibold text-xl">
                <p>Name:</p>
                <p>Age:</p>
                <p>Comment:</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-6">
        <h1 className="font-bold text-5xl text-center pb-8">Dragon Ball z</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data2.items?.map((goku, index) => (
            <div
              key={index}
              className="flex rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                className="object-cover h-50"
                src={goku.image}
                alt="dbz"
                width={200}
              />
              <div className="pl-4 space-y-4 font-semibold text-xl">
                <p>Name: {goku.name}</p>
                <p>Ki: {goku.ki}</p>
                <p>Max Ki: {goku.maxKi}</p>
                <p>Race: {goku.race}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-6">
        <h1 className="font-bold text-5xl text-center pb-8">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data3.map((movies, index) => (
            <div
              key={index}
              className="flex rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                className="object-cover h-50"
                src={movies.poster}
                alt="movies"
                width={200}
              />
              <div className="pl-4 space-y-4 font-semibold text-xl">
                <p>Name: {movies.movie}</p>
                <p>Director: {movies.director}</p>
                <p>Release date: {movies.release_date}</p>
                <p>Time Stamp: {movies.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-6">
        <h1 className="font-bold text-5xl text-center pb-8">Star wars characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data4.data?.map((starwars, index) => (
            <div
              key={index}
              className="flex rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                className="object-cover h-50"
                src={starwars.image}
                alt="starwars"
                width={200}
              />
              <div className="pl-4 space-y-4 font-semibold text-xl">
                <p>Name: {starwars.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-6">
        <h1 className="font-bold text-5xl text-center pb-8">Star wars droids</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data5.data?.map((starwarsd, index) => (
            <div
              key={index}
              className="flex rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                className="object-cover h-50"
                src={starwarsd.image}
                alt="starwars"
                width={200}
              />
              <div className="pl-4 space-y-4 font-semibold text-xl">
                <p>Name: {starwarsd.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
