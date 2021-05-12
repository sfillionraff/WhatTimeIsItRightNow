import React, { useEffect, useState } from "react";
import styled from "styled-components";

// NEXT: styling, how to keep clock updated with button pushes
// https://bojackhorseman.fandom.com/wiki/WhatTimeIsItRightNow.com
const Homepage = () => {
  const [seeTime, setSeeTime] = useState(false);
  const [time, setTime] = useState();

  useEffect(() => {
    if (seeTime) {
      const date = new Date();
      const currentTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTime(currentTime);
    }
  }, [seeTime]);

  return (
    <div>
      <h1>What Time Is It Right Now?</h1>
      <button onClick={() => setSeeTime(true)}>See Time</button>
      {seeTime && <h2>{time}</h2>}
    </div>
  );
};

export default Homepage;
