import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SERVER_ERROR } from "../../../shared/constants";
import { setStoredUser } from "../../../shared/utils";
import axiosInstance from "../../../axiosInstance";
import { toast } from "react-toastify";

async function signin({ usernameOrEmail, password }) {
  try {
    let { data } = await axiosInstance.post("/auth/login", {
      usernameOrEmail,
      password,
    });
    data = {
      profile: data.profile,
      token: data.token,
    };
    setStoredUser(data);
    return data;
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
  const { mutate, isLoading, data, isError, error } = useMutation(
    (credentials) => signin(credentials),
    {
      onSuccess: async () => {
        toast.success("Login Successful");
        navigate("/home/dashboard", { replace: true });
        window.location.reload(true);
      },
    }
  );

  return { mutate, isLoading, data, isError, error };
}
