import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-screen py-2 px-4 flex flex-row justify-end items-center">
      <div className="mr-12 text-gray-700 text-xl font-bold">Home</div>
      <div className="mr-12 text-gray-700 text-xl font-bold">About Me</div>
      <div className="mr-12 text-gray-700 text-xl font-bold">Projects</div>
    </nav>
  );
};

export default NavBar;
