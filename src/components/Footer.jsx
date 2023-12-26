import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Creared with ❤ by Prashant ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
