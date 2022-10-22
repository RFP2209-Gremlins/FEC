import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const OutfitButtonCard = ({addOutfit}) => {


  return (
    <OutfitButtonDiv>
      <HolderDiv>
        <CardSquare>
          <AddButton onClick={(event) => addOutfit()}>+</AddButton>
        </CardSquare>
        <ActionText>Add Current Product to your Outfits</ActionText>
      </HolderDiv>
    </OutfitButtonDiv>
  );
};

export default OutfitButtonCard;


const OutfitButtonDiv = styled.li` //the Outfit items card itself
list-style-type: none;
display: inline-block;
border-radius: 3px;
border: 2px solid black;
min-height: 27em; //makes button same vertical height as outfit cards
margin: .8em; //outside borders
padding: .5em; //inside borders
`;

const HolderDiv = styled.div`
min-height: 100%;
position:relative; // so I can position the action button
margin: 3px;
text-align: center;
height: 18em;
width: 14em;
`;

const CardSquare = styled.div`
position:relative;
bottom: 0px;
max-width: 100%;
border: 1px solid gray;
display: block;
margin: auto;
text-align: center;
height: 18em;
width: 14em;
`;

const AddButton = styled.button`
font-size: 8em;
text-align: center;
background: white;
padding-top: 30%;
border: none;
top: 40%;
color: #091;
`;

const ActionText = styled.h1`
  // min-height: 100%;
  color: #091;
  padding: 0 .5em;
  // padding-bottom: .5em;

  // font-color: green
  font-size: 1.8em;
  word-wrap: normal;
  text-align: center;
`;

