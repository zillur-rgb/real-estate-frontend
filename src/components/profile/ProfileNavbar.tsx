import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const dashboardData = [
  {
    id: 0,
    title: "Listed Proeprties",
    href: "/dashboard/job-posted",
  },
  {
    id: 1,
    title: "Listed Yachts",
    href: "/dashboard/add-new-job",
  },
  {
    id: 2,
    title: "Bookmarked Properties",
    href: "/dashboard/profile",
  },
  {
    id: 3,
    title: "Bookmarked Yacht",
    href: "/dashboard/check-candidates",
  },
];

const ProfileNavbar = () => {
  const location = useLocation();
  console.log("loc", location);

  return (
    <SimpleGrid
      columns={4}
      spacing={10}
      w={"100%"}
      bg={"#eee"}
      borderRadius={"xl"}
      h={{ base: "40px", lg: "70px" }}
      px={6}
      py={2}
    >
      {dashboardData.map((data) => (
        <Link key={data.id} to={data.href}>
          <Box
            w={"100%"}
            bg={location.pathname === data.href ? "brand.600" : ""}
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
