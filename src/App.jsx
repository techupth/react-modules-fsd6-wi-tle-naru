import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  FAQAccordion,
  Footer,
} from "./components/SectionComponents";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQAccordion />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
