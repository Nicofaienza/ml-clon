import { Flex, VStack } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailsImages from "./components/DetailsImages/DetailsImages";
import { getProductDetails } from "../../services/api";
import { AppContext } from "../../context/context";
import DetailsRight from "./components/DetailsRight/DetailsRight";
import DetailsDescription from "./components/DetailsDescription/DetailsDescription";
import DetailsAtributes from "./components/DetailsAtributes/DetailsAtributes";
import DetailsQuestions from "./components/DetailsQuestions/DetailsQuestions";
import DetailsSeller from "./components/DetailsSeller/DetailsSeller";
import MediaQuery from "react-responsive";
import DetailsImagesMobile from "./components/mobile/DetailsImagesMobile";

function ProductDetails() {
  const { state, selectProduct } = useContext(AppContext);
  const { productID } = useParams<string>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProductDetails(productID)
      .then((res) => selectProduct(res))
      .catch((e) => console.log(e));
    console.log("state: ", state.selectedProduct);
  }, [productID]);

  useEffect(() => {}, [state.selectedProduct]);

  return (
    <>
      <MediaQuery minWidth={1250}>
        <Flex bg="#fff" p="8" w="90%" maxW="1200px" m={"auto"}>
          <VStack w={"70%"} alignItems={"flex-start"} p="4">
            <DetailsImages product={state.selectedProduct} />
            <DetailsAtributes atr={state.selectedProduct.attributes} />
            <DetailsDescription id={state.selectedProduct.id} />
            <DetailsQuestions id={state.selectedProduct.id} />
          </VStack>
          <VStack>
            <DetailsRight product={state.selectedProduct} />
            <DetailsSeller seller={state.selectedProduct.seller_address} />
          </VStack>
        </Flex>
      </MediaQuery>
      <MediaQuery maxWidth={1250}>
        <Flex
          w="95%"
          flexDirection={"column"}
          bg="#fff"
          alignItems={"center"}
          justifyContent="center"
          m="auto"
        >
          <DetailsImagesMobile product={state.selectedProduct} />
          <Flex wrap={"wrap"} justifyContent="center" gap="2">
            <DetailsRight product={state.selectedProduct} />
            <DetailsSeller seller={state.selectedProduct.seller_address} />
          </Flex>
          <Flex flexDirection={"column"} w="100%">
            <DetailsAtributes atr={state.selectedProduct.attributes} />
            <DetailsDescription id={state.selectedProduct.id} />
            <DetailsQuestions id={state.selectedProduct.id} />
          </Flex>
        </Flex>
      </MediaQuery>
    </>
  );
}

export default ProductDetails;
