import { BlogAttributes } from "@/utils/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: BlogAttributes;
};

const FeaturedBlog = ({ post }: Props) => {
  return (
    <div>
      <article
        key={post.id}
        className="relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <Image
          src={
            "https://admin.strapi.turbogear.com/uploads/landing_page1_c1fbfc634e.jpg"
          }
          width={post.attributes.img.data.attributes.formats.large.width}
          height={post.attributes.img.data.attributes.formats.large.height}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time
            dateTime={post.attributes.publishedAt}
            className="text-gray-500"
          >
            {new Date(post.attributes.publishedAt).toLocaleDateString()}
          </time>
          <div className="ml-4 flex items-center gap-x-4">
            <svg
              viewBox="0 0 2 2"
              className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="flex gap-x-2.5">
              {/* <Image
                src={
                  process.env.PUBLIC_URL +
                  post.attributes.blog_author.data.attributes.avatar.data
                    .attributes.url
                }
                width={post.attributes.img.data.attributes.formats.large.width}
                height={
                  post.attributes.img.data.attributes.formats.large.height
                }
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-white/10"
              /> */}
              {post.attributes.blog_author.data.attributes.name}
            </div>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
          <Link href={"/blog/" + post.attributes.slug}>
            <span className="absolute inset-0" />
            {post.attributes.title}
          </Link>
        </h3>
      </article>
    </div>
  );
};

export default FeaturedBlog;
