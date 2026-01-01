"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleLogout = () => {
    console.log("Logout");
    router.push("/");
  };
  return (
    <div className="flex justify-center">
      <button className="btn btn-accent" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default page;
