import { useNavigate } from "react-router-dom";
import { clearStoredUser } from "../utils";
import { queryClient } from "../../react-query";

export function useLogOut() {
  const navigate = useNavigate();
  async function logOut() {
    clearStoredUser();
    await queryClient.clear();
    window.location.reload(true);
    navigate("/log-in", { replace: true });
  }
  return { logOut };
}
