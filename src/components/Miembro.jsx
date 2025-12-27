import React from "react";
import Image from "next/image";

const isURL = (text) => {
  try {
    new URL(text);
    return true;
  } catch (error) {
    return false;
  }
};

const Miembro = ({ id, nombre, staff, rol, texto, medalla }) => {
  return (
    <div
      id={nombre}
      className="m-2 my-10 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 
      min-w-[250px] min-h-[200px] md:flex md:flex-wrap md:items-center md:justify-between md:w-full md:max-w-sm"
    >
      <div className="flex justify-center md:flex-shrink-0">
        <Image
          src={`https://api.mineatar.io/head/${id}?scale=16`}
          alt={`Avatar de ${nombre}`}
          title={`${nombre}`}
          width={100}
          height={100}
        />
      </div>
      <div className="text-center md:ml-9 flex-grow md:text-left">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4">
          {nombre}
          {medalla && (
            <Image
              src="/medalla.png"
              alt="Medalla 1 Millon de Bloques Minados"
              title="Medalla 1 Millon de Bloques Minados"
              width={30}
              height={30}
            />
          )}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{staff}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{rol}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isURL(texto) ? (
            <a href={texto} target="_blank" rel="noopener noreferrer">
              {"Redes sociales"}
            </a>
          ) : (
            texto
          )}
        </p>
      </div>
    </div>
  );
};


export default Miembro;