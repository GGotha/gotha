/* eslint-disable react/no-unescaped-entities */
"use client";

import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import TimelineMobile from "@/components/TimelineMobile";
import { social_media } from "@/constants/constant";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center w-full pb-36">
        <div className="lg:w-2/4 w-3/4 flex flex-col items-center">
          <div className="w-full">
            <Appbar />
          </div>
          <div className="flex w-full items-center lg:flex-row flex-col gap-5 justify-between mt-16">
            <div className="flex flex-col gap-2">
              <h1 className="lg:text-6xl text-4xl font-bold">Gustavo Gotha</h1>
              <h3 className="text-2xl">Software Engineer</h3>

              <div className="w-full lg:w-2/4 flex flex-col mt-5 gap-5">
                <p className="text-1xl text-zinc-400">
                  Software engineer with a passion for web development.
                </p>
                <p className="text-zinc-400">
                  I'm also a tech enthusiast and a lifelong learner. I love
                  learning new technologies and sharing knowledge with others.
                </p>
              </div>
              <div className="flex flex-row justify-center lg:justify-start mt-5 gap-5">
                <Twitter
                  fill="white"
                  className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
                  onClick={() => window.open(social_media.twitter)}
                />
                <Github
                  className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
                  onClick={() => window.open(social_media.github)}
                />
                <Linkedin
                  className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
                  onClick={() => window.open(social_media.linkedin)}
                />
              </div>
            </div>
            <div className="bg-zinc-900 rounded-xl">
              <Image
                src="/me.png"
                alt="logo"
                width="500"
                height="500"
                className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-zinc-900">
        <div className="lg:w-2/4 px-8 lg:px-0 flex flex-col items-center">
          <h1 className="text-4xl mt-20 mb-10 lg:mb-0 font-bold">Timeline</h1>
          <div className="lg:block hidden">
            <Timeline />
          </div>
          <div className="block lg:hidden">
            <TimelineMobile />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
