import { createElementWithCn } from '../core';
import './leaders.scss';

const HEADER = 'Больше всего ️коммитов';

export const getLeadersHtml = () => {
  const header = createElementWithCn({
    tagName: 'div',
    textContent: HEADER,
    className: 'leaders-page__header',
  });
  const leadersPage = createElementWithCn({
    tagName: 'div',
    className: 'leaders-page',
  });
  leadersPage.appendChild(header);
  console.log(leadersPage);
  return leadersPage.outerHTML;
};
