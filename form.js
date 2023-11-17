const items = [
    { id: 1, name: "Charger", range: "Range: 15-50 W", range2: "Range: 0.5-1 W"},
    { id: 2, name: "Dishwasher", range: "Range: 1200-2400 W", range2: "Range: 0.5-2 W"},
    { id: 3, name: "Fridge", range: "Range: 200-800 W", range2: "0"},
    { id: 4, name: "Hood", range: "Range: 100-300 W", range2: "Range: 0.5-2 W"},
    { id: 5, name: "Laptop", range: "Range: 15-60 W", range2: "Range: 0.5-1 W"},
    { id: 6, name: "Microwave", range: "Range: 600-1500 W", range2: "Range: 1-3 W"},
    { id: 7, name: "Oven", range: "Range: 2000-5000 W", range2: "Range: 2-4 W"},
    { id: 8, name: "PC", range: "Range: 150-500 W", range2: "Range: 2-20 W"},
    { id: 9, name: "Radio", range: "Range: 5-20 W", range2: "Range: 1-5 W"},
    { id: 10, name: "Television", range: "Range: 30-200 W", range2: "Range: 1-10 W"},
    { id: 11, name: "Toaster", range: "Range: 600-1500 W", range2: "Range: 1-3 W"},
    { id: 12, name: "Washing machine", range: "Range: 600-2000 W", range2: "Range: 2-5 W"},
    { id: 13, name: "Other consumers", range: "0", range2: "0"},
    { id: 14, name: "Air conditioner", range: "Range: 900-1200 W", range2: "Range: 1-10 W"},
    { id: 15, name: "Boiler", range: "Range: 1500-3000 W", range2: "Range: 2-6 W"},
    { id: 16, name: "Electric stove", range: "Range: 1000-3000 W", range2: "Range: 1-3 W"},
    { id: 17, name: "Coffee machine", range: "Range: 500-2000 W", range2: "Range: 0.5-2 W"},
    { id: 18, name: "Heater", range: "Range: 1000-3500 W", range2: "Range: 2-5 W"}
  ];

  const datalist = document.getElementById("Electrocasnice");
  const datalist_Range = document.getElementById("Range1");
  const datalist_Range_stby = document.getElementById("Range2");
  const itemInput1 = document.getElementById("electroinput");
    console.log(itemInput1);

  
    function generateOptions(items) {
        items.forEach(item => {
          const option = document.createElement("option");
          option.value = `${item.name}`;
          option.setAttribute("data-id", item.id); // Set the data-id attribute
          datalist.appendChild(option);
        });
      }

generateOptions(items);
onItemSelect1(items);
onItemSelect2(items);

function onItemSelect1(item) {
    const selectedOption = document.querySelector('#Electrocasnice option[value="' + itemInput1.value + '"]');
    if (selectedOption) {
        if(datalist_Range.lastChild != null){
            datalist_Range.removeChild(datalist_Range.lastChild);
          }
      const selectedItemID = selectedOption.getAttribute("data-id"), option = document.createElement("option");
      console.log("Selected item ID:", selectedItemID);
      // You can perform actions based on the selected item ID here
      console.log( items);
      option.value = `${items[selectedItemID-1].range}`;
      console.log("The range is: ", items[selectedItemID].range);
      datalist_Range.appendChild(option);
    }
  }

function onItemSelect2(Item){
    const selectedOption = document.querySelector('#Electrocasnice option[value="' + itemInput1.value + '"]');
    if (selectedOption) {
      if(datalist_Range_stby.lastChild != null){
        datalist_Range_stby.removeChild(datalist_Range_stby.lastChild);
      }
      const selectedItemID = selectedOption.getAttribute("data-id"), option = document.createElement("option");
      console.log("Selected item ID:", selectedItemID);
      // You can perform actions based on the selected item ID here
      console.log( items);
      option.value = `${items[selectedItemID-1].range2}`;
      console.log("The range is: ", items[selectedItemID].range2);
      datalist_Range_stby.appendChild(option);
    }
}

  //function showRanges(items){
    //const option = document.createElement("option");
    //option.value = `${item.selectedItemID.range}`;
    //datalist_range.appendChild(option);
  //}
  
  // Listen for the input event on the input field
  itemInput1.addEventListener("input", onItemSelect1);
  itemInput1.addEventListener("input", onItemSelect2);


console.log("SCRIPT LOADED")