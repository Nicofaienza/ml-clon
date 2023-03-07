import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  ComponentDefaultProps,
  Flex,
  Img,
  Square,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductDetailsType } from "../../../../interfaces/interfaces";

function DetailsImagesMobile({ product }: ComponentDefaultProps) {
  const [images, setImages] = useState<string[] | []>([]);
  const [pos, setPos] = useState(0);

  function handleDecrease() {
    if (pos === 0) {
      setPos((images.length - 1) * 100);
    } else {
      setPos(pos - 100);
    }
  }
  function handleIncrease() {
    if (pos === (images.length - 1) * 100) {
      setPos(0);
    } else {
      setPos(pos + 100);
    }
  }

  function getArrayImages(product: ProductDetailsType): string[] {
    // gemerate array of product images
    let array: string[] = [];
    product.pictures.map((pic) => array.push(pic.secure_url));
    return array;
  }

  useEffect(() => {
    setImages(getArrayImages(product));
  }, [product]);

  return (
    <Flex w="100%" position={"relative"} overflow={"hidden"}>
      <Flex
        w={"90%"}
        h="min-content"
        position="absolute"
        justifyContent={"space-between"}
        left="0"
        right={"0"}
        top="0"
        bottom="0"
        m="auto"
        zIndex={"5"}
      >
        <Square
          bg="#fff"
          p="4"
          borderRadius={"50%"}
          boxShadow="md"
          onClick={handleDecrease}
          cursor="pointer"
        >
          <ArrowLeftIcon />
        </Square>
        <Square
          bg="#fff"
          p="4"
          borderRadius={"50%"}
          boxShadow="md"
          onClick={handleIncrease}
          cursor="pointer"
        >
          <ArrowRightIcon />
        </Square>
      </Flex>
      <Flex
        whiteSpace={"nowrap"}
        position="relative"
        transition={"all 0.3s ease"}
        left={`-${pos}%`}
      >
        {images.map((img) => (
          <Square
            size="100%"
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Img src={img} />
          </Square>
        ))}
      </Flex>
    </Flex>
  );
}

export default DetailsImagesMobile;
