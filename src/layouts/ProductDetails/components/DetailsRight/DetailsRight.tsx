import { VStack, Text, HStack, Icon, Flex, Link } from "@chakra-ui/react";
import { ComponentDetailsProps } from "../../../../interfaces/interfaces";
import { BsTruck } from "react-icons/bs";

function DetailsRight({ product }: ComponentDetailsProps) {
  return (
    <Flex
      minWidth={"270px"}
      maxWidth="320px"
      h="fit-content"
      alignItems={"flex-start"}
      padding="4"
      border={"1px solid"}
      borderColor="gray.200"
      borderRadius="10"
      flexDirection={"column"}
      gap="4"
    >
      <Flex flexDirection={"column"} alignContent="flex-start">
        <Text fontSize={{ base: "18", md: "22" }} fontWeight="600">
          {product.title}
        </Text>

        {product.original_price !== null &&
        product.original_price !== product.price ? (
          <Flex alignItems={"flex-start"} flexDirection="column">
            <Text
              textDecor={"line-through"}
              color="gray.500"
              fontSize={{ base: "12", md: "16" }}
            >
              $
              {new Intl.NumberFormat("de-DE").format(
                Math.ceil(product.original_price)
              )}
            </Text>
            <HStack>
              <Text fontSize={{ base: "22", md: "26" }}>
                $
                {new Intl.NumberFormat("de-DE").format(
                  Math.ceil(product.price)
                )}
              </Text>
              <Text color="green" fontSize={{ base: "14", md: "18" }}>
                %
                {Math.round(
                  100 - (product.price * 100) / product.original_price
                )}{" "}
                OFF
              </Text>
            </HStack>
            <Text fontSize={{ base: "14", md: "18" }} color="green">
              En 3 cuotas sin interés de $
              {new Intl.NumberFormat("de-DE").format(
                Math.ceil(product.price / 3)
              )}
            </Text>
          </Flex>
        ) : (
          <VStack alignItems={"flex-start"} gap="0">
            <Text fontSize={{ base: "26", md: "32" }}>
              ${new Intl.NumberFormat("de-DE").format(Math.ceil(product.price))}
            </Text>
            <Text fontSize={{ base: "14", md: "18" }} color="#00a650">
              En 3 cuotas sin interés de $
              {new Intl.NumberFormat("de-DE").format(
                Math.ceil(product.price / 3)
              )}
            </Text>
          </VStack>
        )}

        <Text
          fontSize={{ base: "12", md: "14" }}
          p={"1"}
          bg="lightBlue"
          color="blue"
          fontWeight={"500"}
          w="fit-content"
        >
          5% OFF con Mercado Crédito
        </Text>
        <Text
          fontSize={{ base: "12", md: "14" }}
          color="#3483FA"
          fontWeight={"500"}
        >
          Ver métodos de pago y promociones
        </Text>
      </Flex>
      <HStack alignItems="flex-start">
        <Icon
          as={BsTruck}
          w={{ base: "16px", md: "20px" }}
          h={{ base: "16px", md: "20px" }}
          position={"relative"}
          top="1"
          color="green"
        />
        <VStack alignItems={"flex-start"}>
          <Text
            fontWeight={"400"}
            fontSize={{ base: "14", md: "18" }}
            color="green"
          >
            Envio gratis a todo el país
          </Text>
          <Text fontSize={{ base: "12", md: "14" }} color="gray.500">
            Conocé los tiempos y las formas de envio.
          </Text>
          <Text
            fontSize={{ base: "12", md: "14" }}
            color="blue"
            fontWeight={"500"}
            cursor="pointer"
          >
            Calcular cuando llega.
          </Text>
        </VStack>
      </HStack>
      <Flex flexDirection={"column"} gap="2" w="100%">
        <Link
          w="100%"
          p="3"
          color={"#fff"}
          bg="blue"
          href={product.permalink}
          target="_blank"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="8"
          fontWeight={"600"}
          transition="background 0.3s ease"
          _hover={{ textDecoration: "none", bg: "darkBlue" }}
          cursor="pointer"
          fontSize={{ base: "14", md: "18" }}
        >
          Comprar ahora
        </Link>
        <Link
          w="100%"
          p="3"
          target="_blank"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="8"
          fontWeight={"600"}
          _hover={{ textDecoration: "none" }}
          cursor="pointer"
          color={"blue"}
          bg="lightBlue"
          fontSize={{ base: "14", md: "18" }}
        >
          Agregar al carrito
        </Link>
      </Flex>
    </Flex>
  );
}

export default DetailsRight;
