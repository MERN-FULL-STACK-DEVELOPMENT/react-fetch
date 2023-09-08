import React from 'react'

function fetchComponents() {
      const apiGet = () => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
}
  return (
    <div>API<br/>
    <button onClick={apiGet}>Fetch API</button>
    </div>
  )
}

export default fetchComponents