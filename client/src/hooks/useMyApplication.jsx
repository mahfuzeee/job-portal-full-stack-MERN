import { useQuery } from "@tanstack/react-query";
import api from "../api";

export const useMyApplication = () => {
  return useQuery({
    queryKey: ["my-application"],
    queryFn: async () => {
      const { data } = await api.get("/applications/myapplications");
      return data;
    },
  });
};
