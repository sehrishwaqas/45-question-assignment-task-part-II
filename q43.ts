/*Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.

*/
let magicianName=["Sajjad", "Abbas","Gaffar"]
function show_magicians(magician:string[]){
    magician.forEach((magicianName)=>console.log(magicianName))}
    show_magicians(magicianName)

    
function make_great(magician:string[]){
   return magician.map((name)=>console.log ("The Great", name))

}

make_great(magicianName)




let magician_Name=["Sajjad", "Abbas","Gaffar"]


let copyMagician = magician_Name.slice()



show_magicians(magicianName)
make_great(copyMagician)





