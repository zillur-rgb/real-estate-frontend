import { Spinner } from "@chakra-ui/react";

const SpinnerComponent = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="brand.900"
      size="xl"
    />
  );
};

export default SpinnerComponent;
