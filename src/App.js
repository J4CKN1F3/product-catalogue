import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import ProductList from "./components/ProductList";
import Loading from "./components/Loading";
import useQuery from "./lib/hooks/useQuery";

function App() {
  const products = useQuery();

  return (
    <>
      <>
        <Header />
        <Navbar />
        <Result />
        {products.length <= 0 ? <Loading /> : <ProductList />}
      </>
    </>
  );
}

export default App;
