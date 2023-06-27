import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ButtonComponent = ({ label, href }: { label: string; href?: string }) => {
  return (
    <Link to={href || "/"}>
      <Button
        bg="brand.900"
        color={"white"}
        px={10}
        py={5}
        _hover={{
          bg: "white",
          color: "brand.900",
          outline: "2px dashed ",
          outlineColor: "brand.900",
          border: "none",
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default ButtonComponent;
