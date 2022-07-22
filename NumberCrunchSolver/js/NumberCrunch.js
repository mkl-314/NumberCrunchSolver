class NumberCrunch {

    /* 
     * numberVariables = [1,2,3,4,5,6,7,8,9]
     * 1 2 3 
     * 4 5 6
     * 7 8 9
     */
    constructor(allPossibleSolutions) {
        this.allPossibleSolutions = allPossibleSolutions;
    }

    static satisfiesContraints(equationIndex, posSolution, numberVariables, ...allPossibleSolutions) {
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

    getColumnSolutions(posSolution, columnEquationIndex, columnVariableIndex, newAllPosSolutions) {
        return allPossibleSolutions[columnEquationIndex].map(x => x[columnVariableIndex] == posSolution[0]);
        if (posSolutions.length == 0) {
            return [];
        } else {
            newAllPosSolutions.push(posSolutions);
        }
    }
    variablesSatisfiesSolution(variable, solutions1, solutions2) {

    }

    static containsDuplicate(equationIndex, posSolution, ...numberVariables) {

        if (equationIndex <= 2) {
            numberVariables.splice(equationIndex * 3, 3, ...posSolution);
        }

        numberVariables = numberVariables.filter(x => x != 0);

        return (new Set(numberVariables)).size !== numberVariables.length;
    }

}