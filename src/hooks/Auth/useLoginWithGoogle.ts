import {useQuery} from "@tanstack/react-query";
import {User} from "@/types/AuthState";
import fetchUser from "@/services/Auth/LoginWithGoogle";

const useHandlePage = () => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};

export default useHandlePage;