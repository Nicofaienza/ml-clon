import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Grid, GridItem, HStack, Square, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Product } from "../../../../interfaces/interfaces";
import {
  getNameCategory,
  getResultsByCategory,
} from "../../../../services/api";
import ProductCard from "./ProductCard";

type CategoryProps = {
  id: string;
};

function ProductsByCategory({ id }: CategoryProps) {
  const [pos, setPos] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [results, setResults] = useState<Array<Product[]>>([]);

  function handleDecrease() {
    if (pos === 0) {
      setPos((results.length - 1) * 100);
    } else {
      setPos(pos - 100);
    }
  }
  function handleIncrease() {
    if (pos === (results.length - 1) * 100) {
      setPos(0);
    } else {
      setPos(pos + 100);
    }
  }

  function sliceArrayOfProducts(array: Product[]) {
    let newArray = [];
    let sliceLength = 5;

    for (let i = 0; i < array.length; i += sliceLength) {
      let slice = array.slice(i, i + sliceLength);
      newArray.push(slice);
    }

    return newArray;
  }

  useEffect(() => {
    getNameCategory(id)
      .then((res) => setCategoryName(res.name))
      .catch((e) => console.log(e));

    getResultsByCategory(id)
      .then((res) => setResults(sliceArrayOfProducts(res)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Flex
      w="90%"
      maxWidth={"1200px"}
      m="auto"
      position="relative"
      flexDirection={"column"}
      gap="8"
    >
      <Text fontSize={"20"} fontWeight="600">
        {categoryName}
      </Text>
      <HStack
        width={"100%"}
        justifyContent="space-between"
        position="absolute"
        right={"0"}
        left="0"
        top={"0"}
        bottom="0"
        m="auto"
      >
        <Square
          size={"50px"}
          borderRadius="50%"
          bg="#fff"
          boxShadow={"md"}
          position="relative"
          left={"-25px"}
          cursor={"pointer"}
          onClick={handleDecrease}
          zIndex={"20"}
        >
          <ArrowLeftIcon />
        </Square>
        <Square
          size={"50px"}
          borderRadius="50%"
          bg="#fff"
          boxShadow={"md"}
          position="relative"
          right={"-25px"}
          cursor={"pointer"}
          onClick={handleIncrease}
          zIndex={"20"}
        >
          <ArrowRightIcon />
        </Square>
      </HStack>
      <Flex w={"100%"} overflow="hidden">
        <Flex
          whiteSpace={"nowrap"}
          position="relative"
          left={`-${pos}%`}
          transition={"left 0.5s ease"}
        >
          {results.map((array) => (
            <Grid
              whiteSpace={"normal"}
              key={results.indexOf(array)}
              templateColumns={"1fr 1fr 1fr 1fr 1fr"}
              gap="4"
              minWidth="1200px"
            >
              {array.map((product) => (
                <GridItem key={product.id}>
                  <ProductCard product={product} />
                </GridItem>
              ))}
            </Grid>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProductsByCategory;
