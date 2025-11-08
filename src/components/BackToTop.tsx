import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded border border-border bg-background text-foreground-accent shadow-terminal transition-all hover:border-border-accent hover:bg-background-muted focus:outline-none focus:ring-2 focus:ring-border-accent focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Arrow up icon"
      >
        <title>Arrow up icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
