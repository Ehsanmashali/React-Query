import React from "react";

type StatusProps = {
  status: string;
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "success") {
    message = "Data Featche is Successfully";
  } else if (props.status === "error") {
    message = "Data Featche is Error";
  }
  return <div>Status - {message}</div>;
};

export default Status;
