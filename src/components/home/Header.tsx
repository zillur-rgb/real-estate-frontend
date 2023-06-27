import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import header from "../../assets/header.jpg";

const Header = () => {
  return (
    <Box maxW="100vw" mx={{ base: 1, md: 2, lg: 28, xl: 72 }} py={10}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} alignItems={"center"}>
        <GridItem colSpan={3}>
          <Text
            fontWeight={400}
            fontSize={64}
            letterSpacing={-6}
            textTransform={"uppercase"}
            color={"brand.800"}
          >
            Discover your most comfort place for your future life
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"brand.700"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            repudiandae vel hic minima. Vel, architecto accusamus rem soluta
          </Text>
        </GridItem>
      </Grid>
      <img src={header} alt="header" width={"100%"} height={"200px"} />
    </Box>
  );
};

export default Header;
