const express = require('express');
const fetchPromise = import("node-fetch");

// memes
async function getMemes() {
  const fetch = await fetchPromise;

  const url = `https://api.imgflip.com/get_memes`;

  const response = await fetch.default(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}


// dogs
async function getDogs() {
  const fetch = await fetchPromise;

  const url = `https://dog.ceo/api/breeds/image/random`;

  const response = await fetch.default(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Rick and Morty Characters
async function getCharacters() {
  const fetch = await fetchPromise;

  const url = `https://rickandmortyapi.com/api/character/`;

  const response = await fetch.default(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
async function getCharacter() {
  const fetch = await fetchPromise;

  const url = `https://rickandmortyapi.com/api/character/`;

  const response = await fetch.default(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

module.exports = {
    getMemes,
    getDogs,
    getCharacters,
    getCharacter
}
