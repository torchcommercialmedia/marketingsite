"use client";
import { fetchBlogFromApi } from "@/utils/fetch/fetchBlog";
import { BlogAttributes } from "@/utils/types/types";
import React, { Suspense, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AllBlogPost from "./AllBlogPost";
import qs from "qs";

type Props = {
  blogPost: BlogAttributes[];
};

const Blogs = ({ blogPost }: Props) => {
  const [blogs, setBlog] = useState<BlogAttributes[]>(blogPost);
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ search: string }>();

  const onSubmit: SubmitHandler<{ search: string }> = async ({ search }) => {
    setLoading(true);
    const query = qs.stringify(
      {
        filters: {
          title: {
            $contains: search,
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const onFetch = await fetchBlogFromApi(
      "/blog-posts?",
      query + "&populate=deep"
    );
    if (onFetch.data) {
      setBlog(onFetch.data);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="mt-4 sm:mt-12 py-4 justify-between flex">
        <h2 className="text-2xl font-semibold">All Posts</h2>
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
          <form
            action="#"
            // method="POST"
            className="w-full max-w-lg lg:max-w-xs"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex">
                <input
                  {...register("search")}
                  id="search"
                  className="block w-full rounded-md border bg-white py-1.5 pl-10 pr-3 text-gray-900 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="text"
                  name="search"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
      {isLoading && (
        <Suspense>
          <div className="flex justify-center items-center h-[300px]">
            <p>Loading...</p>
          </div>
        </Suspense>
      )}
      {!isLoading && (
        <div>
          {blogs.length > 0 && <AllBlogPost blogPost={blogs} />}
          {blogs.length < 1 && <p>No blog...</p>}
        </div>
      )}
    </div>
  );
};

export default Blogs;
