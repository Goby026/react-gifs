import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />
      {/* <AddCategory setCategories={setCategories} /> */}
      {/* emitir un evento para que el componente padre (GiftExpertApp) lo reciba */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      <br /> <br />
      {/* <button onClick={() => onAddCategory()}>Agregar Categoria</button> */}
      <hr />
      {
      /* {
      categories.map((cat) => {
        return <li key={cat}>{cat}</li>;
      })
      } */

        categories.map((cat) => <GifGrid key={cat} category={cat} />)
      }
    </>
  );
};
