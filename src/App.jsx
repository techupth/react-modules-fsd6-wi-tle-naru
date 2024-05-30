import "./App.css";
import { Header } from "../components/Header";
import {MainContent} from "../components/Main";
import {ProductSection} from "../components/Product";
import {Footer} from "../components/Footer";
import {FAQ} from "../components/FAQ";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <ChakraProvider>
        <FAQ />
      </ChakraProvider>
      <Footer />
    </div>
  );
}

export default App;
