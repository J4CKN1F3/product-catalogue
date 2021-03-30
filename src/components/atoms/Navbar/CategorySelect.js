import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { productByCategory } from "../../../lib/redux/productsSlice";

function CategorySelect() {
  const category = useSelector((state) => state.products.category);
  const allProduct = useSelector((state) => state.products.allList);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const handleChange = async (e) => {
    const selectedCategory = e.target.value;
    setSelected(selectedCategory);

    const newProductList = await allProduct.filter((product) => {
      if (selectedCategory) {
        return product.Category === selectedCategory;
      } else {
        return product.Category;
      }
    });
    dispatch(productByCategory(newProductList));
  };

  return (
    <>
      <Select
        placeholder="All Category"
        bg="white"
        value={selected}
        onChange={handleChange}
      >
        {category.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </>
  );
}

export default CategorySelect;
