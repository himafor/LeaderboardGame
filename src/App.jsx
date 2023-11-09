import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-[100vh]'>
        <div className='w-full h-[20vh] p-7'>
          <h1 className='text-center text-4xl font-bold'>TEST</h1>
        </div>
      </div>
    </>
  )
}

export default App
