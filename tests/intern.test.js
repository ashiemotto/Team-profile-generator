const intern = require('../lib/intern');

describe('intern', () =>{
   
        it ('should return name ',()=>{

        // assign text
        const testName = 'name';
        //act
        const obj = new intern(testName, 0 ,"email@emailcom");
        //assert
        expect(obj.name).toEqual(testName);
    });

    it ('should return email ', ()=> {

    // assign text
    const testEmail = 'ash@Ash.com';
    //act
    const obj = new intern('testname',0,testEmail);
    //assert
    expect(obj.email).toEqual(testEmail);
});

it ('should returne id ',() => {

    // assign text
    const testid = 22;
    //act
    const obj = new intern('testname',testid,"email@emailcom");
    //assert
    expect(obj.id).toEqual(testid);
    });
});
