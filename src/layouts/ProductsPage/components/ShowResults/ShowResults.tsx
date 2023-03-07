import { AppContext } from "../../../../context/context";
import { useContext } from "react";
import ProductResult from "../ProductCard/ProductResult";
import { Flex } from "@chakra-ui/react";

function ShowResults(): JSX.Element {
  const { state } = useContext(AppContext);
  return (
    <Flex flexDirection={"column"}>
      {state.products.map((product) => (
        <ProductResult key={product.id} product={product} />
      ))}
    </Flex>
  );
}

export default ShowResults;
