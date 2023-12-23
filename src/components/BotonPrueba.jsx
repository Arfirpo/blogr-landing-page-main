import React from "react";

export const BotonPrueba = ({ val }) => {
  return (
    <div>
      {val.map((valor, index) => (
        <p key={index}>{console.log(valor)}</p>
      ))}
    </div>
  );
};
