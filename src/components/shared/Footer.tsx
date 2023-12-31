import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "4", md: "8" }}>
    <Stack justify={"space-between"} w="100%" justifyContent={"space-between"}>
      <Stack w="100%" justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Container>
);
export default Footer;
