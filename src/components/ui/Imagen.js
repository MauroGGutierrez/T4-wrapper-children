import React from "react";
import "./Imagen.css";

const Imagen = ({ img, type = "normal", alt }) => {
  // opcion con desestructuracion
  // const {img,type,alt} = props; otra forma de hacer lo de arriba
  return (
    <>
      {type === "logo" ? (
        <div className="logo-txt">
          <img
            src={img}
            alt={alt}
            className={type === "logo" ? "logo" : "normal"}
          />
          <p className="txt-logo"> {alt.toUpperCase()}</p>
        </div>
      ) : (
        <img src={img} alt={alt} className="normal" />
      )}
    </>
  );
};

export default Imagen;
