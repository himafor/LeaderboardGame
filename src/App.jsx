import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [leaderboard, setLeaderboard] = useState([])
  const [attack, setAttack] = useState([])

  const client = axios.create({
    baseURL: 'http://192.168.1.3:4000',
  })

  function getData(){
    client.get('/scores').then((res) => {
      setLeaderboard(res.data)
    })

    client.get('/logs').then((res) => {
      setAttack(res.data)
    })
  }

  useEffect(() => {
    getData()

    const interval = setInterval(() => {
      getData()
    }, 2000);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <div className="cont w-screen h-screen relative">
        <div className='p-16 w-full h-full'>
          <div className='w-full flex justify-center'>
            <h1 className='text-7xl font-bold' style={{textShadow: "4px 4px #ffd050"}}>PIRATES ISLAND</h1>
          </div>

          <div className='grid grid-cols-2 gap-16 mt-16'>
            <div className=''>
              <h1 className='text-5xl font-bold text-center' style={{textShadow: "4px 4px #ffff00"}}>LEADERBOARD</h1>
              <div className=' bg-black/50 w-full h-[42rem] p-8 mt-10 rounded-xl text-white'>
                {
                  leaderboard
                  &&
                  leaderboard.map((item, i) => {
                    if(i <= 2){
                      return (
                        <div key={i} className='w-full'>
                          <div className={`
                            ${i == 0 && "text-4xl text-center"} 
                            ${i == 1 && "text-3xl text-center"} 
                            ${i == 2 && "text-2xl text-center"}
                            mb-1 flex justify-center items-center
                            `}
                          > 
                            {i == 0 && <img src="tr1.png" className='h-10 me-4' alt="" />}
                            {i == 1 && <img src="tr2.png" className='h-10 me-4' alt="" />}
                            {i == 2 && <img src="tr3.png" className='h-10 me-4' alt="" />}
                            
                            <div>
                              {item.username} - 
                            </div>
                            <img 
                              src="gold2.png" 
                              className={`
                                mx-1
                                ${i == 0 && "h-9"}
                                ${i == 1 && "h-8"}
                                ${i == 2 && "h-7"}
                                `} 
                            /> 
                            <div>
                              {item.gold}
                            </div>
                          </div>
                        </div>
                      )

                    }
                  })
                }
                <hr className='my-3' />
                <div className='grid grid-rows-14 grid-flow-col grid-cols-2 '>
                  {
                    leaderboard
                    &&
                    leaderboard.map((item, i) => {
                      if(i > 2){
                        return (
                          <div key={i} className='w-full'>
                            <div className={`mb-1 text-xl flex items-center`}>
                              <div>{i+1}. {item.username} - </div>
                              <img 
                              src="gold2.png" 
                              className={`mx-1 h-6`} 
                              /> 
                              <div>
                                {item.gold}
                              </div>
                            </div>
                          </div>
                        )
  
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className=''>
              <h1 className='text-5xl font-bold text-center' style={{textShadow: "4px 4px #ff3030"}}>ATTACK LOG</h1>
              <div className=' bg-black/50 w-full h-[42rem] p-8 mt-10 rounded-xl text-black overflow-y-auto'>
                {
                  attack
                  &&
                  attack.map((item, i) => {
                    return (
                      <>
                        <div className='mb-2 p-2 bg-white rounded-lg'>
                          <p className='text-xl'><b>{item.username}</b> has been attacked by <b>{item.sender}</b> with <b><u>{item.gold == -150 ? "Dynamite" : "Cannon Bomb"}</u></b> and lost their <b>{item.gold*-1}</b> gold</p>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
