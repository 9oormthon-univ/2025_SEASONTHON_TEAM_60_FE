"use client";

import { useMutation } from "@tanstack/react-query";
import { postUpload } from "@/api/upload";

export function useUploadMutation() {
  const mutation = useMutation({
    mutationKey: ["upload", "files"],
    mutationFn: postUpload,
  });

  return {
    ...mutation,
  };
}
