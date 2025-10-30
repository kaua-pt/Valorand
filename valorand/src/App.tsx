import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const maps = {

  }

  const [wasSelected, setWasSelected] = useState(false)
  const [numMaps, setNumMaps] = useState(5)
  const [selectedMaps, setSelectedMaps] = useState([])

  function selectRandMaps(){

  }

  return (
    <>
    {wasSelected ?
        <></>
      :
      (   
        <div style={styles.container}>
          <div>
            <h3>Selecione o número de mapas da sua série</h3>
            <div style={styles.seriesButton}>
              <button onClick={()=>setNumMaps(1)}>1</button>
              <button onClick={()=>setNumMaps(3)}>3</button>
              <button onClick={()=>setNumMaps(5)}>5</button>
            </div>
          </div>
          <div>
            <button>Sortear</button>
          </div>
        </div> 
      )
    }
    </>
  )
}

const styles = {
  seriesButton :{
    display:"flex",
    justifyContent: "space-evenly"
  },
  container:{
    display:"flex",
    flexDirection: "column"
  }
}