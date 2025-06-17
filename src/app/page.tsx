import NextLink from "next/link";

import PostDisplay from "~/components/post-display.component";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 pb-8">
        <p>
          I am a software engineer and technical leader with nearly a decade of
          experience building and scaling software systems, most recently as a
          Senior Software Engineer & Team Lead at{" "}
          <NextLink
            href="https://tactiq.io/"
            target="_blank"
            className="text-purple-800"
          >
            Tactiq
          </NextLink>{" "}
          where I architected AI-driven features and led system observability
          improvements.
        </p>
        <p>
          With a proven track record in both hands-on development and team
          leadership across companies like me&u, Mr Yum, and Xero, I am
          currently exploring new opportunities in software engineering and
          technical leadership roles. Learn more about my experience and connect
          with me at{" "}
          <NextLink
            href="https://www.linkedin.com/in/lpbayliss/"
            target="_blank"
            className="text-purple-800"
          >
            https://www.linkedin.com/in/lpbayliss/
          </NextLink>
          .
        </p>
      </div>
      <PostDisplay />
    </div>
  );
};

export default HomePage;
