export type Path =
  | ""
  | "projects"
  | "issues"
  | "tags"
  | "activity"
  | "comments";

export type DynamicPath = `${Path}/${number | string}`;
