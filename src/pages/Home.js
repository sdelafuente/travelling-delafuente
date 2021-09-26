import * as React from "react";
// import Categories from "../components/Categories/Categories";
// import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Categorias from "../components/Categorias/Categorias";
import { useParams } from "react-router";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const { id } = useParams();

  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <Categorias setSelectedCategory={setSelectedCategory} />
        <ItemListContainer categoriaId={selectedCategory} />
    </div>
  );
};

export default Home;
