"use client";

import { useMutation } from "@tanstack/react-query";
import { postUpload } from "@/api/upload";
import type { ApiResponse, AppError } from "@/lib/types";

export function useUploadMutation() {
  const mutation = useMutation<ApiResponse<null>, AppError, File>({
    mutationKey: ["upload", "files"],
    mutationFn: (file) => postUpload(file),
  });

  return {
    ...mutation,
  };
}
