import { useQuery } from "@tanstack/react-query";
import { taskCommentsWithAuthors } from "@/mocks";
import { SuccessResponse } from "@/modules/_shared/api/types";
import { TaskComment } from "@/modules/tasks/interfaces";

export const useTaskCommentsQuery = () => {
  //TODO: Remove after API is ready
  const mockQueryFn = (mode = "resolve"): SuccessResponse<TaskComment[]> => {
    return new Promise((resolve, reject) => {
      if (mode === "resolve") {
        resolve({
          data: taskCommentsWithAuthors,
        });
      }

      if (mode === "reject") {
        reject(new Error("Failed to fetch comments"));
      }
    });
  };

  //TODO: Implement real query function
  // const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["taskComments"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
