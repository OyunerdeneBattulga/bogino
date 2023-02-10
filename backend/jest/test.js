/* eslint-disable no-undef */
// const welcomer = require('./welcomer');
const welcomer = require('../Controller/linkController');

beforeAll(async () => {
    console.log('log test');
});

afterAll(async () => {
    console.log('end of end test');
});

afterAll(async () => {
    console.log('end of the log test');
});

describe('test jest first time', () => {
    // it('first tast case', () => {
    //     const a = 2;
    //     const b = '7';
    //     const c = 4;
    //     console.log('first tast case log');
    //     const result = a + b + c;
    //     expect(result).toBe('274');
    // });
    it('first tast case', () => {
        const result = welcomer.getLinks('200');
        expect(result).toBe('200');
    });
});
