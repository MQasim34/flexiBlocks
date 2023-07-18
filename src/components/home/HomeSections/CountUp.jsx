import React, { useEffect } from "react";
import "../HomeStyle.scss";
import { forCounter } from "../../../siteContent/home/HomeCon";



const CountUp = () => {
  return (
    <div className="counterUp">
      <div className="outer">
        {forCounter.map((forcounter) => (
          <div className="inner" key={forcounter.id}>
            <h1 className="numbers">{forcounter.end}</h1>
            <h3 className="title">{forcounter.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountUp;
