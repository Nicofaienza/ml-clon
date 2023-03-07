import {
  Img,
  VStack,
  Box,
  Text,
  HStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { AppContext } from "../../../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../../interfaces/interfaces";
import { getProductDetails } from "../../../../services/api";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { selectProduct } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClickProduct = async (productID: string) => {
    const product = await getProductDetails(productID);
    selectProduct(product);
    navigate(`/product-details/${productID}`);
  };

  return (
    <VStack bg="#fff" w="100%" h="350px" p="4">
      <Box
        cursor={"pointer"}
        w="100%"
        onClick={() => {
          handleClickProduct(product.id);
        }}
        h="50%"
      >
        <Img
          h="80%"
          position={"relative"}
          src={product.thumbnail}
          margin="auto"
        />
      </Box>
      <Divider />
      <VStack alignItems={"flex-start"} w="90%">
        {product.original_price !== null &&
        product.original_price !== product.price ? (
          <Flex alignItems={"flex-start"} flexDirection="column">
            <Text textDecor={"line-through"} color="gray.500">
              $
              {new Intl.NumberFormat("de-DE").format(
                Math.ceil(product.original_price)
              )}
            </Text>
            <HStack>
              <Text fontSize={"28"}>
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
            <Text fontSize={"28"}>
              ${new Intl.NumberFormat("de-DE").format(Math.ceil(product.price))}
            </Text>
          </VStack>
        )}
        <Text fontSize={"16"} color="gray.500" w="100%" whiteSpace={"normal"}>
          {product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </Text>
      </VStack>
    </VStack>
  );
}

export default ProductCard;
