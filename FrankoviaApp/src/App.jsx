import { useState } from 'react'
import './App.css'


function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [val, setVal] = useState("");
  const [scorrers, setScorrers] = useState([])
  


  const NewScorrer = () => {
    let found = scorrers.find(item => {
      if(item.name === val) return "marek"
    })
    if(found === undefined && val != ""){
      const newScorrer = {
        id: scorrers.length,
        name: val,
        p: 1
      }
      setScorrers([...scorrers, newScorrer])
      found = 0;
      setVal("")
    }else if (val == ""){
      alert("No name given")
    }else{
      scorrers[found.id].p += 1
      console.log("match")
      found = 0;
      setVal("")
    }
    console.log(found)
    console.log(scorrers)
  }

  return (
    <>
      <div className='Header'>
        <h1>Match App v1.0</h1>
      </div>
      <div className='Content'>
        <div className='points'>
          <div className='team'>
            <div>
              <div className='img'></div>
            </div>
            <div>
              <input type="text" className='count' size={1} value={count1} min={0} /><br />
              <button onClick={(e) => {setCount1(count1 + 1); if(count1 < 0){setCount1(0)}}}>+</button><button onClick={(e) => {setCount1(count1 - 1); if(count1 <= 0){setCount1(0)}}}>-</button>
            </div>
          </div>
      <div className='center'>
        -------<br />
        <button onClick={(e) => {setCount1(0); setCount2(0)}}>0</button>
      </div>
          <div className='team'>
            <div>
              <input type="text" className='count' value={count2} /><br />
              <button onClick={(e) => {setCount2(count2 + 1); if(count2 < 0){setCount2(0)}}}>+</button><button onClick={(e) => {setCount2(count2 - 1); if(count2 <= 0){setCount2(0)}}}>-</button>
            </div>
            <div>
              <div className='img'></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='Scorrers'>
          <input type="text" value={val} onChange={(e) => {setVal(e.target.value)}} /><br />
          <button type='submit' onClick={NewScorrer} >ADD</button>
          <br />
          <div className='list'>
            <p>Scorrers list:</p>
            {scorrers.map((item) => (
              <ul>
                <li key={item.id}>{item.name}, X{item.p}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className='Footer'>

      </div>
    </>
  )
}

export default App
