import React, { useState, useEffect } from 'react'
import './App.css'
import RandomList, { type Maps } from './utils/RandomList'
import Card from './components/Card';

export default function App() {
  const rd = new RandomList(
  [
      { name: "Corrode", imgPath: "/assets/Corrode.jpg" },
      { name: "Abyss", imgPath: "/assets/Abyss.png" },
      { name: "Sunset", imgPath: "/assets/Sunset.jpg" },
      { name: "Bind", imgPath: "/assets/Bind.jpg" },
      { name: "Pearl", imgPath: "/assets/Pearl.jpg" },
      { name: "Haven", imgPath: "/assets/Haven.jpg" },
      { name: "Split", imgPath: "/assets/Split.jpg" },
  ]
  )

  const [wasSelected, setWasSelected] = useState(false);
  const [numMaps, setNumMaps] = useState(5);
  const [selectedMaps, setSelectedMaps] = useState<Maps[]>([]);

  function selectRandMaps(){
    setSelectedMaps(rd.getValue(numMaps));
    setWasSelected(true);
  }

  function returnSelection(){
    setWasSelected(false);
  }

  return (
    <>
    {wasSelected ?
        <div >
          <div style={styles.mapsSelected}>
            {
              selectedMaps.map((map)=>(
                <Card map={map}></Card>
              ))
            }
          </div>
          <div style={styles.selectButton}>
            <button onClick={()=>returnSelection()}>Voltar</button>
          </div>
        </div>
      :
      (   
        <div style={styles.container}>
          <div style={styles.centerContent}>
            <h2>Selecione o número de mapas da sua série</h2>
            <div style={styles.seriesButton}>
              <button onClick={()=>setNumMaps(1)}>1</button>
              <button onClick={()=>setNumMaps(3)}>3</button>
              <button onClick={()=>setNumMaps(5)}>5</button>
            </div>
          </div>
          <div style={styles.selectButton}>
            <button onClick={()=>selectRandMaps()}>Sortear</button>
          </div>
        </div> 
      )
    }
    </>
  )
}

const styles: { 
  container: React.CSSProperties, 
  seriesButton: React.CSSProperties,
  selectButton: React.CSSProperties,
  mapsSelected: React.CSSProperties,
  centerContent: React.CSSProperties,
} = {
  container:{
    display:"flex",
    flexDirection: "column",
  },
  centerContent:{
    display:"flex",
    flexDirection:"column",
  }
  seriesButton :{
    display:"flex",
    justifyContent: "center",
    gap:"40px"
  },
  selectButton:{
    marginTop:"20px",
    position: "absolute",
    top: "80vh",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "1.5rem",
    zIndex: 2,
  },
  mapsSelected:{
    display:"flex",
  },
}
