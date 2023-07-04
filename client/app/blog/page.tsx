"use client";
import Blogs from "@/components/Blog/Blogs";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import NoBlogPost from "@/components/Blog/NoBlogPost";
import { fetchBlogFromApi } from "@/utils/fetch/fetchBlog";
import { BlogAttributes } from "@/utils/types/types";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const q = "populate=deep";
  const qFeatured = "filters[isFeatured][$eq]=true&populate=deep";
  const [blog, featuredBlogs] = await Promise.all([
    fetchBlogFromApi("/blog-posts?", q),
    fetchBlogFromApi("/blog-posts?", qFeatured),
  ]);
  const featBlogs: BlogAttributes[] = featuredBlogs.data;
  const blogPost: BlogAttributes[] = blog.data;

  return (
    <div className="bg-white py-4 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
        </div>

        <div className="mx-auto mt-4 sm:mt-12">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Featured post</h2>
          </div>
          {/* <hr /> */}
          <div className="py-2"></div>
          <div className="grid auto-rows-fr grid-cols-1 gap-8 w-full lg:max-w-none lg:grid-cols-3">
            {featBlogs.length < 1 && <NoBlogPost />}
            {featBlogs.map((post) => (
              <FeaturedBlog post={post} key={post.id} />
            ))}
          </div>
          <div>
            <Blogs blogPost={blogPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
