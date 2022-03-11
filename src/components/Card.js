import React from "react";
import { Component } from "react/cjs/react.production.min";
import star from "../images/star-stats.png"
import wafel from "../images/stroopwafels.jpg"

// class Card extends Component {
//     constructor(props) {
//         super(props)
//     }
//     onClick(e) {
//         e.target.style.opacity = "0.5";
//     }
//     render() {
//         return (
//             <div className="card">
//             <img onClick={this.onClick} src={this.props.img} alt="stroopwafels" className="card--image" />
//             <div className="card--stats">
//                 <img src={star} />
//                 <span>5.0</span>
//                 <span className="gray">(17) • </span>
//                 <span className="gray">Amsterdam</span>
//             </div>
//             <p>Amsterdam's Delicacy</p>
//             <p><span className="bold">From $4</span> / portion</p>
//         </div>
//         )
//     }
// }

// export default Card
// const data = {
//     title: "Amsterdam's Delicacy",
//     price: 4,
//     img: './url/blah.jpg',
//     rating: {
//         value: 5,
//         img: './url/path.jpg',
//         amount: 17,
//         locale: 'Amsterdam'
//     }
// };

// const datas = [
//     data,
//     {
//         title: "Paris's Delicacy",
//         price: 4,
//         img: './url/blah.jpg',
//         rating: {
//             value: 5,
//             img: './url/path.jpg',
//             amount: 17,
//             locale: 'Amsterdam'
//         }
//     }
// ];


export default function Card(props) {
  let badgeText
  if (props.reviewCount > 100) {
    badgeText = "HIGH DEMAND"
  }

  return (
    // <div>
    //     {datas.map((data, index) => (
    //         <div key={index}>
    //             <p>{data.rating}</p>
    //         </div>
    //     ))}
    // </div>
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} alt="stroopwafels" className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span></p>
    </div>
  )
}