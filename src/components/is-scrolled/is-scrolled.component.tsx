import { default as React, useState, useEffect, createContext, Component } from 'react';

type ScrollStatus = boolean;

const ScrollContext = createContext<ScrollStatus>(false);

type Props = {
  offset?: number;
  children?: React.ReactNode;
};

const ScrolledConsumer = ScrollContext.Consumer;

const ScrolledProvider: React.FunctionComponent<Props> = ({ children, offset }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onScroll = (): void => {
    const boundary = offset || 0;
    const scrollTop = document.body != undefined ? document.body.scrollTop : 0;
    const isCurrentlyScrolled = window.pageYOffset > boundary || scrollTop > boundary;

    setIsScrolled(isCurrentlyScrolled);
  };

  useEffect(() => {
    const isPageScrolledOnLoad = window.pageYOffset > 0;
    setIsScrolled(isPageScrolledOnLoad);

    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <ScrollContext.Provider value={isScrolled}>{children}</ScrollContext.Provider>;
};

export { ScrolledProvider, ScrolledConsumer };
