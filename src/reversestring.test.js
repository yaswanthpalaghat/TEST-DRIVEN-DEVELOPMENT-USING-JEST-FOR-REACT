const reverseString = require('./reversestring');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', ()=> {
    expect(reverseString('heLlo')).toEqual('olleh');
});



