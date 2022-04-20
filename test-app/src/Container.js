import { findAllByTestId } from '@testing-library/react';
import React from 'react'

const container = [
{
   question:"In what year did Agbani Darego won miss world",
   options:[
     {id:0, text:"2000", isCorrect: false},
     {id:2, text:"2001", isCorrect: true},
     {id:3, text:"2003", isCorrect: false},
     {id:3, text:"2005", isCorrect: false}
  ]
},

{ 
 
  question:"What is the Longest river the world",
  options:[
    {id:0, text:"Nile river", isCorrect: true},
    {id:2, text:"Congo River", isCorrect: false},
    {id:3, text:"Amazon river", isCorrect: false},
    {id:3, text:"Nger river", isCorrect: true},
  ] ,
  

},

{ 
    
   question:"Bern is the capital of what country",
    options:[
      {id:0, text:"Morroco", isCorrect: true},
      {id:2, text:"Belgium", isCorrect: false},
      {id:3, text:"Denmark", isCorrect: false},
      {id:3, text:"Switzerland", isCorrect: true},
    ] ,
  },

  {
    question:"Who was the 16th pesident of America",
    options:[
      {id:0, text:"George  Washigton", isCorrect: true},
      {id:2, text:"Theodore Rosovet", isCorrect: false},
      {id:3, text:"Abraham Lincoln", isCorrect: true},
      {id:3, text:"George Bush", isCorrect: false},
    ] 
},
{
  question:"What is the scientific name for lion",
  options:[

    {id:0, text:"Panther Leo", isCorrect: true},
    {id:2, text:"Panthera Tigris", isCorrect: false},
    {id:3, text:"Panthera Pardus", isCorrect: true},
    {id:3, text:"Acinonyx jubatus", isCorrect: false},
  ] 
},
{
  question:"Which country is the smallest country in Africa",
  options:[

    {id:0, text:"Madagascar", isCorrect: false},
    {id:2, text:"Lesotho", isCorrect: false},
    {id:3, text:"Seychelles", isCorrect: true},
    {id:3, text:"Niger", isCorrect: false},
  ] 
},

{
  question:"Which planet is the smallest Planet in our Solar planet",
  options:[

    {id:0, text:"Jupiter", isCorrect: false},
    {id:2, text:"Saturn", isCorrect: false},
    {id:3, text:"Mars", isCorrect: false},
    {id:3, text:"Mecury", isCorrect: true},
  ] 
},

{
  question:"What galaxy is planet Earth located",
  options:[

    {id:0, text:"Andromeda Galaxy", isCorrect: false},
    {id:2, text:"Milky way Galaxy", isCorrect: true},
    {id:3, text:"Canis Major Dwarf Galaxy", isCorrect: false},
    {id:3, text:"Roman IV Galaxy", isCorrect: false},
  ] 
},

{
  question:"Which country is the largest producer of Gold",
  options:[

    {id:0, text:"UAE", isCorrect: false},
    {id:2, text:"Kuwait", isCorrect: false},
    {id:3, text:"Saudi Arabia", isCorrect: false},
    {id:3, text:"China ", isCorrect: true},
  ] 
},
{
  question:"What country is the second most populous country in Africa",
  options:[

    {id:0, text:"Egypt", isCorrect: false},
    {id:2, text:"Ethiopia", isCorrect: true},
    {id:3, text:"South Africa", isCorrect: false},
    {id:3, text:"Kenya", isCorrect: false},
  ] 
}


];





export default container;