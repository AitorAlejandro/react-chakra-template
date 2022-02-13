import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg="tomato" boxShadow="md" w="100%" p={4} color="white">
        This is a React Chakra template
      </Box>
    </ChakraProvider>
  );
}

export default App;
