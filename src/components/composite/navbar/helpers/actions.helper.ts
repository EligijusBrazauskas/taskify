import {
  issueActionDefaults,
  projectActionDefaults,
  tagActionDefaults,
} from "@/components/composite/navbar/defaults";

export const getActionDefaults = (pathname: string) => {
  if (pathname.includes("projects")) {
    return projectActionDefaults;
  }

  if (pathname.includes("tasks")) {
    return issueActionDefaults;
  }

  if (pathname.includes("tags")) {
    return tagActionDefaults;
  }

  return [];
};
