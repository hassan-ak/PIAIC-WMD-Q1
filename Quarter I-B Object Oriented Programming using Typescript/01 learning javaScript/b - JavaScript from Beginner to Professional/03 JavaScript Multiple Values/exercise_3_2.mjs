/*
    Practice exercise 3.2
        1. Create an empty array to use as a shopping list.
        2. Add Milk, Bread, and Apples to your list.
        3. Update "Bread" with Bananas and Eggs.
        4. Remove the last item from the array and output it into the console.
        5. Sort the list alphabetically.
        6. Find and output the index value of Milk.
        7. After Bananas, add Carrots and Lettuce.
        8. Create a new list containing Juice and Pop.
        9. Combine both lists, adding the new list twice to the end of the first list.
        10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
"Pop", "Juice", "Pop"]
*/

var shoppingList = [];
console.log('Shopping List : ', shoppingList);
shoppingList.splice(0, 0, 'Milk', 'Bread', 'Apples');
console.log('Shopping List : ', shoppingList);
shoppingList.splice(shoppingList.indexOf('Bread'), 1, 'Bananas', 'Eggs');
console.log('Shopping List : ', shoppingList);
console.log('Last element removed : ', shoppingList.pop());
console.log('Shopping List : ', shoppingList);
shoppingList.sort();
console.log('Shopping List : ', shoppingList);
console.log('Index of Milk : ', shoppingList.indexOf('Milk'));
shoppingList.splice(
  shoppingList.indexOf('Bananas') + 1,
  0,
  'Carrots',
  'Lettuce'
);
console.log('Shopping List : ', shoppingList);
var newList = ['Juice', 'Pop'];
console.log('New List : ', newList);
shoppingList = shoppingList.concat(newList).concat(newList);
console.log('Shopping List : ', shoppingList);
console.log('Last index of Pop : ', shoppingList.lastIndexOf('Pop'));
