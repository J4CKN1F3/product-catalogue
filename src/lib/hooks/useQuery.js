import { useEffect } from "react";
import Papa from "papaparse";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, addCategory } from "../redux/productsSlice";

const useQuery = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(process.env.REACT_APP_SHEET, {
      download: true,
      header: true,

      complete: (result) => {
        result.data.map((item) => {
          dispatch(
            addProducts({
              ...item,
              selected: false,
              ProductId: item.ProductCode + item.ProductVariant,
            })
          );
          dispatch(addCategory(item.Category));
          return 0;
        });
      },
      error: (err) => {
        console.log(err);
        return err;
      },
    });
  }, [dispatch]);

  return products;
};

export default useQuery;
