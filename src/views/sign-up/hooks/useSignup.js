import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { SERVER_ERROR } from "../../../shared/constants";
import { toast } from "react-toastify";

async function signup({ username, password, email, role }) {
  try {
    const { data } = await axiosInstance.post("/auth/signup", {
      username,
      email,
      password,
      role,
    });
    return data?.user;
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
  const { mutate, isLoading } = useMutation((data) => signup(data), {
    onSuccess: () => {
      toast.success("Accounts Created!");
      navigate("/log-in", { replace: true });
    },
  });

  return { mutate, isLoading };
}
