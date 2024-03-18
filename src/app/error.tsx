"use client";

import { Button } from "@chakra-ui/react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <article>
      <h1>Something went wrong</h1>
      <p>
        <Button onClick={reset}>Try again</Button>
      </p>

      <pre>{error.message}</pre>
    </article>
  );
};

export default ErrorPage;
