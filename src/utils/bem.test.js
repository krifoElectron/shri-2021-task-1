import { classNames, bemCn } from './bem';

test('classNames', () => {
  expect(classNames()).toBe('');
  expect(classNames('')).toBe('');
  expect(classNames('a')).toBe('a');
  expect(classNames('a', 'b')).toBe('a b');
  expect(classNames('a', '', 'b')).toBe('a b');
  expect(classNames('a', 'b', undefined)).toBe('a b');
  expect(classNames('a', 'b', null)).toBe('a b');
});
