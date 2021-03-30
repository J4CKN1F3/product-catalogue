import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { productByCategory } from "../../../lib/redux/productsSlice";
import { compareH, compareL, compareR } from "../../../lib/sortingComparison";

function Sort() {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();
  const [sortOpt, setSortOpt] = useState("");

  const handleChange = async (e) => {
    const selectedSortOpt = e.target.value;
    console.log(selectedSortOpt);
    setSortOpt(selectedSortOpt);

    const newPoductOrder = [...products];

    if (selectedSortOpt === "lower") {
      newPoductOrder.sort(compareL);
    } else if (selectedSortOpt === "higher") {
      newPoductOrder.sort(compareH);
    } else {
      newPoductOrder.sort(compareR);
    }

    dispatch(productByCategory(newPoductOrder));
  };
  return (
    <>
      <Select
        placeholder="Recomended Product"
        bg="white"
        w={{ base: "40%", md: "25%" }}
        value={sortOpt}
        onChange={handleChange}
      >
        <option value="higher">Order With Higher Prices</option>
        <option value="lower">Order With Lower Prices</option>
      </Select>
    </>
  );
}

export default Sort;
