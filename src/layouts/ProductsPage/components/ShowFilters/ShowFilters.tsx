import { List, ListItem, Text, VStack } from "@chakra-ui/react";
import { Filters } from "../../../../interfaces/interfaces";

type FiltersProps = {
  filters: Filters[] | [];
};

function ShowFilters({ filters }: FiltersProps) {
  return (
    <VStack alignItems={"flex-start"}>
      {filters.map((filter) => (
        <VStack alignItems={"flex-start"} key={filter.id}>
          <Text fontSize={"16"} fontWeight="600">
            {filter.name}
          </Text>
          <List>
            {filter.values.slice(0, 12).map((value) => (
              <ListItem
                display={"flex"}
                gap="1"
                alignItems={"center"}
                key={value.id}
              >
                <Text fontSize={"14"} cursor="pointer">
                  {value.name}
                </Text>
                <Text color="gray.500" fontSize={"12"}>
                  ({value.results})
                </Text>
              </ListItem>
            ))}
            {filters.values.length > 12 ?? (
              <Text fontSize={"14"} cursor="pointer" color="blue">
                Mostrar más
              </Text>
            )}
          </List>
        </VStack>
      ))}
    </VStack>
  );
}

export default ShowFilters;
