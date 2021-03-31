import { createElementWithCn } from '../../core';
import { bemCn } from '../../utils/bem';
import './leaders.scss';

const MAP_NUMBER_TO_STRING = {
  1: 'first',
  2: 'second',
  3: 'third',
};

const cn = bemCn('leaders-page');

export const getLeadersElement = (users) => {
  const leadersElement = createElementWithCn({
    tagName: 'div',
    className: cn(),
  });

  const thirdPlaceOnThePodium = createPlaceOnThePodium(3, users[2]);
  const firstPlaceOnThePodium = createPlaceOnThePodium(1, users[0]);
  const secondPlaceOnThePodium = createPlaceOnThePodium(2, users[1]);

  leadersElement.appendChild(thirdPlaceOnThePodium);
  leadersElement.appendChild(firstPlaceOnThePodium);
  leadersElement.appendChild(secondPlaceOnThePodium);

  return leadersElement;
};

function createPlaceOnThePodium(placeNumber, user) {
  const placeOnThePodium = createElementWithCn({
    tagName: 'div',
    className:
      'leaders-page__place-on-podium' +
      ` leaders-page__place-on-podium_place_${MAP_NUMBER_TO_STRING[placeNumber]}`,
  });

  const placePersonBlock = createElementWithCn({
    tagName: 'div',
    className: `leaders-page__person-block${
      placeNumber === 1 ? ' leaders-page__person-block_first' : ''
    }`,
  });

  const imgElement = createElementWithCn({
    tagName: 'img',
    className: 'leaders-page__leaders-img',
  });
  imgElement.src = `images/3x/${user.avatar}`;

  const placeName = createElementWithCn({
    tagName: 'div',
    textContent: user.name,
    className: 'leaders-page__persons-name',
  });

  const placeCommits = createElementWithCn({
    tagName: 'div',
    textContent: user.valueText,
    className: 'leaders-page__persons-commits',
  });

  const placePedestal = createElementWithCn({
    tagName: 'div',
    textContent: placeNumber,
    className:
      'leaders-page__pedestal' +
      ` leaders-page__pedestal_place_${MAP_NUMBER_TO_STRING[placeNumber]}`,
  });

  placePersonBlock.appendChild(imgElement);
  placePersonBlock.appendChild(placeName);
  placePersonBlock.appendChild(placeCommits);
  placeOnThePodium.appendChild(placePersonBlock);
  placeOnThePodium.appendChild(placePedestal);

  return placeOnThePodium;
}
