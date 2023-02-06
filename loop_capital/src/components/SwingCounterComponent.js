
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const SwingCounterComponent = (props) => {
    // console.log(props.props.wpDataJson[0].acf.number_of_investments);
    const investors = props.props.wpDataJson[0].acf.investors
    const number_of_investments = props.props.wpDataJson[0].acf.number_of_investments
    const msek_investments = props.props.wpDataJson[0].acf.msek_investments

    let allNumbers = [
        investors,
        number_of_investments,
        msek_investments
    ]
// console.log("allNumbers", allNumbers);

    // console.log("investors", investors);
    // console.log("number_of_investments", number_of_investments);
    // console.log("msek_investments", msek_investments);

  const [counterValues, setCounterValues] = useState([investors / 4, 1, 1]);

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll('.counter'));
    const counterTargets = counters.map(counter => +counter.textContent);

    const updateCounters = () => {
      counters.forEach((counter, index) => {
        counter.textContent = counterValues[index];
      });
    };

    let currentValues = [...counterValues];
    const intervalId = setInterval(() => {
      currentValues = currentValues.map((value, index) => {
        
        if (value < allNumbers[index]) {
          return value + 1;
        } else {
          return value;
        }
      });
      setCounterValues(currentValues);
      updateCounters();
    }, 200);

    return () => clearInterval(intervalId);
  }, [counterValues]);

  return (
    <>
      {props.props.wpDataJson.map((num, index) =>
        <div key={num} className="green-border green-border-numbers margin-bottom">
          <div>
            <p className="extra-big-font counter">{counterValues[index * 3]} <Icon icon="carbon:portfolio" className="icon" /></p>
            <p className="p-tag-numbers">investors</p>
          </div>
          <div>
            <p className="extra-big-font counter">{counterValues[index * 3 + 1]} <Icon icon="bi:people-fill" className="icon"/></p>
            <p className="p-tag-numbers">numbers of investments</p>
          </div>
          <div>
            <p className="extra-big-font counter">{counterValues[index * 3 + 2]} <Icon icon="wpf:coins" className="icon"/></p>
            <p className="p-tag-numbers">(MSEK) investments</p>
          </div>
        </div>)}
    </>
  );
}

export default SwingCounterComponent;



// const SwingCounterComponent = (index) => {
//    console.log("SwingCounterComponent props", index.props.wpDataJson);
//     return (
//         <>
//          {index.props.wpDataJson.map(num =>
//             <div key={num} className="green-border green-border-numbers margin-bottom">
//               <div>
//                 <p className="extra-big-font">{num.acf.investors} <Icon icon="carbon:portfolio" className="icon" /></p>
//                 <p className="p-tag-numbers">investors</p>
//               </div>
//               <div>
//                 <p className="extra-big-font">{num.acf.number_of_investments} <Icon icon="bi:people-fill" className="icon"/></p>
//                 <p className="p-tag-numbers">numbers of investments</p>
//               </div>
//               <div>
//                 <p className="extra-big-font">{num.acf.msek_investments} <Icon icon="wpf:coins" className="icon"/></p>
//                 <p className="p-tag-numbers">(MSEK) investments</p>
//               </div>
//             </div>)}
        

//         </>
//     );
// }

// export default SwingCounterComponent;

