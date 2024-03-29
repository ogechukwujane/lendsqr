import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetcher";
import { baseUrl } from "../config";

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["USERS"],
    queryFn: () => {
      return fetcher<IUser[]>({
        url: `${baseUrl}`,
        method: "GET",
      });
    },
  });
};
