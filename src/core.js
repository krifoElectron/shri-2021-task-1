export const createElementWithCn = ({ tagName, textContent, innerHtml, className }) => {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  element.className = className;
  element.innerHtml = innerHtml;
  return element;
};
