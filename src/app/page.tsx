import NextLink from "next/link";

import PostDisplay from "~/components/post-display.component";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-8">
        <p>
          I am a software engineer from Melbourne Australia, currently working
          at{" "}
          <NextLink
            href="https://meandu.com"
            target="_blank"
            className="text-purple-800"
          >
            me&u
          </NextLink>{" "}
          as a technical lead and engineering manager. You can find more about
          my experience{" "}
          <NextLink
            href="https://www.linkedin.com/in/lpbayliss/"
            target="_blank"
            className="text-purple-800"
          >
            here
          </NextLink>
          .
        </p>
      </div>
      <PostDisplay />
    </div>
  );
};

export default HomePage;
