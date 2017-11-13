import React from 'react';
import Behaviors from "./Behaviors";


export default (props) => {
  console.log("props", props.route.path);
  return (
    <div >
      <Behaviors title="Behaviors To Achieve"/>
    </div>
  );
}
