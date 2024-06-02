import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Flex justify={"space-around"} bg="blue.500" p="4">
      <Link to="/LoginPage">
        <Text fontSize="20px" color="white">Login</Text>
      </Link>
      <Link to="/HomePage" > <Text fontSize="20px" color="white">Home</Text></Link>
      <Link to="/ProductPageDetails"> <Text fontSize="20px" color="white">Product</Text></Link>
    </Flex>
  );
}
