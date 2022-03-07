import { useState } from 'react'

function App() {
    const [name, setName] = useState('name')

    const handleClick = (event) => {
        setName('Fred')
        console.log(name)
    }

    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default App;
