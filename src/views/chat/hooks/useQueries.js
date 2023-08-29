import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../axiosInstance";
import axios from "axios";
import { SERVER_ERROR } from "../../../shared/constants";

async function getQueries() {
  try {
    const { data } = await axiosInstance.get("/queries");

    return data?.messages;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    console.log(message);
    throw new Error(message);
  }
}

export function useGetQueries() {
  const { data: allQueries, isLoading } = useQuery(["messages"], getQueries, {
    keepPreviousData: true,
  });

  return { allQueries, isLoading };
}
