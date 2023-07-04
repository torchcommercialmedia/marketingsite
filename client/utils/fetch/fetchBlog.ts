import { ResponseBlog, ResponseData } from "@/utils/types/types";

export const fetchBlogFromApi = async (
  endpoint: string,
  params: string
): Promise<ResponseBlog> => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}${params}`,
    {
      cache: "no-store",
      ...options,
    }
  );

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error("err");
  }
};
