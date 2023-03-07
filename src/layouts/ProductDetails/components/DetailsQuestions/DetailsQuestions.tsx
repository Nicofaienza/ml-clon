import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProductQuestions } from "../../../../services/api";
import { AiOutlineEnter } from "react-icons/ai";

type DetailsQuestionsProps = {
  id: string;
};

export type Question = {
  date_created: string;
  item_id: string;
  seller_id: number;
  status: string;
  text: string;
  tags: [];
  id: number;
  answer: {
    text: string;
    status: string;
    date_created: string;
  };
};

function DetailsQuestions({ id }: DetailsQuestionsProps) {
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    async function getQuestions() {
      const newQuestions = await getProductQuestions(id)
        .then((res) => res)
        .catch((e) => console.log(e));
      setQuestions(newQuestions);
    }
    getQuestions();
  }, [id]);

  return (
    <Box w="90%" p="4">
      <Text fontSize={{ base: "16", md: "20" }} paddingY="4" fontWeight={"600"}>
        Preguntas y respuestas
      </Text>
      <Flex flexDirection={"column"} gap="2" paddingBottom={"8"}>
        <Text fontSize={{ base: "14", md: "18" }}>
          Preguntá lo que querés saber
        </Text>
        <HStack
          border="1px solid"
          borderColor={"gray.400"}
          borderRadius="8px"
          h={{ base: "8", md: "12" }}
        >
          <Input variant={"unstyled"} paddingX="4" />
          <Box
            bg="blue"
            h={"100%"}
            w="60px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderTopEndRadius="8px"
            borderBottomEndRadius={"8px"}
            cursor="pointer"
          >
            <SearchIcon color="#fff" />
          </Box>
        </HStack>
      </Flex>
      {questions?.length === 0 ? (
        <Text color="gray.500">
          Aún no hay preguntas <br /> ¡Sé el primero en preguntar!
        </Text>
      ) : (
        questions?.slice(0, 10).map((q) => (
          <Flex key={q.id} flexDirection="column" paddingY={"2"}>
            <Text fontSize={{ base: "14", md: "16" }}>{q.text}</Text>
            <HStack alignItems="flex-start">
              <Icon
                as={AiOutlineEnter}
                w="6"
                h="6"
                color="gray.500"
                transform="rotateY(180deg)"
              />
              <Text
                w="90%"
                color="gray.500"
                fontSize={{ base: "14", md: "16" }}
              >
                {q.answer?.text === null
                  ? "Aún no hay respuesta..."
                  : q.answer?.text}
              </Text>
            </HStack>
          </Flex>
        ))
      )}
    </Box>
  );
}

export default DetailsQuestions;
