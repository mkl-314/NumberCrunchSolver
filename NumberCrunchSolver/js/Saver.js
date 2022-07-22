function save() {
    let htmlValues = getHTMLValues();

    

    const fileElement = document.createElement("fileElement");
    var data = JSON.stringify(htmlValues, null, 2);
    console.log(JSON.stringify(htmlValues, null, 2).toString());

    //localStorage.setItem(new Date().toString(), data);
    localStorage.setItem("test", data);


    <!--fileElement.href = URL.createObjectURL(new Blob([JSON.stringify(htmlValues, null, 2)], {
        type: "application/json"
    }));
    fileElement.setAttribute("download", "data.json");
    document.body.appendChild(fileElement);
    fileElement.click();
    document.body.removeChild(fileElement-->);

    return false;
}

function load() {
    var data = localStorage.getItem("test");
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