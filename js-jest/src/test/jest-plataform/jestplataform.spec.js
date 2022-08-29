/**
 * só copiei e colei para verificar a saída
 */ 

const {diff} = require('jest-diff');
const {getType} = require('jest-get-type');
const {validate} = require('jest-validate');
const {parseWithComments, } = require('jest-docblock');
const {format: prettyFormat} = require('pretty-format');

const code = `
/**
 * This is a sample
 *
 * @flow
 */

console.log('Hello World!');
`;

const configByUser = {
  transform: '<rootDir>/node_modules/my-custom-transform',
};

const result = validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
});
const parsed = parseWithComments(code);


const val = {object: {}};
val.circularReference = val;
val[Symbol('foo')] = 'foo';
val.map = new Map([['prop', 'value']]);
val.array = [-0, Infinity, NaN];


console.log(diff(code, 'outra string'));
console.log(parsed);
console.log(getType(code));
console.log(result);
console.log(prettyFormat(val));

test('algo', () => {
    expect('a').toBe('a');
});