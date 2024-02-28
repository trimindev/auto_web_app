import Flow from "@/components/Flow";
import Nav from "@/components/Nav";
import LeftSide from "@/components/LeftSide";
import React from "react";

function page() {
  return (
    <div className="">
      <Nav />
      <div className="flex">
        <LeftSide />
        <Flow />
      </div>
    </div>
  );
}

export default page;
