let magicianName = ["Sajjad", "Abbas", "Gaffar"];
function show_magicians(magician) {
    magician.forEach((magicianName) => console.log(magicianName));
}
show_magicians(magicianName);
function make_great(magician) {
    return magician.map((name) => console.log("The Great", name));
}
make_great(magicianName);
export {};
