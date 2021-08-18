 for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  } 

   const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
      for (let i = 0; i < gifts.length; i++ ) {
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
      }
      return gifts;
  }


  function writeCards(names, party) {

    let newArray = [];

    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`)
    }
    return newArray;
  }

  writeCards(["Ada", "Brendan", "Ali"], "birthday");  


function countDown(int) {
    let counter = int; 
    while ( counter > -1 ) {
        console.log(counter--);
    }

}

countDown(10);