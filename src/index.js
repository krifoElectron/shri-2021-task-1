import allData from './data/data.json';
import { createElementWithCn } from './core';
import { getLeadersElement } from './pages/leaders/leaders';
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

  const leadersPage = getLeadersElement(data.users);

  bottomContainer.appendChild(leadersPage);

  page.appendChild(title);
  page.appendChild(subtitle);
  page.appendChild(bottomContainer);

  return page.outerHTML;
};

const body = document.querySelector('body');
body.innerHTML = window.renderTemplate(alias, data);
