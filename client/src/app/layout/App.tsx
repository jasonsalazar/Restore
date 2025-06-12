import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7078/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      description: `Description for Product ${products.length + 1}`,
      price: Math.floor(Math.random() * 100) + 50,
      pictureUrl: "https://via.placeholder.com/150",
      type: "Type A",
      brand: "Brand X",
      quantityInStock: Math.floor(Math.random() * 10) + 1,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Re-store</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </Container>
  );
}

export default App;
