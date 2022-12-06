import "./App.css";
import Header from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Banner />
      </ChakraProvider>
    </div>
  );
}

export default App;
