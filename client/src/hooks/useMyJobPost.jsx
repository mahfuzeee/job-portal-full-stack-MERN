import { useQuery } from "@tanstack/react-query";
import api from "../api";

export const useMyJobPost = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await api.get("/jobs/user/myjobs");

      return data;
    },
  });
};
