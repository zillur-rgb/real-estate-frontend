import { SimpleGrid, VStack } from "@chakra-ui/react";
import HeadingComponent from "../components/shared/Heading";
import Layout from "../components/shared/Layout";
import { useQuery } from "react-query";
import { apiRequest } from "../utils/apiRequests";
import SpinnerComponent from "../components/shared/Spinner";
import SingleProperty from "../components/properties/SingleProperty";
import { IProperty } from "../types/property.type";

const Properties = () => {
  const {
    data: property,
    isLoading,
    error,
  } = useQuery("allProperty", async () => {
    const res = await apiRequest("/property/get-all", "GET");
    return res.data;
  });

  if (isLoading) {
    <SpinnerComponent />;
  }
  if (error) {
    <HeadingComponent text="Error fetching data" />;
  }
  return (
    <Layout>
      <VStack maxW="100vw" mx={{ base: 1, md: 2, lg: 28, xl: 72 }}>
        <HeadingComponent text="All Listings" />
        <SimpleGrid columns={[2, null, 3]} spacing={6}>
          {property?.map((d: IProperty) => (
            <SingleProperty data={d} key={d._id} />
          ))}
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default Properties;
