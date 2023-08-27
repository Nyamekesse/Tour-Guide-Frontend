import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { SERVER_ERROR } from "../../../shared/constants";

async function signup({ username, password, email }) {
  try {
    const { data } = await axiosInstance.post("/auth/register", {
      username,
      email,
      password,
    });
    return data.message;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAuthSignUp() {
  const navigate = useNavigate();
  const { mutate } = useMutation((data) => signup(data), {
    onSuccess: () => {
      navigate("/log-in", { replace: true });
    },
  });

  return { mutate };
}
