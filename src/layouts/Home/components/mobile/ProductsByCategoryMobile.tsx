import { Box, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/context";
import { Product } from "../../../../interfaces/interfaces";
import {
  getNameCategory,
  getProductDetails,
  getResultsByCategory,
} from "../../../../services/api";

type CategoryProps = {
  id: string;
};

function ProductsByCategoryMobile({ id }: CategoryProps) {
  const [categoryName, setCategoryName] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const { selectProduct } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClickProduct = async (productID: string) => {
    const product = await getProductDetails(productID);
    selectProduct(product);
    console.log("hola");
    navigate(`/product-details/${productID}`);
  };

  useEffect(() => {
    getNameCategory(id)
      .then((res) => setCategoryName(res.name))
      .catch((e) => console.log(e));

    getResultsByCategory(id)
      .then((res) => setResults(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Flex
      flexDirection={"column"}
      w="90%"
      m="0 auto"
      bg="#fff"
      borderRadius={"4"}
    >
      <Text p="4" fontSize={"18"} fontWeight="600">
        {categoryName}
      </Text>
      <Flex flexDirection={"column"}>
        {results.slice(0, 5).map((product) => (
          <HStack
            paddingRight={"4"}
            key={product.id}
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor={"gray.200"}
            paddingTop="2"
            paddingBottom="2"
            cursor={"pointer"}
            onClick={() => {
              handleClickProduct(product.id);
            }}
          >
            <Box>
              <Img src={product.thumbnail} />
            </Box>
            <VStack alignItems={"flex-start"}>
              <Text>
                {" "}
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </Text>
              <VStack alignItems={"flex-start"} w="90%">
                {product.original_price !== null &&
                product.original_price !== product.price ? (
                  <Flex alignItems={"flex-start"} flexDirection="column">
                    <Text
                      fontSize={"14"}
                      textDecor={"line-through"}
                      color="gray.500"
                    >
                      $
                      {new Intl.NumberFormat("de-DE").format(
                        Math.ceil(product.original_price)
                      )}
                    </Text>
                    <HStack>
                      <Text fontSize={"18"}>
                        $
                        {new Intl.NumberFormat("de-DE").format(
                          Math.ceil(product.price)
                        )}
                      </Text>
                      <Text color="green">
                        %
                        {Math.round(
                          100 - (product.price * 100) / product.original_price
                        )}{" "}
                        OFF
                      </Text>
                    </HStack>
                  </Flex>
                ) : (
                  <VStack alignItems={"flex-start"} gap="0">
                    <Text fontSize={"18"}>
                      $
                      {new Intl.NumberFormat("de-DE").format(
                        Math.ceil(product.price)
                      )}
                    </Text>
                  </VStack>
                )}
              </VStack>
            </VStack>
          </HStack>
        ))}
      </Flex>
      <Box p="4">
        <Text
          color="blue"
          fontWeight={"600"}
          cursor={"pointer"}
          w="fit-content"
        >
          Ver más
        </Text>
      </Box>
    </Flex>
  );
}

export default ProductsByCategoryMobile;
function selectProduct(product: any) {
  throw new Error("Function not implemented.");
}
