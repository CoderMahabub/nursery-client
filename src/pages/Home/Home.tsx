import Carousel from "../../components/ul/Carousel";
import CategorySection from "../../components/ul/CategorySection";
import Gallery from "../../components/ul/Gallery";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <CategorySection></CategorySection>
      <Products></Products>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
