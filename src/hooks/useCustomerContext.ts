import { useContext } from "react";

export const useCustomerContext = <T>(context: React.Context<T>) => {
  const customerContext = useContext(context);
  if (!customerContext) {
    throw new Error("FiltersContext is not defined");
  }
  return customerContext;
};
