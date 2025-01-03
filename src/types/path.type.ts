export type PathString =
  | "/"
  | "/issues"
  | "/projects"
  | "/tags"
  | "/activity"
  | "/comments";

export type Path = PathString | Exclude<string, PathString>;
