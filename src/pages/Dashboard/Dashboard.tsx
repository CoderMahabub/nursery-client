import { useState } from "react";
import productApi from "../../redux/features/products/productApi";

const Dashboard = () => {
  const [id, setId] = useState("");
  const [createProduct] = productApi.useAddProductMutation();
  const handleAddProduct = () => {
    setId("");
    (document.getElementById("my_modal_2") as HTMLDailogElement).showModal();
  };
  return (
    <div>
      <h1>Dashboard Component</h1>
    </div>
  );
};

export default Dashboard;
