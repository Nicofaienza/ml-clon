import {
  Flex,
  HStack,
  Text,
  VStack,
  Img,
  Box,
  Divider,
  Center,
  Icon,
} from "@chakra-ui/react";
import messagePos from "./images/message-positive.svg";
import medal from "./images/medal.svg";
import timePos from "./images/time-positive.svg";
import { BsGeoAlt } from "react-icons/bs";
import { SellerAddress } from "../../../../interfaces/interfaces";

type DetailsSellerProps = {
  seller: SellerAddress;
};

function DetailsSeller({ seller }: DetailsSellerProps) {
  console.log("seller: ", seller);
  return (
    <Flex
      flexDir={"column"}
      minWidth="270px"
      maxWidth="320px"
      h="fit-content"
      alignItems={"flex-start"}
      padding="4"
      border={"1px solid"}
      borderColor="gray.200"
      borderRadius="10"
      gap="4"
    >
      <Text fontWeight={"600"} fontSize={{ base: "14", md: "18" }}>
        Información sobre el vendedor
      </Text>
      <HStack alignItems={"flex-start"}>
        <Icon
          as={BsGeoAlt}
          h={{ base: "16px", md: "22px" }}
          w={{ base: "16px", md: "22px" }}
          style={{ position: "relative", top: "3" }}
        />
        <VStack alignItems={"flex-start"}>
          <Text fontSize={{ base: "12", md: "16" }}>Ubicación</Text>
          <Text fontSize={{ base: "12", md: "14" }} color="gray.500">
            {seller.city.name ?? seller.city.name},{" "}
            {seller.country.name ?? seller.country.name}
          </Text>
        </VStack>
      </HStack>
      <HStack alignItems={"flex-start"}>
        <Img
          src={medal}
          h={{ base: "16px", md: "22px" }}
          w={{ base: "16px", md: "22px" }}
          position="relative"
          top="3px"
        />
        <VStack alignItems={"flex-start"}>
          <Text
            fontSize={{ base: "14", md: "18" }}
            fontWeight={"600"}
            color="green"
          >
            MercadoLider Platinum
          </Text>
          <Text fontSize={{ base: "12", md: "14" }} color="gray.500">
            ¡Es uno de los mejores del sitio!
          </Text>
        </VStack>
      </HStack>
      <HStack w="100%" justifyContent={"center"}>
        <Box
          h={{ base: "6px", md: "8px" }}
          w={{ base: "45px", md: "55px" }}
          bg="#fff0f0"
        ></Box>
        <Box
          h={{ base: "6px", md: "8px" }}
          w={{ base: "45px", md: "55px" }}
          bg="#fff5e8"
        ></Box>
        <Box
          h={{ base: "6px", md: "8px" }}
          w={{ base: "45px", md: "55px" }}
          bg="#fffcda"
        ></Box>
        <Box
          h={{ base: "6px", md: "8px" }}
          w={{ base: "45px", md: "55px" }}
          bg="#f1fdd7"
        ></Box>
        <Box
          h={{ base: "10px", md: "12px" }}
          w={{ base: "45px", md: "55px" }}
          bg="green"
        ></Box>
      </HStack>
      <HStack>
        <VStack>
          <Text fontSize={{ base: "24", md: "28" }}>+1000</Text>
          <Text fontSize={"12"} color="gray.500" textAlign={"center"}>
            Ventas en los últimos 60 días
          </Text>
        </VStack>
        <Center h="100%">
          <Divider orientation="vertical" />
        </Center>
        <VStack>
          <Img src={messagePos} h={{ base: "24px", md: "28px" }} />
          <Text fontSize={"12"} color="gray.500" textAlign={"center"}>
            Brinda buena atención
          </Text>
        </VStack>
        <Center h="100%">
          <Divider orientation="vertical" />
        </Center>

        <VStack>
          <Img src={timePos} h={{ base: "24px", md: "28px" }} />
          <Text fontSize={"12"} color="gray.500" textAlign={"center"}>
            Despacha sus productos a tiempo
          </Text>
        </VStack>
      </HStack>
      <Text color="blue" fontSize={{ base: "12", md: "14" }} cursor="pointer">
        Ver más datos de este vendedor
      </Text>
    </Flex>
  );
}

export default DetailsSeller;
