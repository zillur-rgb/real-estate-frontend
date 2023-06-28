import { Badge, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Layout from "../shared/Layout";
import HeadingComponent from "../shared/Heading";
import { useQuery } from "react-query";
import { apiRequest } from "../../utils/apiRequests";
import SpinnerComponent from "../shared/Spinner";
import { IProperty } from "../../types/property.type";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuBedSingle } from "react-icons/lu";
import { TbResize } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";

const Details = () => {
  const { propertyId } = useParams();

  const { data, isLoading, error } = useQuery(
    "singlePorperty",
    async (): Promise<IProperty> => {
      const res = await apiRequest(`/property/${propertyId}`, "GET");
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
      <VStack maxW="100vw" mx={{ base: 1, md: 2, lg: 28, xl: 72 }}>
        <HStack spacing={20} py={20}>
          <Image
            border={"1px solid #333"}
            borderRadius={16}
            maxW={"768px"}
            src={data?.img}
            alt={data?.img}
          />
          <VStack align={"flex-start"} spacing={4}>
            <HeadingComponent text={data?.title as string} />
            <Text color={"brand.700"}>Place: {data?.continent}</Text>
            <Text color={"brand.700"}>Type of Property: {data?.type}</Text>
            <HStack spacing={4}>
              <Badge
                color={"brand.900"}
                px={4}
                py={1}
                fontSize={16}
                borderRadius={10}
              >
                <HStack spacing={4}>
                  <TbResize />
                  <Text>
                    {" "}
                    {data?.sqmeters} sq/m<sup>2</sup>
                  </Text>
                </HStack>
              </Badge>
              <Badge
                color={"brand.900"}
                px={4}
                py={1}
                fontSize={16}
                borderRadius={10}
              >
                <HStack spacing={4}>
                  <MdOutlineAttachMoney /> <Text>{data?.price}</Text>
                </HStack>
              </Badge>
              <Badge
                color={"brand.900"}
                px={4}
                py={1}
                fontSize={16}
                borderRadius={10}
              >
                <HStack spacing={4}>
                  <LuBedSingle />
                  <Text>{data?.beds}</Text>
                </HStack>
              </Badge>
            </HStack>
            <Text color={"brand.700"}>{data?.desc}</Text>
            <Button colorScheme="blue" variant="outline">
              <HStack spacing={2}>
                <BiBookmark /> <Text>Bookmark</Text>
              </HStack>
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Details;
