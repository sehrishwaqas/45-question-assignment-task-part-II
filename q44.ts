

function makeSandwich(...items:string[]){
    console.log(" Making sandwich with the following items:")
    items.forEach(singleItem => console.log("-" + singleItem))
    console.log("enjoy your meal")

}
makeSandwich("chicken","mashrooms")
makeSandwich("meat","egg","fresh vegetables")
makeSandwich("garlic bread","cheese","butter","chicken")