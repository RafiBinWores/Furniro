import { useState } from "react";
import { useEffect } from "react";

function Range() {
    const [range, setRange] = useState([]);

    useEffect(()=>{
        fetch("/range.json")
        .then((res)=>res.json())
        .then((data)=>setRange(data))
    }, []);

  return (
    <div className="container px-3 mx-auto lg:px-0 font-poppins mt-[350px] md:mt-[50px]">
      <div className="text-center">
        <h3 className="font-bold text-[32px] text-customGray-300">
          Browse The Range
        </h3>
        <p className="pt-1 text-xs md:p-0 md:text-xl text-customGray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 lg:w-[1183px] mx-auto mt-[50px] place-items-center">
        {range.map((item) => (
        <div key={item.id}>
            <img className="w-full lg:w-[381px] h-[480px] rounded-[10px] object-cover" src={item.image} alt={item.name || "Range Image"} />
            <p className="mt-[30px] text-2xl font-semibold text-center text-customGray-300">{item.title}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Range;
