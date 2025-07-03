import React,{useState} from 'react'

const CouterTask = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

  return (
     <div>
      <h2>Counter</h2>
      <p>Current Value: {count}</p>
      <button onClick={increment}>ADD</button>
    </div>
  )
}

export default CouterTask
