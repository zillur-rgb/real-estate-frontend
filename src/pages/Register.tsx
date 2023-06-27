import { Box, Button, Spinner, Text, VStack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alert/alertSlice";
import Logo from "../components/shared/Logo";
import { apiRequest } from "../helpers/apiHelpers";
import Layout from "../components/shared/Layout";
import HeadingComponent from "../components/shared/Heading";

type IRegister = {
  username: string;
  email: string;
  password: string;
  country?: string;
};

const Register = () => {
  // Redux loading state
  const { loading } = useAppSelector((state) => state.alert);

  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    const { username, email, password, country } = data;

    try {
      dispatch(showLoading());
      const { data } = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
        country,
      });
      dispatch(hideLoading());

      if (data.success) {
        toast.success("Registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid form deails please try again");
      console.log("Errro", error);
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
        <Logo fontSize={24} />
        <HeadingComponent text="Register Now" />

        {loading ? (
          <Spinner />
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={8}>
                <VStack
                  align="flex-start"
                  spacing={1}
                  h={"60px"}
                  w={{ base: "100%", md: "400px", xl: "512px" }}
                >
                  <label>Username</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "10px",
                      outline: "1px solid #ccc",
                      borderRadius: "8px",
                    }}
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <Text color={"red"} fontWeight={700}>
                      Username is required
                    </Text>
                  )}
                </VStack>

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
                  align="flex-start"
                  spacing={1}
                  h={"60px"}
                  w={{ base: "100%", md: "400px", xl: "512px" }}
                >
                  <label>Country</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "10px",
                      outline: "1px solid #ccc",
                      borderRadius: "8px",
                    }}
                    {...register("country")}
                  />
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
                    Register
                  </Button>
                </VStack>
              </VStack>
            </form>
            <VStack>
              <Text>
                Already Registered? <Link to="/login">Login Now</Link>
              </Text>
            </VStack>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Register;
