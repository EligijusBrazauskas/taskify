import { SuccessResponse } from "@/api/types";
import { projects } from "@/mocks";
import { Project } from "@/modules/projects/interfaces";
import { useQuery } from "@tanstack/react-query";

export const useProjectsQuery = () => {
  //TODO: Remove after API is ready
  const mockQueryFn = (mode = "resolve"): SuccessResponse<Project[]> => {
    return new Promise((resolve, reject) => {
      if (mode === "resolve") {
        resolve({ data: projects });
      }

      if (mode === "reject") {
        reject(new Error("Failed to fetch projects"));
      }
    });
  };

  //TODO: Implement real query function
  const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
