import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { projectsWithOwners } from "@/mocks";
import { SuccessResponse } from "@/modules/_shared/api/types";
import { Project } from "@/modules/projects/interfaces";

//TODO: Remove after API is ready
const mockQueryFn = async (mode = "resolve"): SuccessResponse<Project[]> => {
  return new Promise((resolve, reject) => {
    if (mode === "resolve") {
      resolve({ data: projectsWithOwners });
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

export const useProjectsSuspenseQuery = () => {
  //TODO: Implement real query function
  // const queryFn = async () => {};

  return useSuspenseQuery(projectsQueryOptions);
};
