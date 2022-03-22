import React from 'react'

function Counter1(props) {
    return (
        <div>
            <button onClick={props.increment}> Counter-A:{props.count}</button>
        </div>
    )
}

export default Counter1
