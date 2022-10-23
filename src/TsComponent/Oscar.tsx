import React from "react";

type OscarType = {
  children: React.ReactNode;
};
const Oscar = (props: OscarType) => {
  return <div>{props.children}</div>;
};

export default Oscar;
