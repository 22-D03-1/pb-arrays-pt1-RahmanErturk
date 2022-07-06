// Aufgabe 1: Declare a variable named euroCities and assign an array of 5 european cities to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable secondCity and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];
console.log({secondCity});

// Aufgabe 2: Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log({euroCities});

// Aufgabe 3: Print the length of the array euroCities.
console.log("length of euroCities:", euroCities.length);

// Aufgabe 4: Remove the last item of the array euroCities.
euroCities.pop();
console.log({euroCities});

// Aufgabe 5: Use an array method to add "Budapest" to the end of the euroCities array.
euroCities.push("Budapest");
console.log({euroCities});

// Aufgabe 6: Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Peking", "Tokio", "Seoul", "Shanghai", "Bangkok"];

// Aufgabe 7: Use a method to combine euroCities and asianCities into one array. Store the result in a variable worldCities.

const worldCities = euroCities.concat(asianCities);
console.log({worldCities});

// Aufgabe 8: Reverse the order of worldCities. 

worldCities.reverse();
console.log({worldCities});

// Aufgabe 9: Bonus: Remove the third item from the euroCities array.
euroCities.splice(2, 1)
console.log({euroCities});

// Aufgabe 10: Bonus: Use an array method to select items 2 to 4 from the array of asianCities and store this in another variable.

const someCitiesInAsia = asianCities.slice(1, 4);
console.log({someCitiesInAsia});

// Aufgabe 11: Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
/**
 * Erster Weg, um diese Aufgabe zu lösen: 
 * 
 * worldCities[2] = "Toronto";      
 * console.log({worldCities});
 */
// Zweiter Weg

worldCities.splice(2, 1, "Toronto");
console.log(worldCities)

// Aufgabe 12: Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log({worldCities});

// Aufgabe 13: Bonus Write a program to join all elements of the result (`worldCities) into a string.

console.log(worldCities.join(" + "));


// Aufgabe Bonus: Write a program to reverse the string: "Hello World".

const message = "Hello World";
const reverseMessage = [...message].reverse().join("");

console.log(reverseMessage);
