import * as yup from "yup";
import { yupStringSchema } from "../../shared/yup/yup-utils";

export const searchSchema = yup
  .object({
    search: yupStringSchema("Search", { required: true }).test(
      (item, { createError }) => {
        if (item === "" || item === undefined)
          return createError({
            message: "Search can't be empty",
            type: "error",
          });
        return true;
      }
    ),
  })
  .required();
