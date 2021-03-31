export const classNames = (...cns) =>
  cns.reduce((result, cn) => `${result}${result && cn ? ' ' : ''}${cn || ''}`, '');

const BLOCK_ELEMENT_SEP = '__';
const MODIFIER_SEP = '_';

export const bemCn = (block) => (element = '', modifierObj = {}) => {
  const blockWithElement = `${block}${element ? `${BLOCK_ELEMENT_SEP}${element}` : ''}`;

  return Object.entries(modifierObj).reduce((result, [modifierName, modifierValue]) => {
    if (typeof modifierValue === 'boolean' && modifierValue) {
      const modifier = `${modifierName ? MODIFIER_SEP : ''}${modifierName}`;
      return `${result}${modifier ? ` ${blockWithElement}${modifier}` : ''}`;
    }
    if (typeof modifierValue === 'string') {
      const modifier = `${modifierName ? MODIFIER_SEP : ''}${modifierName}${
        modifierValue ? MODIFIER_SEP : ''
      }${modifierValue}`;
      return `${result}${modifier ? ` ${blockWithElement}${modifier}` : ''}`;
    }
    return result;
  }, blockWithElement);
};

// const cn = bemCn('abc');

// console.log(cn());
// console.log(cn(''));
// console.log(cn('ef'));
// console.log(cn('ef', { a: true }));
// console.log(cn('ef', { a: false }));
// console.log(cn('ef', { a: 'false' }));
// console.log(cn('ef', { a: 'false', j: true }));
