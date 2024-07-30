import Carousel from "../../components/ul/Carousel";
import CategorySection from "../../components/ul/CategorySection";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <CategorySection></CategorySection>
      <Products></Products>
    </div>
  );
};

export default Home;
