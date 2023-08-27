import { useMutation } from "@tanstack/react-query";
import { SERVER_ERROR } from "../../../shared/constants";
import axios from "axios";
import axiosInstance from "../../../axiosInstance";

async function upload(file) {
  try {
    const { data } = await axiosInstance.post("/sentiment", file);
    return JSON.parse(data.result);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useUploadFile() {
  const { isLoading, isError, error, data, mutate } = useMutation((file) =>
    upload(file)
  );

  return { isLoading, isError, error, data, mutate };
}
