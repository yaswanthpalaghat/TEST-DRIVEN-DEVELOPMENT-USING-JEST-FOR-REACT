const functions= require('./functions');

test('Adds 2 + 2 to equal 4',()=> {
    expect(functions.add(2, 2)).toBe(6);
});

test('Adds 2 + 2 to NOT equal 5',()=> {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null',()=> {
    expect(functions.isNull()).toBeNull();
});



test('User should be  yaswanth palaghat object',()=> {
    expect(functions.createUser()).toEqual({
        firstName: 'yaswanth',
        lastName: 'palaghat'
    });
});

test('Should be under 1600',()=> {
    const load1=800;
    const load2=700;
    expect(load1+load2).toBeLessThan(1600);

});

test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/);
});






