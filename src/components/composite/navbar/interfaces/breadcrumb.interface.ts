import { Params } from "@/types";

export interface Breadcrumb {
  label: string;
  pathname: string;
  params?: Params;
}
