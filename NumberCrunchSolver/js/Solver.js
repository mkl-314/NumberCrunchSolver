function solve() {
    let htmlValues = getHTMLValues();
    let equations = getEquations(htmlValues);
    calculate(equations);
}

function getHTMLValues() {

    let answers = [];
    let signs = Equation[];

    for (var i = 1; i <= 6; i++) {
        answers.push(document.getElementById("txtAnswer" + i));
    }

    for (var i = 1; i <= 12; i++) {
        signs.push(document.getElementById("selSign" + i));
    }

    return { answers: answers, signs: signs };
}

function getEquations(htmlValues) {
    let equation = new Equation(1, 0, 0, 13);


}

function calculate(equations) {

    for (var equation in equations) {
        equation.getValidSolutions();
    }
}