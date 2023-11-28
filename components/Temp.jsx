"use client"
import React, { useState } from "react";

const Temp = () => {
  const [inputTemperature, setInputTemperature] = useState("");
  const [inputType, setInputType] = useState("");
  const [convertedTemperature, setConvertedTemperature] = useState("");

  const convertTemperature = () => {
    const temperature = parseFloat(inputTemperature);

    if (isNaN(temperature)) {
      setConvertedTemperature("Please enter a valid number");
      return;
    }

    if (inputType === "Celsius") {
      const convertedTemp = (temperature * 9) / 5 + 32;
      setConvertedTemperature(`${convertedTemp.toFixed(2)} °F`);
    } else if (inputType === "Fahrenheit") {
      const convertedTemp = ((temperature - 32) * 5) / 9;
      setConvertedTemperature(`${convertedTemp.toFixed(2)} °C`);
    } else {
      setConvertedTemperature(`Invalid input type ${inputType}`);
    }
  };

  return (
    <div className="container mx-auto lg:w-[60%] bg-white mt-[10rem] rounded-lg md:p-20 border shadow-lg bg-transparent backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        Temperature Converter
      </h2>
      <div className="mb-4">
        <label className="mb-2 block">
          <input
            type="text"
            value={inputTemperature}
            placeholder="Enter Temperature"
            onChange={(e) => setInputTemperature(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Select Type</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={convertTemperature}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full"
        >
          Convert
        </button>
      </div>
      <div>
        <p className="text-xl font-bold text-center bg-blue-200 p-4 mb-4">
          {convertedTemperature ? convertedTemperature : "?"}
        </p>
      </div>
    </div>
  );
};

export default Temp;
 