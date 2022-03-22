import React from 'react'

function Counter2(props) {
    return (
        <div>
              <button onClick={props.increment}> Counter-B:{props.count}</button>
        </div>
    )
}

export default Counter2
