import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";

import dplusImg from "./Images/dplus.svg";
import starplusImg from "./Images/starplus.svg";
import truckImg from "./Images/truck.png";

import MediaQuery from "react-responsive";

function Suscribe() {
  return (
    <VStack
      w={"90%"}
      maxWidth="1200px"
      m="auto"
      boxShadow={"md"}
      bg="#fff"
      borderRadius={"12px"}
    >
      <HStack
        p="8"
        h="86px"
        w="100%"
        color="#fff"
        bgImage={"linear-gradient(to right, #A90F90 60% , #161A55  )"}
        justifyContent="space-between"
        css={{ borderRadius: "12px 12px 0 0" }}
      >
        <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="600">
          Suscribite al nivel 6
        </Text>
        <Flex
          flexDirection={"column"}
          borderLeft={"2px solid #fff"}
          paddingLeft="2"
          alignItems={"flex-start"}
        >
          <Text
            m="0"
            fontSize={{ base: "12px", md: "14px" }}
            textDecoration={"line-through"}
          >
            $1.439
          </Text>
          <Text
            marginTop="0"
            fontWeight={"600"}
            fontSize={{ base: "18px", md: "24px" }}
          >
            $499
            <Text as={"span"} fontSize={{ base: "10px", md: "12px" }}>
              /mes
            </Text>
          </Text>
        </Flex>
      </HStack>
      <VStack
        borderRadius={"12px"}
        bg="#fff"
        w="100%"
        alignItems="flex-start"
        p="8"
        gap="8"
      >
        <Text>Conseguí los mejores beneficios en Mercado Libre</Text>
        <MediaQuery minWidth={1000}>
          <HStack justifyContent={"space-between"} w="100%">
            <HStack w="30%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={dplusImg} />
              </Square>
              <Text>Disney+ sin cargo</Text>
            </HStack>
            <HStack w="30%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={starplusImg} />
              </Square>
              <Text>Star+ sin cargo </Text>
            </HStack>
            <HStack w="30%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={truckImg} />
              </Square>
              <Text>
                Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de
                menos de $ 8.000
              </Text>
            </HStack>
          </HStack>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <VStack justifyContent={"space-between"} w="100%">
            <HStack w="100%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={dplusImg} />
              </Square>
              <Text>Disney+ sin cargo</Text>
            </HStack>
            <HStack w="100%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={starplusImg} />
              </Square>
              <Text>Star+ sin cargo </Text>
            </HStack>
            <HStack w="100%">
              <Square
                size={"72px"}
                borderRadius="50%"
                border="1px solid "
                borderColor={"gray.300"}
                overflow={"hidden"}
              >
                <Img src={truckImg} />
              </Square>
              <Text>
                Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de
                menos de $ 8.000
              </Text>
            </HStack>
          </VStack>
        </MediaQuery>
      </VStack>
      <Flex
        borderTop="1px solid"
        borderColor={"gray.300"}
        w="100%"
        p="4"
        justifyContent={"flex-end"}
      >
        <Button
          bg="blue"
          color="#fff"
          paddingX={{ base: "6", md: "8" }}
          paddingY={{ base: "4", md: "6" }}
          transition={"all 0.3s ease"}
          _hover={{ bg: "darkBlue" }}
          fontSize={{ base: "14", md: "18" }}
        >
          Suscribite
        </Button>
      </Flex>
    </VStack>
  );
}

export default Suscribe;
