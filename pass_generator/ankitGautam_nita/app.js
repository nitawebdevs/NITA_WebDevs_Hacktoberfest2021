document.querySelector("#submit").addEventListener("click", function () {
    var name = document.querySelector("#na").value;

    var male = document.querySelector("#male").checked;
    var female = document.querySelector("#female").checked;
    var other = document.querySelector("#other").checked;

    var sex;
    if (male === true) { sex = "Male"; } else if (female === true) { sex = "Female" } else { sex = "Other" }

    var volunteer = document.querySelector("#volunteer").checked;
    var participant = document.querySelector("#participant").checked;

    var role;
    if (volunteer === true) { role = "volunteer"; } else if (participant === true) { role = "participant"; }
    var branch = document.querySelector("#dropdown").value;

    switch (branch) {
        case "cse":
            branch="Computer Science & Engg."
            break;
        case "ece":
            branch="Electronics & Communications Engg."
            break;
    
        case "ee":
            branch="Electrical Engg."
            break;

        case "eie":
            branch="Electronics & Instrumentation Engg."
            break;
        case "me":
            branch="Mechanical Engg."
            break;
        case "ce":
            branch="Civil Engg."
            break;
        case "che":
            branch="Chemical Engg."
            break;
        case "pe":
            branch="Production Engg."
            break;
    }

    var contact = document.querySelector("#no").value;

    document.querySelector("#name").innerHTML = name;
    document.querySelector(".bold").innerHTML = sex;
    document.querySelector(".role").innerHTML = role;
    document.querySelector(".bdt").innerHTML = branch;
    document.querySelector(".cno").innerHTML = contact;
    event.preventDefault();
});


document.querySelector("#reset").addEventListener("click",function(){
    document.querySelector("#name").innerHTML = "Your Name";
    document.querySelector(".bold").innerHTML = sex;
    document.querySelector(".role").innerHTML = "Your Role";
    document.querySelector(".bdt").innerHTML = "Your Branch";
    document.querySelector(".cno").innerHTML = "XXXXXXXXXX";
});