import { searchSchema } from "./home-validators";

export type SearchFormType = (typeof searchSchema)["__outputType"];
