import { Breadcrumb } from "@/components/composite/navbar/interfaces";

export const checkSegment = (segment: string) =>
  segment === "projects" ||
  segment === "tasks" ||
  segment === "tags" ||
  segment === "comments" ||
  segment === "activity";

export const mapBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const breadcumbs = pathname.split("/").filter((segment) => !!segment.length);
};
