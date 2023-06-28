import { ContactForm } from "../types/types";

export const postContactUs = async (
  endpoint: string,
  formData: ContactForm
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    cache: "no-store",
    ...options,
    body: JSON.stringify({
      data: formData,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // if (res.status === 201) {
  //   return "Successfuly Submitted!";
  // } else {
  //   throw new Error(res.statusText);
  // }
};
