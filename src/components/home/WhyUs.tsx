import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from "@chakra-ui/react";
import HeadingComponent from "../shared/Heading";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const WhyUs = () => {
  return (
    <VStack mx={{ base: 1, md: 2, lg: 28, xl: 72 }} py={10}>
      <HeadingComponent text="frequently asked questions" />

      <Accordion allowMultiple w={"100%"}>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={isExpanded ? "brand.900" : "brand.800"}
                    outline={isExpanded ? "none" : "none"}
                    fontSize={18}
                  >
                    What is Estates?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={isExpanded ? "brand.900" : "brand.800"}
                    outline={isExpanded ? "none" : "none"}
                    fontSize={18}
                  >
                    Why should I use Estates?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={isExpanded ? "brand.900" : "brand.800"}
                    outline={isExpanded ? "none" : "none"}
                    fontSize={18}
                  >
                    What benefits can I get?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
                We are a real estate agency that has been working snce 1995 with
                many advantages over our competitors. We have more than 10000
                happy customers and have worked with more than 200 distributors
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default WhyUs;
