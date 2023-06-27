import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="100vw">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
