"use client";
import { BlogAttributes } from "@/utils/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogPost: BlogAttributes[];
};

const AllBlogPost = ({ blogPost }: Props) => {
  return (
    <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
      {blogPost?.length < 1 && (
        <div>
          <p>No blog...</p>
        </div>
      )}
      {blogPost?.length > 0 &&
        blogPost?.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              {post?.attributes?.blog_author?.data?.attributes?.avatar
                ?.data && (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_WEBSITE_URL +
                    post.attributes.blog_author.data.attributes.avatar.data
                      .attributes.url
                  }
                  width={
                    post.attributes.blog_author.data.attributes.avatar.data
                      .attributes.width
                  }
                  height={
                    post.attributes.blog_author.data.attributes.avatar.data
                      .attributes.height
                  }
                  alt={post.attributes.blog_author.data.attributes.name}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.attributes.publishedAt}
                  className="text-gray-500"
                >
                  {new Date(post.attributes.publishedAt).toLocaleDateString()}
                </time>
                {post.attributes.blog_categories && (
                  <Link
                    href={
                      post.attributes.blog_categories.data[0].attributes.slug ||
                      "#"
                    }
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.attributes.blog_categories.data[0].attributes.title}
                  </Link>
                )}
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={"/blog/" + post.attributes.slug || "#"}>
                    <span className="absolute inset-0" />
                    {post.attributes.title}
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {post.attributes.content}
                </p>
              </div>
              <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                <div className="relative flex items-center gap-x-4">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_WEBSITE_URL +
                      post.attributes.img.data.attributes.url
                    }
                    width={10}
                    height={10}
                    alt={post.attributes.blog_author.data.attributes.name}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link
                        href={post.attributes.blog_author.data.attributes.email}
                      >
                        <span className="absolute inset-0" />
                        {post.attributes.blog_author.data &&
                          post.attributes.blog_author.data.attributes.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">
                      {post.attributes.blog_author.data.attributes.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default AllBlogPost;
