import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page",
};
const page = () => {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default page;
