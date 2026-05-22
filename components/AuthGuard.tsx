"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

interface AuthGuardProps {
  children: React.ReactNode;
  /** If true, redirects authenticated users AWAY (e.g., login page) */
  redirectIfAuthenticated?: boolean;
}

export default function AuthGuard({
  children,
  redirectIfAuthenticated = false,
}: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, onboardingCompleted } = useAuthStore();

  useEffect(() => {
    if (redirectIfAuthenticated) {
      // e.g. login/register pages: kick out logged-in users
      if (isAuthenticated) {
        router.replace(onboardingCompleted ? "/dashboard" : "/onboarding");
      }
      return;
    }

    // Protected pages: require authentication
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    // If authenticated but onboarding not complete, go to onboarding
    if (!onboardingCompleted) {
      router.replace("/onboarding");
    }
  }, [isAuthenticated, onboardingCompleted, redirectIfAuthenticated, router]);

  // While redirecting, render nothing to avoid flash
  if (redirectIfAuthenticated && isAuthenticated) return null;
  if (!redirectIfAuthenticated && (!isAuthenticated || !onboardingCompleted)) return null;

  return <>{children}</>;
}
