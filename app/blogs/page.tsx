import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout | Blogs Page",
  description: "This is the blogs page",
};

const page = () => {
  return (
    <div>
      <h1 className="text-center mt-5">This is blogs page</h1>
    </div>
  );
};

export default page;
