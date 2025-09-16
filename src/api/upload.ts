import { api } from "@/lib/fetcher";
import { Status } from "@/lib/types";

export const postUpload = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post<null, void>(
    "/certificates/income/upload",
    undefined,
    formData,
  );
};
