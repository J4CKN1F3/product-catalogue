import React, { useState } from "react";
import {
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { priceFilter } from "../../../lib/redux/productsSlice";

function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const dispatch = useDispatch();

  const handleMin = (e) => {
    const value = e.target.value;
    setMin(value);
    dispatch(priceFilter({ min: value, max }));
  };

  const handleMax = (e) => {
    const value = e.target.value;
    setMax(value);
    dispatch(priceFilter({ min, max: value }));
  };

  return (
    <>
      <Stack
        direction="row"
        w={{ base: "full", md: "80%", lg: "40%" }}
        alignItems="center"
      >
        <NumberInput min={0} defaultValue={0} step={100}>
          <NumberInputField bg="white" value={min} onChange={handleMin} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Heading fontSize="lg">~</Heading>

        <NumberInput step={100} defaultValue={100000} min={0}>
          <NumberInputField bg="white" value={max} onChange={handleMax} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
    </>
  );
}

export default PriceFilter;
