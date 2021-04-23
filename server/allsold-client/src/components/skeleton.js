import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function skeleton() {
  return (
    <div>
      <Skeleton variant="text" />
      <h1>hbsvtdec</h1>
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
  );
}

export default skeleton;
