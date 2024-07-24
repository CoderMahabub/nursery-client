import { Outlet } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/ul/Footer";
import Header from "./components/ul/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
