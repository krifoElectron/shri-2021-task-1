import allData from './data/data.json';
import { createElementWithCn } from './core';
// import image from './assets/images/3x/1.jpg';
import './styles/page.scss';
import './styles.scss';

const params = location.search
  .substr(1)
  .split('&')
  .reduce(function (res, a) {
    const paramsArray = a.split('=');
    res[decodeURIComponent(paramsArray[0])] =
      paramsArray.length === 1 ? null : decodeURIComponent(paramsArray[1]);
    return res;
  }, {});

const { slide = 1 } = params;

const alias = allData[slide - 1].alias;
const data = allData[slide - 1].data;

window.renderTemplate = function (alias, data) {
  const currentData = data[slide - 1];

  const page = createElementWithCn({
    tagName: 'div',
    className: 'page',
  });

  const title = createElementWithCn({
    tagName: 'div',
    textContent: data.title,
    className: 'page__title',
  });

  const subtitle = createElementWithCn({
    tagName: 'div',
    textContent: data.subtitle,
    className: 'page__subtitle',
  });

  const bottomContainer = createElementWithCn({
    tagName: 'div',
    className: 'page__bottom-container',
  });

  // leaders
  const thirdPlaceUser = data.users[2];
  const thirdPlaceOnThePodium = createElementWithCn({
    tagName: 'div',
    className: 'page__place-on-podium page__place-on-podium_place_third',
  });
  const thirdPlacePersonBlock = createElementWithCn({
    tagName: 'div',
    className: 'page__person-block',
  });
  const thirdImg = createElementWithCn({
    tagName: 'img',
    className: 'page__leaders-img',
  });
  thirdImg.src = `images/3x/${thirdPlaceUser.avatar}`;
  const thirdPlaceName = createElementWithCn({
    tagName: 'div',
    textContent: thirdPlaceUser.name,
    className: 'page__persons-name',
  });
  const thirdPlaceCommits = createElementWithCn({
    tagName: 'div',
    textContent: thirdPlaceUser.valueText,
    className: 'page__persons-commits',
  });
  const thirdPlacePedestal = createElementWithCn({
    tagName: 'div',
    textContent: '3',
    className: 'page__pedestal page__pedestal_place_third',
  });
  thirdPlacePersonBlock.appendChild(thirdImg);
  thirdPlacePersonBlock.appendChild(thirdPlaceName);
  thirdPlacePersonBlock.appendChild(thirdPlaceCommits);
  thirdPlaceOnThePodium.appendChild(thirdPlacePersonBlock);
  thirdPlaceOnThePodium.appendChild(thirdPlacePedestal);

  const firstPlaceUser = data.users[0];
  const firstPlaceOnThePodium = createElementWithCn({
    tagName: 'div',
    className: 'page__place-on-podium page__place-on-podium_place_first',
  });
  const firstPlacePersonBlock = createElementWithCn({
    tagName: 'div',
    className: 'page__person-block page__person-block_first',
  });
  const firstImg = createElementWithCn({
    tagName: 'img',
    className: 'page__leaders-img',
  });
  firstImg.src = `images/3x/${firstPlaceUser.avatar}`;
  const firstPlaceName = createElementWithCn({
    tagName: 'div',
    textContent: firstPlaceUser.name,
    className: 'page__persons-name',
  });
  const firstPlaceCommits = createElementWithCn({
    tagName: 'div',
    textContent: firstPlaceUser.valueText,
    className: 'page__persons-commits',
  });
  const firstPlacePedestal = createElementWithCn({
    tagName: 'div',
    textContent: '1',
    className: 'page__pedestal page__pedestal_place_first',
  });
  firstPlacePersonBlock.appendChild(firstImg);
  firstPlacePersonBlock.appendChild(firstPlaceName);
  firstPlacePersonBlock.appendChild(firstPlaceCommits);
  firstPlaceOnThePodium.appendChild(firstPlacePersonBlock);
  firstPlaceOnThePodium.appendChild(firstPlacePedestal);

  const secondPlaceUser = data.users[1];
  const secondPlaceOnThePodium = createElementWithCn({
    tagName: 'div',
    className: 'page__place-on-podium page__place-on-podium_place_second',
  });
  const secondPlacePersonBlock = createElementWithCn({
    tagName: 'div',
    className: 'page__person-block',
  });
  const secondImg = createElementWithCn({
    tagName: 'img',
    className: 'page__leaders-img',
  });
  secondImg.src = `images/3x/${secondPlaceUser.avatar}`;
  const secondPlaceName = createElementWithCn({
    tagName: 'div',
    textContent: secondPlaceUser.name,
    className: 'page__persons-name',
  });
  const secondPlaceCommits = createElementWithCn({
    tagName: 'div',
    textContent: secondPlaceUser.valueText,
    className: 'page__persons-commits',
  });
  const secondPlacePedestal = createElementWithCn({
    tagName: 'div',
    textContent: '2',
    className: 'page__pedestal page__pedestal_place_second',
  });
  secondPlacePersonBlock.appendChild(secondImg);
  secondPlacePersonBlock.appendChild(secondPlaceName);
  secondPlacePersonBlock.appendChild(secondPlaceCommits);
  secondPlaceOnThePodium.appendChild(secondPlacePersonBlock);
  secondPlaceOnThePodium.appendChild(secondPlacePedestal);

  bottomContainer.appendChild(thirdPlaceOnThePodium);
  bottomContainer.appendChild(firstPlaceOnThePodium);
  bottomContainer.appendChild(secondPlaceOnThePodium);

  page.appendChild(title);
  page.appendChild(subtitle);
  page.appendChild(bottomContainer);

  return page.outerHTML;
};

const body = document.querySelector('body');
body.innerHTML = window.renderTemplate(alias, data);
