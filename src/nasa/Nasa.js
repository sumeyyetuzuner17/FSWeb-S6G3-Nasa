import React from "react";
import styled from "styled-components"


const SCDiv = styled.div`

border: 4px solid blue;

`

const SCH1 = styled.h1`
color:blue;
text-decoration: underline;

`
const SCP = styled.p`
color:brown;

`

const SCButton = styled.button`

width: 30%;
background-color:orange  ;
color: white;
border: 2px solid black;
height: 40px;
border-radius: 10px;
`


function Nasa  (props)  {
  const { data, changeDate } = props;

  return (
    <SCDiv>
      <SCH1>{data.title}</SCH1>
      <SCP>{data.date}</SCP>
      <img src={data.url} alt={data.title} />
      <SCP>{data.explanation}</SCP>
      <SCP>{data.copyright}</SCP>
      <SCButton type="" onClick={() => changeDate(1)}>
        S6G3NASA
      </SCButton>
    </SCDiv>
  );
};

export default Nasa;
