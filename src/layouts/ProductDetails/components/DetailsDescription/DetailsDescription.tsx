import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProductDesc } from "../../../../services/api";

type DescriptionProps = {
  id: string;
};

function DetailsDescription({ id }: DescriptionProps) {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    getProductDesc(id)
      .then((res) => setDesc(res))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Box w={"90%"} p="4">
      <Text
        fontSize={{ base: "16", md: "20" }}
        paddingY="4"
        fontWeight={"600"}
        w="100%"
      >
        Descripción
      </Text>
      <Text fontSize={{ base: "14", md: "18" }}>{desc}</Text>
    </Box>
  );
}

export default DetailsDescription;
