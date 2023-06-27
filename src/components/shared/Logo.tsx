import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface IProps {
  fontSize?: number;
}

const Logo = ({ fontSize }: IProps) => {
  return (
    <Link to="/">
      <Text
        cursor={"pointer"}
        fontWeight={"700"}
        fontSize={fontSize || 24}
        color={"brand.900"}
      >
        Estates
      </Text>
    </Link>
  );
};

export default Logo;
