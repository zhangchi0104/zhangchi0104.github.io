import React from "react";
import NavBarItem from "./NavBarItem";
import { SectionName } from "@/store/slices/root";

const NavBar: React.FC<{ onClick: (name: SectionName) => void }> = ({
  onClick
}) => {
  return (
    <nav className="fixed w-screen py-2 px-4 flex flex-row justify-end items-center">
      <NavBarItem name="home" onClick={onClick}>
        Home
      </NavBarItem>
      <NavBarItem name="about-me" onClick={onClick}>
        About Me
      </NavBarItem>
      <NavBarItem name="projects" onClick={onClick}>
        Projects
      </NavBarItem>
    </nav>
  );
};

export default NavBar;
