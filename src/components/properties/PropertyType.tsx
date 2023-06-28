import { SimpleGrid, VStack } from "@chakra-ui/react";
import HeadingComponent from "../shared/Heading";
import Layout from "../shared/Layout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { apiRequest } from "../../utils/apiRequests";
import { IProperty } from "../../types/property.type";
import SpinnerComponent from "../shared/Spinner";
import SingleProperty from "./SingleProperty";

const PropertyType = () => {
  const { propertyType } = useParams();

  const { data, isLoading, error } = useQuery(
    "typesProperty",
    async (): Promise<IProperty[]> => {
      const res = await apiRequest(`/property/get/${propertyType}`, "GET");
      console.log("res.data", res.data);

      return res.data;
    }
  );

  if (isLoading) {
    <SpinnerComponent />;
  }

  if (error) {
    <h1>Error fetching data</h1>;
  }
  return (
    <Layout>
      <VStack
        py={10}
        spacing={4}
        maxW="100vw"
        mx={{ base: 1, md: 2, lg: 28, xl: 72 }}
      >
        <HeadingComponent text={`All Listings of ${propertyType}`} />
        <SimpleGrid columns={[2, null, 3]} spacing={6}>
          {data?.map((d) => (
            <SingleProperty data={d} key={d._id} />
          ))}
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default PropertyType;
