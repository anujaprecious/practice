import React from 'react';


function Child(props){
return(
  <div>
    The type of data is <i style={{color:'green'}}>{typeof props.data}</i> and its value is <i style={{color:'green'}}>{props.data}</i>.
  </div>
)
}
export default function Parent(){

  return(
    <div>
       <Child data={3}/>
       <Child data={"This is a string"}/>
       <Child data={new Date().toString()}/>
    </div>
  );
}
