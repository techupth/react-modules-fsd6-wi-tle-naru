import "./App.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/header";
import { ProductSection, Footer } from "../components/another";
import { FAQ } from "../components/FAQ";
import { MainContent } from "../components/mainContent";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
