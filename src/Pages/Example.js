import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount and componentDidUpdate combined
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//     console.log("here")
//   }, [count]);


  useEffect(() => {
    console.log('Component mounted or updated');
    return () => {
      console.log('Component will unmount');
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;