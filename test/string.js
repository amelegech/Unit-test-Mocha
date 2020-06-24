
let assert = require('assert')
function mySubstring(str, y){
    let subStr ='';
    for(let i= y; i<str.length; i++){
        if(y < 0){
            return "";
        } else if(y === String && str===Number ){
            return "";
        }else{
            subStr += str[i]

        }
        
    }
    return subStr

} 



describe('working on string', function(){
    describe('boundery check', function(){
        it("output will be empty string", function(){
            assert.equal(mySubstring('I Think mocha test is awesom', -3), "")
        })

    })
    describe('Type check', function(){
        it("out put will be empty string", function(){
            assert.equal(mySubstring(2222,"B"), '')
    
        })
        it("out put will be empty string", function(){
            assert.equal(mySubstring(true,2), '')
    
        })
        
    })
    describe('best case', function(){
        it("it takes string & num", function(){
            assert.equal(mySubstring('I Think mocha test is awesom', 7), ' mocha test is awesom')
    
        })
        
    })
    

})



