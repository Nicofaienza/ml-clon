import { Attributes } from "../../../../interfaces/interfaces";
import { Table, Tbody, Tr, Td, Text, Flex } from "@chakra-ui/react";

type DetailsAtributesProps = {
  atr: Attributes;
};

function DetailsAtributes({ atr }: DetailsAtributesProps) {
  console.log("atributes: ", atr);
  return (
    <Flex flexDirection={"column"} w="100%" p="4">
      <Text
        paddingY={"4"}
        fontSize={{ base: "16", md: "20" }}
        fontWeight={"600"}
      >
        Características
      </Text>
      <Table
        size={{ base: "sm", md: "md" }}
        variant={"striped"}
        maxWidth="100%"
      >
        <Tbody w="100%" position={"relative"} zIndex="0">
          {atr.slice(0, 8).map((atr) => (
            <Tr key={atr.id} w="90%">
              <Td w="50%">
                <Text
                  w="100%"
                  fontSize={{ base: "14", md: "18" }}
                  fontWeight="600"
                >
                  {atr.name}
                </Text>
              </Td>
              <Td>
                <Text
                  w="100%"
                  fontSize={{ base: "14", md: "18" }}
                  css={{ lineBreak: "anywhere" }}
                >
                  {atr.value_name ? atr.value_name : "-"}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
}

export default DetailsAtributes;
