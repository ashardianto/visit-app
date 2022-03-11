import React, { Component, useState, useEffect } from "react";
import Hero from "./components/Hero"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import datajs from "./data"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        Update count
      </button>
    </>
  )
}

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(() => {

    }, 3000)
    setData(datajs)

    console.log(data);
  }, [])

  return (
    <div>
      <Hero />
      <section className="cards--list">
        {
          data.length <= 0 ? 'Loading...' : data.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              price={item.price}
            />
          ))
        }
      </section>
      <Counter />
    </div>
  )
}

// CLASS-BASED

// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         const cards = data.map(item => {
//             return (
//                 <Card
//                     img= {item.img}
//                     rating= {item.stats.rating}
//                     reviewCount={item.stats.reviewCount}
//                     location={item.location}
//                     title={item.title}
//                     price={item.price}
//                     // onClick={e => {
//                     //     this.setState({
//                     //         count: this.state + 1
//                     //     })
//                     // }}
//                 />
//             )
//         })
//         return (
//             <div>
//                 <Hero />
//                 <section className="cards--list">
//                     {cards}
//                 </section>
//             </div>
//         )
//     }
// }

// export default App

// FUNCTIONAL

