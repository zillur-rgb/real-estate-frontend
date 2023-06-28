import { Box } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";

const ProfileLayout = ({ children }: any) => {
  return (
    <Box
      mx={{ base: 1, md: 2, lg: 28, xl: 72 }}
      display={"flex"}
      flexDir={"column"}
      minH={"100vh"}
      py={10}
    >
      <ProfileInfo />
      {children}
    </Box>
  );
};

export default ProfileLayout;
