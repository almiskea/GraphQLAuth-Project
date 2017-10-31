import React from 'react';
import SimpleList from "./SimpleList";


export default (props) => {
  const a = ["Inbox", "Drafts"];
  const b = ["NO Box", "Drafton"];
  console.log("props", props.route.path);
  return (
    <div >
      <SimpleList title="Behaviors To Achieve" List={a}/>
      <SimpleList title="Behaviors Achieved"  List={b}/>
    </div>
  );
}
