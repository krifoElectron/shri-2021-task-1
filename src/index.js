import { leadersHtml } from './leaders/leaders';
import './styles.scss';

console.log('wata fuck222888?!');

const params = location.search
  .substr(1)
  .split('&') // разбиваем на параметры
  .reduce(function (res, a) {
    // разбираем пары ключ-значение
    const paramsArray = a.split('=');

    // нужно декодировать и ключ и значение, значения может не быть
    res[decodeURIComponent(paramsArray[0])] =
      paramsArray.length === 1 ? null : decodeURIComponent(paramsArray[1]);
    return res;
  }, {});

console.log(params);

window.renderTemplate = function (alias, data) {
  // ...
  return leadersHtml;
};
