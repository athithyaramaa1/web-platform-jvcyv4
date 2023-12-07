// Challenge 4.1: Select the div with id "grandparent" and add an eventListener to it so that on click of the div it should print "Granparent clicked". 
//     Select the div with id "parent" and add an eventListener to it so that on click of the div it should print "Parent clicked".
//     Select the div with id "child" and add an eventListener to it so that on click of the div it should print "Child clicked".
//     Print the output on clicking the div with id "child" as:
//     "Child clicked
//      Parent clicked
//      Grandparent clicked"

const grand = document.getElementById('grandparent')
grand.addEventListener("click", (e) => {
  console.log("Grandparent clicked");
});

const parent = document.getElementById('parent')
parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});

const child = document.getElementById('child')
child.addEventListener("click", (e) => {
  console.log("Child clicked");
});

// Challenge 4.2: Select the div with id "grandparent" and add an eventListener to it so that on click of the div it should print "Granparent clicked".
//     Select the div with id "parent" and add an eventListener to it so that on click of the div it should print "Parent clicked".
//     Select the div with id "child" and add an eventListener to it so that on click of the div it should print "Child clicked".
//     Print the output on clicking the div with id "child" as:
//     "Grandparent clicked
//     Parent clicked
//     Child clicked"
//     Hint: Use event capturing concept

const grandd = document.getElementById('grandparent')
grandd.addEventListener("click", (e) => {
  console.log("Grandparent clicked");
}, true);

const parentt = document.getElementById('parent')
parentt.addEventListener("click", (e) => {
  console.log("Parent clicked");
}, true);

const childd = document.getElementById('child')
childd.addEventListener("click", (e) => {
  console.log("Child clicked");
}, true);


// Challenge 5: Select the ul with id "category" and add the eventListener to it and on click of the id "blazers" print the output as "blazers".
    //Hint: Use event delegation concept

    const list = document.getElementById('category');
    list.addEventListener('click', function(event) {
        const click = event.target.id;
        console.log(click);
    });
    

