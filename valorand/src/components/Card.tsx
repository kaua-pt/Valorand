import type { Maps } from "../utils/RandomList"

type CardProps = {
  map: Maps
}

export default function Card({ map }: CardProps) {
  return (
    <div style={style.container}>
      <h3 style={style.title}>{map.name}</h3>
      <img style={style.image} src={map.imgPath} alt={map.name} />
    </div>
  )
}

const style = {
  container: {
    position: "relative",
    height: "100vh",
    width: "30vw",
    overflow: "hidden",
  } as React.CSSProperties,

  image: {
    height: "100vw",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  } as React.CSSProperties,

  title: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "1.5rem",
    zIndex: 2,
  } as React.CSSProperties,
}
