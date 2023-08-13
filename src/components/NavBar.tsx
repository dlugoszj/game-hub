import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.webp";
import ColorModeChanger from "./ColorModeChanger";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={Logo} boxSize="60px" />
      <ColorModeChanger></ColorModeChanger>
    </HStack>
  );
};

export default NavBar;
