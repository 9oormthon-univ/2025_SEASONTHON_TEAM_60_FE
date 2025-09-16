import { api } from "@/lib/fetcher";
import { Status } from "@/lib/types";

export type UploadResponse = {
  fileName: string;
  fileId: string;
  status: Status;
};

export const postUpload = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post<UploadResponse, void>(
    "/certificates/income/upload",
    undefined,
    formData,
  );
};
