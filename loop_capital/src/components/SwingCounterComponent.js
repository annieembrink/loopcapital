import * as Icon from 'react-bootstrap-icons';
import React, { useEffect, useState } from 'react';

const SwingCounterComponent = (props) => {

    const investors = props.props.wpDataJson[0].acf.investors 
    const number_of_investments = props.props.wpDataJson[0].acf.number_of_investments 
    const msek_investments = props.props.wpDataJson[0].acf.msek_investments 

    let allNumbers = [
        investors,
        number_of_investments,
        msek_investments
    ]

  const [counterValues, setCounterValues] = useState([investors - number_of_investments, 0, msek_investments - number_of_investments]);
  console.log(counterValues);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll('.counter'));

    const updateCounters = () => {
      counters.forEach((counter, index) => {
        if(counterValues[index] > 0) {
          counter.textContent = counterValues[index];
        } else {
          counter.textContent = '-';
        }
      });
    };

    let currentValues = [...counterValues];
    let intervalId = null;

    const startAnimation = () => {
      intervalId = setInterval(() => {
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
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    });
  });
  observer.observe(counters[0]);

  if (isIntersecting) {
    startAnimation();
  }

  return () => {
    clearInterval(intervalId);
    observer.disconnect();
  };
}, [counterValues, isIntersecting]);

  return (
    <>
      {props.props.wpDataJson.map((num, index) =>
        <div key={num} className="green-border green-border-numbers margin-bottom">
          
          <div>
            <span className="numbers-icon"><p className="extra-big-font counter">{counterValues[index * 3]}</p><Icon.Briefcase className="bootstrap-icon"/></span>
            <p className="p-tag-numbers">investors</p>
          </div>
          
          <div>
            <span className="numbers-icon"><p className="extra-big-font counter">{counterValues[index * 3 + 1]}</p><Icon.People className="bootstrap-icon"/></span>
            <p className="p-tag-numbers">numbers of investments</p>
          </div>
       
          <div>
          <span className="numbers-icon"><p className="extra-big-font counter">{counterValues[index * 3 + 2]}</p><Icon.PiggyBank className="bootstrap-icon"/></span>
            <p className="p-tag-numbers">(MSEK) investments</p>
          </div>

        </div>)}
    </>
  );
}

export default SwingCounterComponent;