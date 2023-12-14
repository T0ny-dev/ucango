import React, { useState } from "react";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar__mobile">
        <img
          src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/app%20UcanGo%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2FwcCBVY2FuR28gKDEpLnBuZyIsImlhdCI6MTcwMjUyNjgxNiwiZXhwIjoxNzM0MDYyODE2fQ.uWyr--lacXnCqmyXY5Yjh1TERLEp0FsuWqGIKHUYGew&t=2023-12-14T04%3A06%3A55.257Z"
          alt="logotipo Medicos Sin Fronteras"
        />
        <img
          className="navbar__mobile--menu"
          src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/menu-bar.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21lbnUtYmFyLnN2ZyIsImlhdCI6MTY5OTk5MDU5MCwiZXhwIjoxNzMxNTI2NTkwfQ.jwESIG105CaiiMbTaCAVLVFQolvDWRg8UbvPmQRNfBc&t=2023-11-14T19%3A36%3A30.354Z"
          alt="imagen de 3 barras Medicos Sin Fronteras"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className="navbar__mobile--menu--content">
          {/* Menu Mobile*/}
          <a href="https://editor.apphive.io/webapp/proj_9WJDsmshTK/app_cPd9p6DiU2EW5jwxKtjDsQ" target="_blank">Aplicacion Demo Avance</a>
          <a href="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/ucango?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3VjYW5nbyIsImlhdCI6MTcwMjUzMTE2OSwiZXhwIjoxNzM0MDY3MTY5fQ.NnRCJiOHrazTMR4rGZ6p76Uu1YUdNRgbuRNeC5rr4uo&t=2023-12-14T05%3A19%3A28.101Z" target="_blank">Video demo prototipo</a>
          <a href="#register">
            <button 
              className="button__primary"
              onClick={toggleMenu}>
                REGISTRARME AHORA!
            </button>
          </a>
        </div>
        )}
    </>
  );
}

export default NavbarMobile;
