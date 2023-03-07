import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./layouts/Navbar/Navbar";
import { ContextProvider } from "./context/contextProvider";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Home from "./layouts/Home/Home";
import ProductsPage from "./layouts/ProductsPage/ProductsPage";
import ProductDetails from "./layouts/ProductDetails/ProductDetails";
import { myNewTheme } from "./styles/theme";
import MediaQuery from "react-responsive";
import NavbarMobile from "./layouts/Navbar/NavbarMobile";

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <ContextProvider>
        <MediaQuery minWidth={1250}>
          <Navbar />
        </MediaQuery>
        <MediaQuery maxWidth={1250}>
          <NavbarMobile />
        </MediaQuery>

        <Routes>
          <Route path="/ml-clon" element={<Home />} />
          <Route path="/search" element={<ProductsPage />} />
          <Route
            path="/product-details/:productID"
            element={<ProductDetails />}
          />
        </Routes>

        <Footer />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
