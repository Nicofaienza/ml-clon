import { HStack, VStack, Text, Flex, Divider, Center } from "@chakra-ui/react";
import { AppContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getResultsByQuery } from "../../services/api";
import ShowResults from "./components/ShowResults/ShowResults";
import ShowFilters from "./components/ShowFilters/ShowFilters";
import MediaQuery from "react-responsive";

function ProductsPage(): JSX.Element {
  const { state, setQuery, getProducts } = useContext(AppContext);
  const [params] = useSearchParams();
  const search = params.get("search") ?? "";
  const [orderBy, setOrderBy] = useState("default");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setQuery(search);

    getResultsByQuery(state.query)
      .then((res) => {
        getProducts(res.results);
        setFilters(res.available_filters);
      })
      .catch((e) => console.log(e));
  }, [params.get("search"), state.query]);

  return (
    <>
      <MediaQuery minWidth={1000}>
        <HStack
          paddingTop={"16"}
          w="90%"
          maxWidth={"1200px"}
          m="auto"
          alignItems="flex-start"
          justifyContent={"space-between"}
        >
          <VStack w="30%" alignItems={"flex-start"}>
            <Text fontSize={"28"} fontWeight="600" color="#000">
              {state.query.toUpperCase()}
            </Text>
            <ShowFilters filters={filters} />
          </VStack>

          <Flex
            flexDirection={"column"}
            w={"65%"}
            gap={"0"}
            alignItems="flex-end"
          >
            <HStack>
              <Text>Ordenar por: </Text>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setOrderBy("default");
                }}
              >
                Relevancia
              </Text>
              <Center h="20px">
                <Divider orientation="vertical" />
              </Center>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setOrderBy("highest");
                }}
              >
                Mayor precio
              </Text>
              <Center h="20px">
                <Divider orientation="vertical" />
              </Center>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setOrderBy("lowest");
                }}
              >
                Menor precio
              </Text>
            </HStack>
            <ShowResults />
          </Flex>
        </HStack>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <Text fontSize={"20"} padding="4" fontWeight="600" color="#000">
          {state.query.toUpperCase()}
        </Text>
        <ShowResults />
      </MediaQuery>
    </>
  );
}
export default ProductsPage;
/*{orderBy === "lowest"
          ? state.products
              .sort((a, b) => a.price - b.price)
              .map((product) => (
                <ProductResult key={product.id} product={product} />
              ))
          : orderBy === "highest"
          ? state.products
              .sort((a, b) => b.price - a.price)
              .map((product) => (
                <ProductResult key={product.id} product={product} />
              ))
          : orderBy === "default"
          ? state.products.map((product) => (
              <ProductResult key={product.id} product={product} />
            ))
          : null}*/
