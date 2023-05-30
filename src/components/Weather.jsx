import React, { useState } from "react";

const Weather = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = () => setIsCelsius(!isCelsius);

  return (
    <section className="text-xl text-center grid gap-6">

      <h2 className="text-center mb-4 font-bold text-2xl tracking-wider">
        {weather.name}, {weather.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

        {/* Seccion de arriba */}
        <article className="bg-slate-300/70 p-2 rounded-3xl grid grid-cols-2 justify-items-center items-center py-2 sm:px-2">
          {/* col-start-1 col-end-3 */}
          <h3 className="capitalize col-start-1 col-end-3 ">
            {" "}
            {weather.weather[0].description}{" "}
          </h3>

          <span className="text-4xl font-light sm:test-6xl">
            {isCelsius ? `${temp.celsius} °C` : `${temp.fahrenheit} °F`}{" "}
          </span>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>

         {/* Seccion de abajo */}   
        <section className="bg-slate-300/70 p-2 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch py-2 sm:grid-cols-1 sm:px-2 sm:py-0 sm:items-center">
          <article className="flex text-sm justify-center items-center gap-2 sm:items-center">
            <div>
              <img src="/images/wind.png" alt="" />
            </div>
            <span>{weather.wind.speed}m/s</span>
          </article>

          <article className="flex text-sm justify-center items-center gap-2 sm:items-center">
            <div>
              <img src="/images/humidity.png" alt="" />
            </div>
            <span>{weather.main.humidity}%</span>
          </article>

          <article className="flex text-sm justify-center items-center gap-2 sm:items-center">
            <div>
              <img src="/images/pressure.png" alt="" />
            </div>
            <span>{weather.main.pressure}hPa</span>
          </article>
        </section>
        <button
          onClick={changeUnitTemp}
          className="bg-blue-500/70 py-2 px-6 text-white font-bold rounded-full
        hover:bg-blue-800 duration-200 text-sm block mx-auto mt-4"
        >
          Change C / F
        </button>
      </section>
    </section>
  );
};

export default Weather;
