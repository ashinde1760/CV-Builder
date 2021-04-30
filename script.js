//alert("hello");


function addNewWEField()
{
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder',"Enter here")    

    let we = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    we.insertBefore(newNode, weAddButton);

}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', "Enter here")

    let aq = document.getElementById("aq");
    let aqAddButton = document.getElementById("aqAddButton");

    aq.insertBefore(newNode, aqAddButton);

}



function generateCV() {

    let nameField1 = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField1;


    let contactField = document.getElementById("contactField").value;

    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactField;


    let addField = document.getElementById("addField").value;

    let addressT = document.getElementById("addressT");

    addressT.innerHTML = addField;



    let fbField = document.getElementById("fbField").value;

    let fbT = document.getElementById("fbT");

    fbT.innerHTML = fbField;


    let instaField = document.getElementById("instaField").value;

    let instaT = document.getElementById("instaT");

    instaT.innerHTML = instaField;


    let linkedField = document.getElementById("linkedField").value;

    let linkedT = document.getElementById("linkedT");

    linkedT.innerHTML = linkedField;


    let objeciveField = document.getElementById("objectiveField").value;

    let objectiveT = document.getElementById("objectiveT");

    objectiveT.innerHTML = objeciveField;



    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;




    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML = str1;


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";


}

    function printCV() {
        window.print();
    }
