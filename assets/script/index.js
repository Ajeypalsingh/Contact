"use strict";

const input = document.querySelector(".info");
const addButton = document.querySelector(".add-contact");
const contactBox = document.querySelector(".grid-box");
const alertmssg = document.querySelector(".alert-message");
const counter = document.querySelector(".counter");

const infoBox = document.createElement("div");
const p = document.createElement("p");
let divcount = 0;

class Contact {
  #name;
  #email;
  #city;

  constructor(name, email, city) {
    this.#name = name;
    this.#email = email;
    this.#city = city;
  }

  set name(name) {
    this.#name;
  }

  get name() {
    return this.#name;
  }

  set email(email) {
    this.#email;
  }
  get email() {
    return this.#email;
  }

  set city(city) {
    this.#city;
  }
  get city() {
    return this.#city;
  }
}

const contactArray = [];

addButton.addEventListener("click", () => {
  let value = input.value.split(",");
  if (value.length != 3) {
    alertmssg.innerText = "Please enter all three inputs";
    return;
  }

  let name = value[0];
  let email = value[1];
  let city = value[2];

  const validations =
    name.length > 0 &&
    city.length > 0 &&
    email.includes("@") &&
    email.endsWith(".com");

  if (!validations) {
    alertmssg.innerText = "Input not valid";
    return;
  }

  alertmssg.innerText = "";

  const newElement = new Contact(name, email, city);

  const infoBox = document.createElement("div");

  function ContactInfo() {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.innerHTML = `<b>Name:</b> ${name}`;
    p2.innerHTML = `<b>Email:</b> ${email}`;
    p3.innerHTML = `<b>City:</b> ${city}`;

    infoBox.appendChild(p1);
    infoBox.appendChild(p2);
    infoBox.appendChild(p3);
  }

  // New contact element
  function contactElement() {
    contactBox.appendChild(infoBox).classList.add("infoBox");
    infoBox.style.cursor = "pointer";
    ContactInfo();
  }

  // Array
  contactArray.push(newElement);
  counter.innerText = contactArray.length;

  // Remove element
  infoBox.onclick = () => {
    contactBox.removeChild(infoBox);
    --contactArray.length;
    counter.innerText = contactArray.length;
  };
  contactElement();
});
