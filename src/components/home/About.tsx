import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      maxW="100vw"
      px={{ base: 1, md: 2, lg: 28, xl: 96 }}
      bg={"brand.900"}
      h={"400px"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      display={"flex"}
      alignItems={"center"}
    >
      <Text
        textAlign={"center"}
        color={"#fff"}
        fontSize={36}
        letterSpacing={"-2px"}
        textTransform={"uppercase"}
      >
        We are a real estate agency that has been working snce 1995 with many
        advantages over our competitors. We have more than 10000 happy customers
        and have worked with more than 200 distributors
      </Text>
    </Box>
  );
};

export default About;
