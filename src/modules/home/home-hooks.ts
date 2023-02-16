import { yupResolver } from "@hookform/resolvers/yup";

import { UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import { SearchFormType } from "./home-types";
import { searchSchema } from "./home-validators";

/**
 * @param {UseFormProps<SearchFormType>} props - Props hooks.
 * @returns Hook form object.
 */

export function useSearchForm(props?: UseFormProps<SearchFormType>) {
  return useForm<SearchFormType>({
    resolver: yupResolver(searchSchema),
    defaultValues: props?.defaultValues ?? {},
  });
}
// export {}
