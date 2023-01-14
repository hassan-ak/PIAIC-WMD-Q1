/*
    Company product catalog
        In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
    1. Create an array to hold an inventory of store items.
    2. Create three items, each having the properties of name, model, cost, and  quantity.
    3. Add all three objects to the main array using an array method, and then log  the inventory array to the console.
    4. Access the quantity element of your third item, and log it to the console. 
    Experiment by adding and accessing more elements within your data structure.

*/

var productCatlog = [];
var item1 = { name: 'Smart Phone', model: '2022', cost: 44000, quantity: 15 };
var item2 = { name: 'Laptop', model: 'V6', cost: 156000, quantity: 2 };
var item3 = { name: 'PS', model: '4', cost: 104000, quantity: 14 };
productCatlog.splice(0, 0, item1, item2, item3);
console.log('Product Catlog : ', productCatlog);
console.log('Quantity of 3rd item : ', productCatlog[2].quantity);
productCatlog[0]['isAvaialable'] = true;
productCatlog[2]['color'] = 'black';
console.log('Updated product Catlog : ', productCatlog);
