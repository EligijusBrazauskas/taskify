import { SuccessResponse } from "@/api/types";
import { projects } from "@/mocks";
import { Project } from "@/modules/projects/interfaces";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

//TODO: Remove after API is ready
const mockQueryFn = async (mode = "resolve"): SuccessResponse<Project[]> => {
  return new Promise((resolve, reject) => {
    if (mode === "resolve") {
      resolve({ data: projects });
    }

    if (mode === "reject") {
      reject(new Error("Failed to fetch projects"));
    }
  });
};

export const projectsQueryOptions = queryOptions({
  queryKey: ["projects"],
  queryFn: async () => await mockQueryFn("resolve"),
});

export const useProjectsQuery = () => {
  //TODO: Implement real query function
  const queryFn = async () => {};

  return useSuspenseQuery(projectsQueryOptions);
};
