import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { apiRequest } from "../helpers/apiHelpers";
import { toast } from "react-toastify";
import { hideLoading, showLoading } from "../redux/features/alert/alertSlice";
import Logo from "../components/shared/Logo";
import Layout from "../components/shared/Layout";
import HeadingComponent from "../components/shared/Heading";
import { setUser } from "../redux/features/auth/authSlice";

type IRegister = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  // hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // redux state
  const { loading } = useAppSelector((state) => state.alert);

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    const { email, password } = data;

    try {
      dispatch(showLoading());
      const { data } = await apiRequest.post("/auth/login", {
        email,
        password,
      });

      if (data.success) {
        dispatch(hideLoading());
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", data.data.data.username);
        dispatch(setUser(data.data));
        toast.success("User has been logged in");
        navigate("/");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid credentials. Try again!");
    }
  };

  return (
    <Layout>
      <Box
        mx={{ base: 1, md: 2, lg: 28, xl: 72 }}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        minH={"100vh"}
      >
        <Logo fontSize={36} />

        <HeadingComponent text="Login" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={8}>
            <VStack
              align="flex-start"
              spacing={1}
              h={"60px"}
              w={{ base: "100%", md: "400px", xl: "512px" }}
            >
              <label>Email</label>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  outline: "1px solid #ccc",
                  borderRadius: "8px",
                }}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Text color={"red"} fontWeight={700}>
                  Email is required
                </Text>
              )}
            </VStack>
            <VStack
              align="flex-start"
              spacing={1}
              h={"60px"}
              w={{ base: "100%", md: "400px", xl: "512px" }}
            >
              <label>Password</label>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  outline: "1px solid #ccc",
                  borderRadius: "8px",
                }}
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors?.password?.type === "minLength" && (
                <Text color={"red"} fontWeight={700}>
                  The length of the password must be more than 6
                </Text>
              )}
              {errors?.password?.type === "required" && (
                <Text color={"red"} fontWeight={700}>
                  Password is required
                </Text>
              )}
            </VStack>
            <VStack
              spacing={1}
              h={"60px"}
              w={{ base: "100%", md: "400px", xl: "512px" }}
            >
              <Button
                bg="brand.900"
                color={"white"}
                px={10}
                py={5}
                _hover={{
                  bg: "white",
                  color: "brand.900",
                  border: "2px dashed ",
                  borderColor: "brand.900",
                }}
                type="submit"
                isLoading={loading}
              >
                Login
              </Button>
            </VStack>
          </VStack>
        </form>
      </Box>
    </Layout>
  );
};

export default Login;
