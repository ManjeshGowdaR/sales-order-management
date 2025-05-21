import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Center,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = (data) => {
    let valid = true;

    if (data.username !== "User") {
      setUsernameError("Invalid username");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (data.password !== "Pswd") {
      setPasswordError("Invalid password");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      localStorage.setItem("authenticated", "true");
      navigate("/sales");
    }
  };

  // Light/Dark mode color styles
  const bg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const labelColor = useColorModeValue("gray.600", "gray.300");
  const inputBorderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Center minH="100vh" bg={bg}>
      <Box
        p={8}
        maxW="400px"
        w="full"
        bg={cardBg}
        borderRadius="2xl"
        boxShadow="2xl"
        transition="all 0.3s ease"
      >
        <Heading
          mb={6}
          textAlign="center"
          fontSize="2xl"
          color={textColor}
          fontWeight="bold"
        >
          Welcome
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={5}>
            <FormControl isInvalid={usernameError}>
              <FormLabel color={labelColor}>
                <Icon as={FaUser} mr={2} />
                Username
              </FormLabel>
              <Input
                type="text"
                {...register("username")}
                placeholder="Enter your username"
                focusBorderColor="teal.400"
                borderRadius="lg"
                borderColor={inputBorderColor}
                color={textColor}
              />
              {usernameError && (
                <Text color="red.400" fontSize="sm">
                  {usernameError}
                </Text>
              )}
            </FormControl>

            <FormControl isInvalid={passwordError}>
              <FormLabel color={labelColor}>
                <Icon as={FaLock} mr={2} />
                Password
              </FormLabel>
              <Input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                focusBorderColor="teal.400"
                borderRadius="lg"
                borderColor={inputBorderColor}
                color={textColor}
              />
              {passwordError && (
                <Text color="red.400" fontSize="sm">
                  {passwordError}
                </Text>
              )}
            </FormControl>

            <Button
              type="submit"
              bgGradient="linear(to-r, teal.400, blue.500)"
              color="white"
              size="lg"
              width="full"
              mt={4}
              borderRadius="lg"
              _hover={{
                opacity: 0.9,
              }}
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default LoginPage;
