function save() {
    let htmlValues = getHTMLValues();
    var data = JSON.stringify(htmlValues, null, 2);

    //localStorage.setItem(new Date().toString(), data);
    localStorage.setItem("data", data);

    return false;
}

function load() {
    var data = localStorage.getItem("data");
    var htmlValues = JSON.parse(data);

    for (var i = 1; i <= 6; i++) {
        var txtAnswer = document.getElementById("txtAnswer" + i);
        txtAnswer.value = htmlValues.answers[i-1];
    }

    for (var i = 1; i <= 12; i++) {
        var selOperation = document.getElementById("selSign" + i);
        selOperation.selectedIndex = htmlValues.operations[i-1];
    }
}

function getHTMLValues() {

    let answers = [];
    let signs = [];

    for (var i = 1; i <= 6; i++) {
        var txtAnswer = document.getElementById("txtAnswer" + i);
        answers.push(txtAnswer.value);
    }

    for (var i = 1; i <= 12; i++) {
        var selOperation = document.getElementById("selSign" + i);
        signs.push(selOperation.options[selOperation.selectedIndex].value);
    }

    return { answers: answers, operations: signs };
}