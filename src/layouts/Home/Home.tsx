import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Category from "./components/ProductsByCategory/ProductsByCategory";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Payment from "./components/Payment/Payment";
import Suscribe from "./components/Suscribe/Suscribe";
import MediaQuery from "react-responsive";
import ProductsByCategoryMobile from "./components/mobile/ProductsByCategoryMobile";

function Home(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MediaQuery minWidth={1250}>
        <Box w="100%" display={"flex"} flexDirection="column" gap="16">
          <MainCarousel />
          <Payment />
          <Category id="MLA1051" />
          <Suscribe />
          <Category id="MLA1276" />
        </Box>
      </MediaQuery>

      <MediaQuery maxWidth={1250}>
        <MainCarousel />
        <Payment />
        <Flex flexDirection={"column"} gap="8" marginTop="8">
          <ProductsByCategoryMobile id="MLA1051" />
          <Suscribe />
          <ProductsByCategoryMobile id="MLA1276" />
        </Flex>
      </MediaQuery>
    </>
  );
}

export default Home;
