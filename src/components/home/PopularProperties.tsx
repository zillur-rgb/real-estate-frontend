import beach from "../../assets/realestatebeach.jpg";
import mountain from "../../assets/realestatemountain.jpg";
import village from "../../assets/realestatecountryside.jpg";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { apiRequest } from "../../utils/apiRequests";
import SpinnerComponent from "../shared/Spinner";
import ButtonComponent from "../shared/ButtonComponent";
import HeadingComponent from "../shared/Heading";

const PopularProperties = () => {
  const { data, isLoading, error } = useQuery("numOfTypes", async () => {
    try {
      const result = await apiRequest("/property/get/num-of-property", "GET");
      console.log("result", result.data);

      return result.data;
    } catch (error) {
      console.log(error);
    }
  });

  if (isLoading) {
    <SpinnerComponent />;
  }

  if (error) {
    <h1>Fetch error</h1>;
  }

  return (
    <VStack mx={{ base: 1, md: 2, lg: 28, xl: 72 }} py={10}>
      <HeadingComponent text="Popular Properties" />
      <Text color={"brand.700"} maxW={"60%"} textAlign={"center"} py={6}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        rem, minima molestiae corrupti voluptatibus in. Perspiciatis
        voluptatummtur adipisicing elit. Consequuntur rem, minima molestiae
        corrupti voluptatibus in. Perspiciatis voluptatum dolorum laboriosam
        sunt.
      </Text>

      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        <VStack spacing={2} align={"flex-start"}>
          <img height={"400px"} src={beach} alt="beach" />
          <Text color={"brand.800"}>Beach Properties</Text>
          <Text color={"brand.700"}>{data?.beach} Properties</Text>
          <ButtonComponent label="More Properties" />
        </VStack>
        <VStack spacing={2} align={"flex-start"}>
          <img height={"400px"} src={mountain} alt="mountain" />
          <Text color={"brand.800"}>Mountain Proprties</Text>
          <Text color={"brand.700"}>{data?.mountain} Properties</Text>
          <ButtonComponent label="More Properties" />
        </VStack>
        <VStack spacing={2} align={"flex-start"}>
          <img height={"400px"} src={village} alt="mountain" />
          <Text color={"brand.800"}>Country Side Proprties</Text>
          <Text color={"brand.700"}>{data?.village} Properties</Text>
          <ButtonComponent label="More Properties" />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default PopularProperties;
