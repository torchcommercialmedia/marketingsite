"use client";
import { fetchBlogFromApi } from "@/utils/fetch/fetchBlog";
import Image from "next/image";
import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import { format } from "date-fns";
import Link from "next/link";

const page = async ({ params }: { params: { slug: string } }) => {
  const q = `filters[slug][$eq]=${params.slug}&populate=deep`;
  const content = await fetchBlogFromApi("/blog-posts?", q);
  const post = content.data[0].attributes;
  return (
    <div className="bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="flex justify-between">
          <div className="flex sm:space-x-4 items-center">
            <p className="text-base font-semibold leading-7 text-red-600">
              {params.slug}
            </p>
            <div className="rounded-xl bg-gray-100 cursor-pointer px-4">
              <Link href={post.blog_categories.data[0].attributes.slug || "#"}>
                <span>{post.blog_categories.data[0].attributes.title}</span>
              </Link>
            </div>
          </div>
          <p>{format(new Date(post.publishedAt), "MMMM dd, yyyy")}</p>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-4">
          {post.title.toUpperCase()}
        </h1>
        <figure className="mt-8">
          <Image
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={
              process.env.NEXT_PUBLIC_WEBSITE_URL + post.img.data.attributes.url
            }
            width={1920}
            height={1080}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <IoInformationCircle
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <p className="text-2xl font-bold tracking-tight text-gray-900 mt-6">
          {post.desc.charAt(0).toUpperCase() + post.desc.toLowerCase().slice(1)}
        </p>
        <div className="mt-10 max-w-2xl">{post.content}</div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
            varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
            cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
            molestie. Gravida quis fringilla amet eget dui tempor dignissim.
            Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
