import Header from "components/@share/Layout/header/Header";
import GridContainer from "components/@share/Layout/gridContainer/GridContainer";
import Footer from "components/@share/Layout/footer/Footer";
import ProductListPage from "components/Product/ProductList/ProductListPage";
import Cart from "components/Cart/Cart";

const App = () => {
  return (
    <>
      <Header />
      <GridContainer>
        <ProductListPage />
        <Cart isCartOpen={true} />
      </GridContainer>
      <Footer />
    </>
  );
};

export default App;
