import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import { IProperty } from "../../types/property.type";
import ButtonComponent from "../shared/ButtonComponent";
import { Link } from "react-router-dom";
interface IProps {
  data: IProperty;
}

const SingleProperty = ({ data }: IProps) => {
  return (
    <Link to={`/details/${data?._id}`}>
      <Box
        _hover={{
          borderColor: "brand.900",
        }}
        p={3}
        border={"1px solid #ccc"}
        borderRadius={"xl"}
      >
        <img src={data?.img} alt="img" />
        <Text fontSize={24}>{data?.title}</Text>
        <HStack spacing={6} py={3}>
          <Badge colorScheme="purple">
            {data?.sqmeters} sq/m<sup>2</sup>
          </Badge>
          <Badge colorScheme="purple">{data?.beds} beds</Badge>
          <Badge colorScheme="purple">{data?.continent} beds</Badge>
        </HStack>
        <ButtonComponent
          label="Details"
          href={`/properties/details/${data?._id}`}
        />
      </Box>
    </Link>
  );
};

export default SingleProperty;
