import { NextPage } from "next";

import { MaxWidthContainer } from "~/components/max-width-container";
import { PageLayout } from "~/components/page-layout";

const Index: NextPage = () => {
  return (
    <PageLayout>
      <MaxWidthContainer>This is the blog?</MaxWidthContainer>
    </PageLayout>
  );
};

export default Index;
