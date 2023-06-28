import { HStack, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { useAppSelector } from "../../redux/hooks";

const navContents = [
  {
    id: 0,
    title: "About",
    href: "/about",
  },
  {
    id: 1,
    title: "Properties",
    href: "/properties",
  },
  {
    id: 2,
    title: "Featured",
    href: "/featured",
  },
  {
    id: 3,
    title: "Contact",
    href: "/contac",
  },
];

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log("user", user);

  return (
    <HStack
      maxW="100vw"
      mx={{ base: 1, md: 2, lg: 28, xl: 72 }}
      justify={"space-between"}
    >
      <Logo fontSize={36} />
      <HStack spacing={16}>
        {navContents.map((nav) => (
          <Link to={nav.href} key={nav.id}>
            <Text>{nav.title}</Text>
          </Link>
        ))}
      </HStack>
      {localStorage.getItem("username") ? (
        <ButtonComponent label="My Dashboard" href="/my-profile" />
      ) : (
        <ButtonComponent label="Join" href="/register" />
      )}
    </HStack>
  );
};

export default Navbar;
