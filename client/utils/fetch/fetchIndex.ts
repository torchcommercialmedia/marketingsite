import { ResponseData } from "@/utils/types/types";

export const fetchDataFromApi = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    options
  );
  const data: ResponseData = await res.json();
  return data;
};
