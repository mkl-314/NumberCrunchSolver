function solve() {
    try {
        let htmlValues = getHTMLValues();
        let equations = getEquations(htmlValues);
        calculate(equations);
        return false;
    } catch (ex) {
        console.log(ex);
        return false;
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

function getEquations(htmlValues) {
    let equations = [];

    for (var i = 0; i < 6; i++) {
      
        equations.push(
            new Equation(
                i,
                htmlValues.operations[i * 2],
                htmlValues.operations[i * 2 + 1],
                htmlValues.answers[i])
        );
    }
    return equations;
}

function calculate(equations) {

    allpossibleValues = [];

    for (let equation of equations) {
        console.log(equation.id);
        equation.getValidSolutions();

        //if (equation.id < 3) {
        //    var possibleValues1 = new Set();
        //    var possibleValues2 = new Set();
        //    var possibleValues3 = new Set();
        //    for (var sol of equation.possibleSolutions) {
        //        possibleValues1.add(sol[0]);
        //        possibleValues2.add(sol[1]);
        //        possibleValues3.add(sol[2]);

        //        console.log(sol.toString());
        //    }
        //    allpossibleValues.push(possibleValues1, possibleValues2, possibleValues3);
        //}

    }

    var solution = backtrackingSearch(equations);
    if (solution.length == 0) {
        console.log("No solution");
    } else {
        console.log(solution.toString());
    }

    return solution;

    //for (let equation of equations) {
    //    if (equation.id >= 3) break;

    //    if (equation.id == 0) {
    //        for (let possibleSol of equation.possibleSolutions) {
    //            if (!equations[4].possibleSolutions.some(x => x[0] == possibleSol[0])) {

    //            }
    //        }
    //    }
    //}

}

function backtrackingSearch(equations) {
    return recursiveBacktracking(new Array(9).fill(0), equations, equations.map(x => x.possibleSolutions));
}

function recursiveBacktracking(numberVariables, equations, allPossibleSolutions) {
    if (!numberVariables.some(x => x == 0)) return numberVariables;

    //let allPossibleSolutions = equations.map(x => x.possibleSolutions);
    let equationIndex = selectUnassignedEquationIndex(numberVariables);

    for (let possibleSolution of equations[equationIndex].possibleSolutions) {
        var newAllPosSolutions = NumberCrunch.satisfiesContraints(equationIndex, possibleSolution, numberVariables, ...allPossibleSolutions);
        if (newAllPosSolutions.length == 9) {
            console.log(newAllPosSolutions.toString());
            if (equationIndex <= 2) {
                numberVariables.splice(equationIndex * 3, 3, ...possibleSolution);
            }

            var result = recursiveBacktracking(numberVariables, equations, newAllPosSolutions);
            if (result.length != 0) return result;

            if (equationIndex <= 2) numberVariables.splice(equationIndex * 3, 3, ...[0,0,0]);
        }
    }

    //failure
    return [];
}

function selectUnassignedEquationIndex(numberValues) {
    let index = numberValues.indexOf(0);

    if (index < 3) return 0;
    if (index < 6 && index >= 3) return 1;
    if (index >= 6) return 2;
}
