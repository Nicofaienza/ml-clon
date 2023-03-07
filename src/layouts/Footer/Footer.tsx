import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import MediaQuery from "react-responsive";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <MediaQuery minWidth={1000}>
        <Box h="80px" bg="#fff" marginTop={"8"}>
          <HStack
            h="100%"
            w={"90%"}
            maxWidth="1200px"
            m="auto"
            justifyContent={"space-between"}
            position="relative"
          >
            <Text>Hecho por Nicolás Faienza.</Text>

            <img
              style={{
                height: "34px",
                position: "absolute",
                left: "0",
                right: "0",
                margin: "auto",
                cursor: "pointer",
              }}
              src={logo}
              alt="Logo de Mercado Livre"
              onClick={() => {
                navigate("/ml-clon");
                window.scrollTo(0, 0);
              }}
            />

            <HStack gap="4">
              <a
                href="https://www.linkedin.com/in/nicolas-faienza/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsLinkedin size="25px" cursor={"pointer"} />
              </a>
              <a
                href="https://github.com/Nicofaienza"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub size="25px" />
              </a>
            </HStack>
          </HStack>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <Flex
          flexDirection={"column"}
          alignItems="center"
          bg="#fff"
          gap="3"
          p="2"
          marginTop={"4"}
        >
          <Text>Hecho por Nicolás Faienza.</Text>

          <HStack gap="4">
            <a
              href="https://www.linkedin.com/in/nicolas-faienza/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsLinkedin size="25px" cursor={"pointer"} />
            </a>
            <a
              href="https://github.com/Nicofaienza"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsGithub size="25px" />
            </a>
          </HStack>
        </Flex>
      </MediaQuery>
    </>
  );
}

export default Footer;
