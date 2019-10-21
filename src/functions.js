const functions={
    add: (num1,num2)=>num1+num2,
    isNull: ()=> null,
    createUser: ()=> {
        const user={firstName: 'yaswanth' }
        user['lastName']='palaghat';
        return user;
    }

    
    
};

module.exports=functions;