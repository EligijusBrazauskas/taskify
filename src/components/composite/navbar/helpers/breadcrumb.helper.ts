import { uniq } from "lodash";

export const checkSegment = (segment: string) =>
  segment === "projects" ||
  segment === "issues" ||
  segment === "tags" ||
  segment === "comments" ||
  segment === "activity";

export const mapBreadcrumbs = (segments: string[], path: string) =>
  uniq(segments).map((segment) => {
    if (!segment) {
      return {
        label: "home",
        path: "/",
      };
    }

    if (checkSegment(segment)) {
      return {
        label: segment,
        path: `/${segment}`,
      };
    }

    if (path.includes(segment)) {
      return {
        label: segment,
        path,
      };
    }
  });
