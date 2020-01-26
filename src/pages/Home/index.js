import React from "react";
import image from "../../assets/image.jpg";

export default function Home() {
  return (
    <div className='container'>
      <h1>
        Você está <strong>Logado</strong>
      </h1>
      <img src={image} alt='Dogmeme' id='dog' />
    </div>
  );
}
