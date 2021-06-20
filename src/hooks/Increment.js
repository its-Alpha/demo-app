import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)
    // const -> varibale name
    // setCount -> function which control the variable count value
    //useState(1)-> where 1 means the initail value of variale count is 1
    //[] -> array destructuring

    // function increase(){
    //     setCount(count+1)
    // }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click to increase</button>
            {count > 0 &&
                <button onClick={() => setCount(count - 1)}>Click to decrease</button>
            }

        </>
    )
}

export default Increment
