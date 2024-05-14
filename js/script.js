// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: April 2024
// This file contains the JS functions for index.html

function checking() {
  const size =document.getElementById("size").value
  const large = document.getElementById("large").value
  const extraLarge =document.getElementById("extraLarge").value
  let peperoni = document.getElementById("peperoni").checked
  let cheese = document.getElementById("cheese")
  let mushroom = document.getElementById("mushroom")
  let olivers = document.getElementById("olivers")

  if (size == large){
    document.getElementById("pizzaPrice").innerHTML = "This size is $4"
  }
  else if (size == extraLarge) {
    document.getElementById("pizzaPrice").innerHTML = "This size is $6"
  }
  if(cheese.checked) {
    document.getElementById("topping1").innerHTML = "Cheese is $1.50"
  }
  else if(peperoni.checked) {
    document.getElementById("topping2").innerHTML = "Peperoni is $1.75"
  }
  else if(mushroom.checked) {
    document.getElementById("topping3").innerHTML = "Mushroom is $2.75"
  }
  else if(olivers.checked) {
    document.getElementById("topping4").innerHTML = "Olivers is $0.75"
  }
  else {
    document.getElementById("pizzaPrice").innerHTML = "You should design your pizza to continue"
  } 
  
 
}