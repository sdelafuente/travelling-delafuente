import * as React from "react";
// import Categories from "../components/Categories/Categories";
// import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  // const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
       <ItemListContainer  />
        {
            // <Header name="Laura" />
        // <div>
        // <p>Categoria elegida: {selectedCategory || "No has elegido ninguna categoría."}</p>
        // </div>
        // <Categories setSelectedCategory={setSelectedCategory} />
        }
    </div>
  );
};

export default Home;
