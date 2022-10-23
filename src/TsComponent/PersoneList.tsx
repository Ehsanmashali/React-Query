import React from "react";
import { Persone } from "./PesoneType";
type PersoneListProps = {
  // persone: {
  //   first: string;
  //   last: string;
  // }[];

  persone: Persone[];
};
const PersoneList = (props: PersoneListProps) => {
  return (
    <div>
      {props.persone.map((item) => (
        <h3 key={item.first}>
          {item.first} {item.last}
        </h3>
      ))}
    </div>
  );
};

export default PersoneList;
