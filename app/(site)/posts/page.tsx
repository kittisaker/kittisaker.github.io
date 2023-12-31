import React from 'react'
import Link from 'next/link'
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from '@/.contentlayer/generated'
import { Metadata } from 'next'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ทำเว็บไซต์ เว็บแอพฯ พร้อมเว็บแอดมิน - Samiti.dev",
  description: "ให้คำปรึกษา และจัดทำเว็บไซต์ ขนาดเล็ก กลาง และใหญ่ พร้อมเว็บแอดมินรายเดือน ค่อยดูแลตลอด 24 ชั่วโมง"
};

function PostCard(post: Post) {
    return (
        <Link
          href={post.url}
          className="w-full h-full cursor-pointer flex group pb-8 flex-col items-center"
        >
          <p className="text-sm mb-2 text-slate-500 ">
            {format(parseISO(post.date), "LLLL d, yyyy")} • {post.author}
          </p>
          <h1 className="text-xl font-regula text-center group-hover:border-b-slate-900 transition-all duration-300 border-b border-b-white text-slate-900 ">
            {post.title}
          </h1>
        </Link>
    );
}

function Posts() {
    const posts = allPosts.sort((a, b) => 
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <div className="w-full h-screen flex justify-center">
        <div className="xl:w-[70%] w-full h-full flex flex-col ">
            <Header />
            <div className="w-full h-fit overflow-auto space-y-10 flex flex-col xl:px-48 px-10 pt-20">
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
            </div>
        </div>
        </div>
    );
}

export default Posts