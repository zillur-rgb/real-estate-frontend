import { Text } from "@chakra-ui/react";

interface IProps {
  text: string;
  color?: string;
}

const HeadingComponent = ({ text, color }: IProps) => {
  return (
    <Text
      textTransform={"uppercase"}
      letterSpacing={"-2px"}
      fontSize={36}
      fontWeight={700}
      color={color || "brand.800"}
    >
      {text}
    </Text>
  );
};

export default HeadingComponent;
