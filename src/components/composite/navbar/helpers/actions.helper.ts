import {
  projectActionDefaults,
  projectsActionDefaults,
  tagsActionDefaults,
  taskActionDefaults,
  tasksActionDefaults,
} from "@/components/composite/navbar/defaults";
import { matchByPath } from "@tanstack/react-router";

export const getActionDefaults = (pathname: string) => {
  if (
    matchByPath("/", pathname, {
      to: "/projects",
    })
  ) {
    return projectsActionDefaults;
  }

  if (
    matchByPath("/", pathname, {
      to: "/projects/$projcetId",
    })
  ) {
    return projectActionDefaults;
  }

  if (
    matchByPath("/", pathname, {
      to: "/tasks",
    })
  ) {
    return tasksActionDefaults;
  }

  if (
    matchByPath("/", pathname, {
      to: "/tasks/$taskId",
    })
  ) {
    return taskActionDefaults;
  }

  if (
    matchByPath("/", pathname, {
      to: "/tags",
    })
  ) {
    return tagsActionDefaults;
  }

  return [];
};
