import { Button, HStack, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/hooks";
import HeadingComponent from "../shared/Heading";
import ButtonComponent from "../shared/ButtonComponent";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <VStack>
      <HeadingComponent text={`Welcome ${user?.username}`} />
      <HStack>
        <ButtonComponent label="Update Profile" />
        <Button
          bg={"red"}
          color={"white"}
          _hover={{
            border: "1px dash",
            borderColor: "red",
            bg: "white",
            color: "red",
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </Button>
        <ButtonComponent label="Delete Your Profile" />
      </HStack>
    </VStack>
  );
};

export default ProfileInfo;
