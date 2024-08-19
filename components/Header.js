import React from "react";

function Header() {
  return (
    <div className="absolute top-0 left-0 w-full h-20 bg-white">
      <div className="flex justify-between items-center">
        <img class="w-16 shadow-inner" src="logo2.png" alt="VM Logo" />
        <ul className="flex font-source justify-around w-3/6">
          <li>01. Accueil</li>
          <li>02. À propos</li>
          <li>03. Portfolio</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
