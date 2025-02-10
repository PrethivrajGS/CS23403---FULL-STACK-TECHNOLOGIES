let shopping_list = [];
function addItem()
{
    let item = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;
    if (item && quantity && category)
    { 
    shopping_list.push({item: item, quantity: quantity, category: category});
    console.log(shopping_list);
    displayList();
    }
    else
    {
        alert("Please enter all the fields");
    }
}

function removeLast()
{
    if (shopping_list.length > 0) 
    {
    shopping_list.pop();
    displayList();
    console.log(shopping_list);
    }
    else{
        alert("The list is empty");
    }
}

function sortitems(){
    shopping_list.sort(function(a,b)
    {return Number(a.quantity)-Number(b.quantity)});
    console.log(shopping_list);
    displayList();
}

function displayList() {
    let resultDiv = document.getElementById("result"); 
    let output = "<div>Shopping List: ";

    // If the shopping list is empty
    if (shopping_list.length === 0) {
        output += "No items in the list";
    } else {
        output = "[\"";
        for (let i = 0; i < shopping_list.length; i++) {
            output += shopping_list[i].quantity + " " + shopping_list[i].item;
            if (i !== shopping_list.length - 1) output += " \", \""; // Add a comma between items
        }
    }
    output += "\"]</div>";

    // Grouping items by category
    output += "<h3>Items by Category:</h3>";
    let categories = {}; 

    for (let i = 0; i < shopping_list.length; i++) {
        let item = shopping_list[i];
        if (!categories[item.category]) {
            categories[item.category] = []; 
        }
        categories[item.category].push(item.quantity + " " + item.item);
    }

   // Displaying categories
for (let j in categories) {
    output += "<h4>" + j + ":</h4>";
    output += "<ul>";
    for (let i = 0; i < categories[j].length; i++) {
        output += "<li>" + categories[j][i] + "</li>";
    }
    output += "</ul>";
}


    resultDiv.innerHTML = output;
}