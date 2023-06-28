import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const dashboardData = [
  {
    id: 0,
    title: "Listed Properties",
    href: "/my-profile/listed-properties",
  },
  {
    id: 1,
    title: "Listed Yachts",
    href: "/my-profile/listed-yachts",
  },
  {
    id: 2,
    title: "Bookmarked Properties",
    href: "/my-profile/bookmarked-properties",
  },
  {
    id: 3,
    title: "Bookmarked Yacht",
    href: "/my-profile/bookmarked-yachts",
  },
];

const ProfileNavbar = () => {
  const location = useLocation();

  return (
    <SimpleGrid
      columns={4}
      spacing={10}
      w={"100%"}
      bg={"#ddd"}
      borderRadius={"xl"}
      h={{ base: "40px", lg: "70px" }}
      px={6}
      py={2}
    >
      {dashboardData.map((data) => (
        <Link key={data.id} to={data.href}>
          <Box
            w={"100%"}
            bg={location.pathname === data.href ? "white" : ""}
            h={"50px"}
            borderRadius={"lg"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {data.title}
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProfileNavbar;
