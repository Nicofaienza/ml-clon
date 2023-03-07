import {
  Box,
  HStack,
  Image,
  Input,
  Icon,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
  Square,
  Divider,
  Center,
  VStack,
} from "@chakra-ui/react";
import logo from "../../Images/logo.png";
import promoImg from "../../Images/promo-img.webp";
import {
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBell,
} from "react-icons/ai";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Navbar(): JSX.Element {
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
    <Box bg="yellow" w={"100%"} h={"100px"} p={"8px 0"} gap={"20px"}>
      <VStack
        p={"0"}
        w={"90%"}
        h={"100%"}
        m={"0 auto"}
        maxW={"1200px"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <HStack w={"100%"} h={"40px"} justifyContent={"space-between"}>
          <HStack p={"0"} spacing={"6"}>
            <Box w={"170px"}>
              <Image
                src={logo}
                h={"34px"}
                onClick={() => {
                  navigate("/ml-clon");
                }}
                cursor="pointer"
              />
            </Box>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <HStack
                w={"600px"}
                bg={"#fff"}
                h={"100%"}
                alignItems="center"
                boxShadow={"md"}
              >
                <Input
                  value={newQuery}
                  h="100%"
                  maxW={"600px"}
                  borderRadius={"none"}
                  border={"none"}
                  placeholder={"Buscar productos, marcas y más..."}
                  onChange={handleChange}
                  variant="unstyled"
                  paddingLeft="12px"
                />
                <Center height={"25px"}>
                  <Divider orientation={"vertical"} />
                </Center>
                <Square
                  size={"40px"}
                  border={""}
                  cursor={"pointer"}
                  onClick={handleSubmit}
                >
                  <Icon as={AiOutlineSearch} />
                </Square>
              </HStack>
            </form>
          </HStack>
          <Image src={promoImg} h={"40px"} />
        </HStack>

        <HStack
          w={"100%"}
          m={"0"}
          h={"40px"}
          fontSize={"14px"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          color={"var(--chakra-colors-blackAlpha-600)"}
        >
          <HStack spacing={"6"}>
            <Box w={"170px"}>
              <Text>Envios a domicilio</Text>
            </Box>

            <Breadcrumb separator={""}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  display={"flex"}
                  alignItems={"center"}
                  gap={"2"}
                >
                  Categorias
                  <Icon
                    as={AiOutlineDown}
                    position={"relative"}
                    top={"2px"}
                    w={"12px"}
                    h={"12px"}
                  />
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Ofertas</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Historial</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Supermercado</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Moda</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Vender</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Ayuda</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>

          <Wrap color={"var(--chakra-colors-blackAlpha-800)"}>
            <WrapItem
              display={"flex"}
              alignItems={"center"}
              gap={"1"}
              cursor="pointer"
            >
              <Icon as={AiOutlineUser} /> Usuario
            </WrapItem>
            <WrapItem cursor="pointer">Mis compras</WrapItem>
            <WrapItem cursor="pointer">
              Favoritos
              <Icon
                as={AiOutlineDown}
                position={"relative"}
                top={"2px"}
                w={"12px"}
                h={"12px"}
              />
            </WrapItem>
            <WrapItem>
              <Wrap>
                <WrapItem>
                  <Icon as={AiOutlineBell} h="20px" w="20px" cursor="pointer" />
                </WrapItem>
                <WrapItem>
                  <Icon
                    as={AiOutlineShoppingCart}
                    h="20px"
                    w="20px"
                    cursor="pointer"
                  />
                </WrapItem>
              </Wrap>
            </WrapItem>
          </Wrap>
        </HStack>
      </VStack>
    </Box>
  );
}
