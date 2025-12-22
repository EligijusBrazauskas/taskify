import { useQuery } from "@tanstack/react-query";
import { taskStatuses } from "@/mocks";
import { SuccessResponse } from "@/modules/_shared/api/types";
import { Status } from "@/modules/_shared/interfaces";

export const useTaskStatusesQuery = () => {
  //TODO: Remove after API is ready
  const mockQueryFn = (mode = "resolve"): SuccessResponse<Status[]> => {
    return new Promise((resolve, reject) => {
      if (mode === "resolve") {
        resolve({ data: taskStatuses });
      }

      if (mode === "reject") {
        reject(new Error("Failed to fetch statuses"));
      }
    });
  };

  //TODO: Implement real query function
  // const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["taskStatuses"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
