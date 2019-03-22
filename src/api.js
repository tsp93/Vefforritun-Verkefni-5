/**
 * "Gervi" API sem skilar statískum gögnum fyrir fyrirlestra. Gætum hæglega
 * tengt hérna við "alvöru" API.
 * Sameinar statísk gögn við gögn geymd í localStorage.
 */

import data from './lectures.json';

// Lykill sem við geymum vistaðar færslur undir.
const LOCALSTORAGE_KEY = 'saved_lectures';

/**
 * Sækir alla vistaða fyrirlestra í localStorage.
 * @returns {array} Fylki af slug fyrir vistaða fyrirlestra.
 */
export function loadSavedLectures() {
  // Ná í fyrirlestra
  let lectures = localStorage.getItem(LOCALSTORAGE_KEY);
  lectures = JSON.parse(lectures);

  // Setja slugs í fylki
  let slugs = [];
  for (let i = 0; i < lectures.length; i += 1) {
    slugs.push(lectures[i].slug);
  }
  return slugs;
}

/**
 * Skilar lista af fyrirlestrum, síuuðum eftir flokkum eða ekki. Gögn um það
 * hvort notandi hafi klárað fyrirlestrar er bætt við gögn.
 *
 * @param {array} filters Fylki af flokkum sem fyrirlestrar mega vera í.
 *                        Sjálfgefið [].
 * @returns {array} Fylki af fyrirlestrum.
 */
export function getLectureList(filters = []) {
  let lectures = localStorage.getItem(LOCALSTORAGE_KEY);
  lectures = JSON.parse(lectures);

  if (!lectures) {
    lectures = data.lectures;
  }

  // Sía
  let filteredLectures = [];
  for (let i = 0; i < lectures.length; i += 1) {
    if (lectures[i].finished == null) {
      lectures[i].finished = false;
    }
    if (filters.length === 0 || filters.includes(lectures[i].category)) {
      filteredLectures.push(lectures[i]);
    }
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lectures));
  return filteredLectures;
}

/**
 * Sækir ákveðinn fyrirlestur eftir slug. Bætir við upplýsingum um hvort
 * fyrirlestur sé kláraður eða ekki.
 *
 * @param {string} slug Slug á fyrirlestri sem sækja á.
 * @returns {object} Fyrirlestri sem fannst eða null ef engin fannst.
 */
export function getLecture(slug) {
  let lectures = localStorage.getItem(LOCALSTORAGE_KEY);
  lectures = JSON.parse(lectures);

  if (!lectures) {
    lectures = data.lectures;
  }

  // Ná í fyrirlestur sem svarar til slug
  let lecture = null;
  for (let i = 0; i < lectures.length; i +=1) {
    if (slug === lectures[i].slug) {
      if (lectures[i].finished == null) {
        lectures[i].finished = false;
      }
      lecture = lectures[i];
      break;
    }
  }
  return lecture;
}

/**
 * Setur fyrirlestur sem kláraðann eða ekki eftir slug. Ef fyrirlestur var
 * kláraðar er hann settur sem ókláraður og öfugt.
 *
 * @param {string} slug Slug á fyrirlestri sem klára á.
 */
export function toggleLectureFinish(slug) {
  // Ná í fyrirlestra
  let lectures = localStorage.getItem(LOCALSTORAGE_KEY);
  lectures = JSON.parse(lectures);

  // Toggle fyrir slug
  for (let i = 0; i < lectures.length; i +=1) {
    if (slug === lectures[i].slug) {
      lectures[i].finished = !lectures[i].finished;
    }
  }
}
