export type Path =
  | ""
  | "pinned-projects"
  | "projects"
  | "issues"
  | "tags"
  | "activity"
  | "comments";

export type DynamicPath = `${Path}/${number | string}`;
