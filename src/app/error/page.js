import Seo from "@/components/common/seo";
import Link from "next/link";
import * as React from "react";

const NotFound500Page = () => (
  <>
    <Seo title={"500 | Yalis"} />
    <main className="max-container text-center pt-[200px]">
      <h1>Error 500 : Something went wrong</h1>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link href="/" className="top-nav-btn mt-5">
        Home
      </Link>
    </main>
  </>
);

export default NotFound500Page;
