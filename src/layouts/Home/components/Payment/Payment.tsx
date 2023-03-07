import React from "react";
import { HStack, Img, Square, Text, VStack } from "@chakra-ui/react";
import credit from "./images/credit-card.svg";
import debit from "./images/debit-card.svg";
import mCredits from "./images/mercado-creditsv2.svg";
import agreement from "./images/payment-agreement.svg";
import viewMore from "./images/view-more.svg";
import MediaQuery from "react-responsive";

function Payment() {
  const payments = [
    {
      id: "0",
      name: "Tarjeta de crédito",
      link: "Ver promociones bancarias",
      img: credit,
    },
    {
      id: "1",
      name: "Tarjeta de débito",
      link: "Ver más",
      img: debit,
    },
    {
      id: "2",
      name: "Cuotas sin tarjeta",
      link: "Conocé Mercado Crédito",
      img: mCredits,
    },
    {
      id: "3",
      name: "Efectivo",
      link: "Ver más",
      img: agreement,
    },
  ];

  return (
    <>
      <MediaQuery minWidth={1080}>
        <HStack
          width={"90%"}
          maxWidth="1200px"
          margin={"auto"}
          justifyContent="space-between"
          bg="#fff"
          p="5"
          borderRadius={"6"}
          boxShadow="sm"
        >
          {payments.map((pay) => (
            <HStack key={pay.id}>
              <Square size={"14"}>
                <Img h={"100%"} src={pay.img} />
              </Square>
              <VStack alignItems={"flex-start"}>
                <Text fontSize={"20"}>{pay.name}</Text>
                <Text color="blue" fontSize={"14"}>
                  {pay.link}
                </Text>
              </VStack>
            </HStack>
          ))}

          <Square>
            <Img src={viewMore} />
          </Square>
        </HStack>
      </MediaQuery>
      <MediaQuery maxWidth={1080}>
        <HStack
          width={"100%"}
          maxWidth="1200px"
          margin={"auto"}
          justifyContent="center"
          bg="#fff"
          p="5"
          boxShadow="sm"
        >
          <Square size={"14"}>
            <Img h={"100%"} src={credit} />
          </Square>
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"18"}>Mismo precio hasta en 6 cuotas</Text>
            <Text color="blue" fontSize={"12"} cursor="pointer">
              Ver promociones bancarias
            </Text>
          </VStack>
        </HStack>
      </MediaQuery>
    </>
  );
}

export default Payment;
