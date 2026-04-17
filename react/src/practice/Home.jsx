import { useState } from "react"

const Home = () => {
    const [color, setColor] = useState("gray")
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: `${color}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", bottom: "70px", padding: "20px 40px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", borderRadius: "30px", backgroundColor: "black" }}
            >
                <button onClick={() => setColor("gray")}style={{backgroundColor: "gray", padding: "10px", borderRadius: "15px", border: "none" }}>gray</button>
                <button style={{backgroundColor: "green", padding: "10px", borderRadius: "15px", border: "none" }} onClick={() => setColor("green")}>green</button>
                <button style={{backgroundColor: "yellow", padding: "10px", borderRadius: "15px", border: "none" }} onClick={() => setColor("yellow")}>yellow</button>
                <button style={{backgroundColor: "aqua", padding: "10px", borderRadius: "15px", border: "none" }} onClick={() => setColor("aqua")}>aqua</button>
                <button style={{backgroundColor: "blue", padding: "10px", borderRadius: "15px", border: "none" }} onClick={() => setColor("blue")}>blue</button>
            </div>
        </div>
    )
}

export default Home