import React, { useState, useEffect } from "react";
import Data from "./Assets/Data.json";

const Assets = () => {
  

  
  return (
    <div className=" flex flex-col items-center justify-center mt-32 mx-14 md:mx-32">
        
    
    <h1 className=" bg-blue-600 text-white px-4 py-2 shadow-2xl font-bold w-full rounded-t-xl">You Are Taking Challenges Of New Project</h1>
      <div className="grid md:grid-cols-2 my-20 gap-24 ">
        {Data.map((element) => {
          return (
            <div className=" shadow-xl">
              <h1 className="text-center rounded-t-xl bg-black text-white p-2">{element.asset_title}</h1>
              <p className="p-2 my-3">{element.display_asset_reflection?element.display_asset_reflection:element.asset_description}</p>
              <img src={element.display_asset_image} alt="" />
              <img src={element.display_asset_video} alt="" />
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Assets;
