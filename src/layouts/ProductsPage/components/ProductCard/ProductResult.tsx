import { Box, Img, VStack, Text, Flex, HStack } from "@chakra-ui/react";
import { Product } from "../../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/context";
import { useContext } from "react";
import { getProductDetails } from "../../../../services/api";

type ProducResultProp = {
  product: Product;
};

function ProductResult({ product }: ProducResultProp) {
  const { selectProduct } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClickProduct = async (productID: string) => {
    const product = await getProductDetails(productID);
    selectProduct(product);
    navigate(`/product-details/${productID}`);
  };

  return (
    <Flex
      marginTop={"0"}
      w="100%"
      bg="#fff"
      display="flex"
      alignItems={"center"}
      justifyContent={"space-around"}
      p="2 4"
      h="200px"
      borderTop="1px solid"
      borderColor={"gray.200"}
      onClick={() => handleClickProduct(product.id)}
      cursor="pointer"
      transition={"all 0.3s ease"}
      _hover={{ boxShadow: "md" }}
    >
      <Box
        w={"30%"}
        h="85%"
        overflow={"hidden"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Img src={product.thumbnail} h="80%" objectFit={"cover"} />
      </Box>
      <VStack alignItems={"flex-start"} w="60%">
        <Text fontSize={{ base: "14", md: "18" }} fontWeight={"600"}>
          {product.title.length > 88
            ? product.title.slice(0, 88) + "..."
            : product.title}
        </Text>
        <Text fontSize={{ base: "10", md: "14" }} color="gray.500">
          Vendido por {product.seller.nickname}
        </Text>
        {product.original_price !== null &&
        product.original_price !== product.price ? (
          <Flex alignItems={"flex-start"} flexDirection="column">
            <Text
              fontSize={{ base: "12", md: "16" }}
              textDecor={"line-through"}
              color="gray.500"
            >
              $
              {new Intl.NumberFormat("de-DE").format(
                Math.ceil(product.original_price)
              )}
            </Text>
            <HStack>
              <Text fontSize={{ base: "20", md: "28" }}>
                $
                {new Intl.NumberFormat("de-DE").format(
                  Math.ceil(product.price)
                )}
              </Text>
              <Text color="green" fontSize={{ base: "12", md: "16" }}>
                %
                {Math.round(
                  100 - (product.price * 100) / product.original_price
                )}
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
            <Text fontSize={"28"}>
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
      </VStack>
    </Flex>
  );
}

export default ProductResult;
