import React from "react";
import photo from "../images/undraw_dev_productivity_umsq.svg";
export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
      <div className="flex-1">
        <h1 className=" font-bold text-purple-700 text-6xl">Hola, soy Rodrigo !</h1>
        <p className="font-light text-xl">Me desempeño como DESARROLLADOR FULL STACK</p>
      </div>
      <img src={photo} alt="Hombre desarrollando" style={{height:"300px"}}></img>
    </div>
  </header>
)
