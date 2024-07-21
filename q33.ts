

let num1:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<num1.length;i++){
    console.log(num1[i]);

    function getOrdinal(n:number){
if (n===1)return 'st';
if (n===2)return 'nd';
if (n===3)return 'rd';
return 'th';
    }
    const num2=[]=[1,2,3,4,5,6,7,8,9];
    num2.forEach(element=>{
        console.log(`${element}${getOrdinal(element)}`)
    
})
}