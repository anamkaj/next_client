import { IProduct } from "@/models/product";
import useSWR from "swr";
import { ProductServices } from "@/services/get.product";

export const useSingleProduct = (id: number) => {
  const { data, isLoading } = useSWR<IProduct[]>("singleProduct", () =>
    ProductServices.getSingleProduct(id)
  );
  return { data, isLoading };
};
