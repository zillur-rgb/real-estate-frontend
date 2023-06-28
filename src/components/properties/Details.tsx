import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { propertyId } = useParams();
  return <Text>{propertyId}</Text>;
};

export default Details;
