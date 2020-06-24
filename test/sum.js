
const assert= require('assert')


function sumOfTwoArrays(arrA, arrB){
 let mySum= [];
 for(let i= 0; i< Math.max(arrA.length, arrB.length) ; i++){
    
     if(arrA[i]===[] && arrB[i]===[] ){
         return [];
     } else {
        mySum.push((arrA[i] || 0) + ( arrB[i]|| 0))
     }
     }
     return mySum;
 }

// check the test in differernt use case

describe('sumOfTwoArrays', function(){
    describe('check Two arrays',function(){
        it("out put should be empty array", function(){
            assert.deepEqual(sumOfTwoArrays([],[]),[])
        })
        it("out put should be [2,2,2]", function(){
            assert.deepEqual(sumOfTwoArrays([1,1,1],[1,1,1]),[2,2,2])
        })
        it("input will be [1,2], [1,2,6]& output [2,4,6]", function(){
            assert.deepEqual(sumOfTwoArrays([1,2],[1,2,6]),[2,4,6])
        })

    })
 

})




