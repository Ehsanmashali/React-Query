import React from "react";

type PersoneProps = {
  name: {
    first: string;
    last: string;
  };
};
const Persone = (props: PersoneProps) => {
  return (
    <div>
      my name is {props.name.first} {props.name.last}
    </div>
  );
};

export default Persone;
