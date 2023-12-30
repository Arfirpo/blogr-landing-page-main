import React from "react";
import { Promotion } from "./Promotion";
import computerImg from "../images/illustration-laptop-mobile.svg";
import { Paragraph } from "../components/Paragraph";
import { MiddleAnnounce } from "./MiddleAnnounce";
import { Announce } from "./Announce";

export const descriptions = {
  1: {
    title: "Introducing an extensible editor",
    text: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  },
  2: {
    title: "Robust content management",
    text: "Flexible content management enables users to easily move through posts. Increase the usability of your blog  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
  },
  3: {
    title: "State of the Art Infrastructure",
    text: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
  },
  4: {
    title: "Free, open, simple",
    text: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  },
  5: {
    title: "Powerful tooling",
    text: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
  },
};

export const Main = () => {
  return (
    <main className="w-full h-full text-center ">
      <div className="flex flex-col justify-evenly gap-16 mt-28 relative
      ">
        <h1 className="text-2xl lg:text-4xl font-semibold text-veryDarkBlue ">Designed for the Future</h1>
        <Announce />
      </div>
      <MiddleAnnounce />
      <div className="flex flex-col items-center justify-center gap-[2.5rem] mb-[5.625rem] text-veryDarkGrayishBlue">
        <Promotion img={computerImg} text={""} />
        <Paragraph
          title={`${descriptions[4].title}`}
          paragraph={`${descriptions[4].text}`}
        />
        <Paragraph
          title={`${descriptions[5].title}`}
          paragraph={`${descriptions[5].text}`}
        />
      </div>
    </main>
  );
};
