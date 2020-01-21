import React from 'react';

import './style.css';

export default function Person({person: {name, ...person}, ...props}) {

  console.log('props :: ', props);
  console.log('name :: ', name);

  console.log('person :: ' , person);



  return (
    <>

    eaeaetrae
    {/* {props.name} */}


    </>
  );
}











