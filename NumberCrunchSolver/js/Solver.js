function solve() {
    try {
        var startTime = performance.now();

        let htmlValues = getHTMLValues();
        let equations = getEquations(htmlValues);
        let solution = calculate(equations);

        displayResults(solution);

        var endTime = performance.now();

        console.log(`${endTime - startTime} ms`);
        return false;
    } catch (ex) {
        console.log(ex);
        return false;
    }
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
        equation.getValidSolutions();
    }

    var solution = backtrackingSearch(equations);

    return solution;

}

function backtrackingSearch(equations) {
    return recursiveBacktracking(new Array(9).fill(0), equations, equations.map(x => x.possibleSolutions));
}

function recursiveBacktracking(numberVariables, equations, allPossibleSolutions) {
    if (!numberVariables.some(x => x == 0)) return numberVariables;

    let equationIndex = selectUnassignedEquationIndex(numberVariables);

    for (let possibleSolution of equations[equationIndex].possibleSolutions) {
        var newAllPosSolutions = satisfiesContraints(equationIndex, possibleSolution, numberVariables, ...allPossibleSolutions);
        if (newAllPosSolutions.length == 6) {

            if (equationIndex <= 2) {
                numberVariables.splice(equationIndex * 3, 3, ...possibleSolution);
            }

            var result = recursiveBacktracking(numberVariables, equations, newAllPosSolutions);
            if (result.length != 0) return result;

            if (equationIndex <= 2) numberVariables.splice(equationIndex * 3, 3, ...[0, 0, 0]);
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

function satisfiesContraints(equationIndex, posSolution, numberVariables, ...allPossibleSolutions) {
    if (this.containsDuplicate(equationIndex, posSolution, ...numberVariables)) return [];

    let newAllPosSolutions = allPossibleSolutions;

    if (equationIndex < 3) {

        var rowNum = equationIndex;
        for (var i = 0; i < 3; i++) {
            newAllPosSolutions[3 + i] = allPossibleSolutions[3 + i].filter(x => x[rowNum] == posSolution[i]);
            if (newAllPosSolutions[3 + i].length == 0) return [];
        }
    } else {
        var colNum = equationIndex - 3; // replace rowNum with colNum
    }

    return newAllPosSolutions;
}

function getColumnSolutions(posSolution, columnEquationIndex, columnVariableIndex, newAllPosSolutions) {
    return allPossibleSolutions[columnEquationIndex].map(x => x[columnVariableIndex] == posSolution[0]);
    if (posSolutions.length == 0) {
        return [];
    } else {
        newAllPosSolutions.push(posSolutions);
    }
}

function containsDuplicate(equationIndex, posSolution, ...numberVariables) {

    if (equationIndex <= 2) {
        numberVariables.splice(equationIndex * 3, 3, ...posSolution);
    }

    numberVariables = numberVariables.filter(x => x != 0);

    return (new Set(numberVariables)).size !== numberVariables.length;
}

function displayResults(solution) {
    var lblNoSol = document.getElementById("lblNoSol");

    if (solution.length == 0) {
        lblNoSol.style.display = "block";
        lblNoSol.style.color = "red";

        for (var i = 0; i < 9; i++) {
            var lblNum = document.getElementById("lblNum" + i);
            lblNum.innerHTML = "";
        }
    } else {
        lblNoSol.style.display = "none";
        for (var i = 0; i < 9; i++) {
            var lblNum = document.getElementById("lblNum" + i);
            lblNum.innerHTML = solution[i];
        }
    }
}
