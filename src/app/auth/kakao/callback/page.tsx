"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/components/common/Loading";

function KakaoCallbackContent() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace(/^#/, ""));
    const token = params.get("token");

    if (token) {
      document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
      router.replace("/dashboard");
    } else {
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="fixed inset-0 z-[9999]">
      <Loading />
    </div>
  );
}
export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoCallbackContent />
    </Suspense>
  );
}
