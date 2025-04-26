// src/components/GoogleAuthPage.tsx
"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import useLoginWithGoogle from "@/hooks/Auth/useLoginWithGoogle";
import {useAuthStore} from "@/stores/auth/useAuthStore";

const GoogleAuthPage = () => {
  const router = useRouter();
  const {data: user, error} = useLoginWithGoogle();
  const {setUser} = useAuthStore();
  useEffect(() => {
    if (user) {
      // Successful authentication - redirect to home
      setUser(user);
      router.push("/");
    }
  }, [user, router]);

  useEffect(() => {
    if (error) {
      // Failed authentication - redirect to login
      router.push("login");
    }
  }, [error, router]);

  // Show loading state while checking auth
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Checking authentication...</h1>
        <p>Please wait while we verify your session.</p>
      </div>
    </div>
  );
};

export default GoogleAuthPage;