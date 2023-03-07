import { CloseIcon } from "@chakra-ui/icons";
import { Box, Fade, HStack, Img, Square, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  ComponentDetailsProps,
  ProductDetailsType,
} from "../../../../interfaces/interfaces";

function DetailsImages({ product }: ComponentDetailsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<string[] | []>([]);
  const [mainImg, setMainImg] = useState<string>(images[0]);

  function getArrayImages(product: ProductDetailsType): string[] {
    //gemerate array of product images

    let array: string[] = [];
    product.pictures.map((pic) => array.push(pic.secure_url));
    return array;
  }

  useEffect(() => {
    setMainImg(images[0]);
    setImages(getArrayImages(product));
  }, [product]);

  return (
    <HStack alignItems={"flex-start"} maxWidth={"800px"} h="600px" gap={"8"}>
      <VStack
        h="100%"
        w={"70px"}
        overflowX={"hidden"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },

          "&::-webkit-scrollbar-track": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ccc",
            borderRadius: "24px",
          },
        }}
      >
        {images.map((img) => (
          <Square
            size={"56px"}
            key={img}
            cursor="pointer"
            border={mainImg === img ? "2px solid" : " 2px"}
            borderColor={mainImg === img ? "blue" : "gray.200"}
            borderRadius={4}
            bg="#fff"
            overflow={"hidden"}
            _hover={{ borderColor: "blue" }}
          >
            <Img
              objectFit={"contain"}
              src={img}
              onClick={() => {
                setMainImg(img);
              }}
            />
          </Square>
        ))}
      </VStack>
      <Square
        size={"600px"}
        position="relative"
        overflow={"hidden"}
        borderBottom="1px solid"
        borderColor={"gray.200"}
        cursor="pointer"
        onClick={() => {
          setIsOpen(true);
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "18px";
        }}
      >
        <Img objectFit={"contain"} src={mainImg} />
      </Square>
      <Fade in={isOpen}>
        <Box
          display={isOpen ? "flex" : "none"}
          h="100vh"
          w="100%"
          position="fixed"
          zIndex={"100"}
          top="0"
          left={"0"}
          alignItems={"center"}
          justifyContent="center"
          bg="blackAlpha.600"
          m="0"
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0";
          }}
        >
          <CloseIcon
            position={"absolute"}
            top="40px"
            right={"40px"}
            color="#fff"
            w={"30px"}
            h="30px"
            cursor={"pointer"}
            onClick={() => {
              setIsOpen(!isOpen);
              document.body.style.overflow = "auto";
              document.body.style.paddingRight = "0";
            }}
          />

          <Img h="75%" src={mainImg} />
        </Box>
      </Fade>
    </HStack>
  );
}

export default DetailsImages;
