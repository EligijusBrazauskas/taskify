import { SuccessResponse } from "@/api/types";
import { Status } from "@/interfaces";
import { projectStatuses } from "@/mocks";
import { useQuery } from "@tanstack/react-query";

export const useProjectStatusesQuery = () => {
  //TODO: Remove after API is ready
  const mockQueryFn = (mode = "resolve"): SuccessResponse<Status[]> => {
    return new Promise((resolve, reject) => {
      if (mode === "resolve") {
        resolve({ data: projectStatuses });
      }

      if (mode === "reject") {
        reject(new Error("Failed to fetch statuses"));
      }
    });
  };

  //TODO: Implement real query function
  const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["projectStatuses"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
