import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../../axiosInstance";
import { SERVER_ERROR } from "../../../shared/constants";

async function sendChat(chat) {
  try {
    const { data } = await axiosInstance.post("/query", { query: chat });
    return data.result;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    console.log(message);
    throw new Error(message);
  }
}

export function useChat() {
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data, mutate } = useMutation(
    (chat) => sendChat(chat),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries("messages");
      },
    }
  );

  return { isLoading, isError, error, data, mutate };
}
