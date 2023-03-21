import React from "react";

function Hero() {
  return (
    <div className="sm:flex sm:justify-between">
      <img
        src="https://thevaluableinfo.com/wp-content/uploads/2023/02/lernreact-img.jpg"
        alt=""
        className="w-[390px] max-w-[640px] p-2"
      />
      <div>
        <p className="text-justify p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim
          quos tempore pariatur? Laudantium fugit quibusdam quis iste suscipit
          dolores magnam voluptatibus id, molestiae, omnis modi, nam saepe!
          Dolorum, excepturi? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Necessitatibus tenetur velit libero, recusandae
          nesciunt expedita iste blanditiis. Natus itaque corrupti impedit at
          doloribus dolores quas! Quasi consequuntur consequatur nemo saepe!
        </p>
      </div>
    </div>
  );
}

export default Hero;
