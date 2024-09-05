import React from "react";
import ErrorLayout from "./ErrorLayout";

export default function NotFound() {
  // add translated values to props
  return (
    <>
      <ErrorLayout title="404" message="Sorry, this page does not exist." />;
    </>
  );
}
