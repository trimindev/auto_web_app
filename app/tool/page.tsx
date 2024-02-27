import Flow from "@/components/Flow";
import Nav from "@/components/Nav";
import Table from "@/components/Table";
import React from "react";

function page() {
  return (
    <div className="">
      <Nav />
      <div className="flex">
        <Table />
        <Flow />
      </div>
    </div>
  );
}

export default page;
