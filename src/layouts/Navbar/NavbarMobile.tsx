import { Box, Button, Flex, HStack, Img, Input } from "@chakra-ui/react";
import logo from "../../Images/logo-mobile.png";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function NavbarMobile() {
  const [newQuery, setNewQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewQuery(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (newQuery === "") {
      alert("Buscá un producto");
    } else {
      setNewQuery("");
      navigate(`/search/?search=${newQuery}`);
    }
  };
  return (
    <Flex alignItems={"center"} justifyContent="center" bg="yellow" h="60px">
      <Flex alignItems={"center"} gap="2" w="90%" h="80%" m="auto">
        <Img
          src={logo}
          h="90%"
          onClick={() => {
            navigate("/ml-clon");
          }}
          cursor="pointer"
        />
        <form
          style={{ width: "100%", height: "70%" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Flex
            bg="#fff"
            border="1px solid"
            borderColor={"gray.200"}
            borderRadius="2"
            boxShadow={"sm"}
            w="100%"
            h="100%"
          >
            <Button type="submit" variant={"nostyle"} h="100%">
              <SearchIcon color="gray.500" />
            </Button>

            <Input
              w="90%"
              variant={"nostyled"}
              placeholder="Estoy buscando..."
              p="1"
              value={newQuery}
              onChange={handleChange}
              h="100%"
            />
          </Flex>
        </form>
        <HStack h="100%">
          <RxHamburgerMenu
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
          />
          <BsCart
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default NavbarMobile;
