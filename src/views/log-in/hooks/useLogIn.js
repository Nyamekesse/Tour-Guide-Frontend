import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SERVER_ERROR } from "../../../shared/constants";
import { setStoredUser } from "../../../shared/utils";
import axiosInstance from "../../../axiosInstance";

async function signin({ email, password }) {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
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

async function getUserDetails() {
  try {
    const { data } = await axiosInstance.get("/user/me");
    setStoredUser(data.user);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAuthLogin() {
  const navigate = useNavigate();
  const { mutate } = useMutation((data) => signin(data), {
    onSuccess: async () => {
      await getUserDetails();
      navigate("/", { replace: true });
    },
  });

  return { mutate };
}
