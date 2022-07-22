class NumberCrunch {
    //allPossibleSolutions = [];
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
                newAllPosSolutions[3 + i] = allPossibleSolutions[3 + i].map(x => x[rowNum] == posSolution[i]);
                if (newAllPosSolutions[3 + i].length == 0) return [];
            }
        } else {
            var colNum = equationIndex - 3; // replace rowNum with colNum
        }

        //if (equationIndex == 0) {
        //    newAllPosSolutions[3] = allPossibleSolutions[3].map(x => x[0] == posSolution[0]);
        //    if (newAllPosSolutions[3].length == 0) return [];

        //    newAllPosSolutions[4] = allPossibleSolutions[4].map(x => x[0] == posSolution[1]);
        //    if (newAllPosSolutions[4].length == 0) return [];

        //    newAllPosSolutions[5] = allPossibleSolutions[5].map(x => x[0] == posSolution[2]);
        //    if (newAllPosSolutions[5].length == 0) return [];
        //} else if (equationIndex == 1) {
        //}

        return newAllPosSolutions;

        // Eq 0 and 3
        //if (numberVariables[0] != 0) {
        //    if (!allPossibleSolutions[0].some(x => x[0] == numberVariables[0]) ||
        //        !allPossibleSolutions[3].some(x => x[0] == numberVariables[0])) {
        //        return false;
        //    }
        //}

        //for (var i = 0; i < numberVariables.length; i++) {
        //    if (numberVariables[i] != 0) {
        //        if (!allPossibleSolutions[0].some(x => x[0] == numberVariables[i]) ||
        //            !allPossibleSolutions[3].some(x => x[0] == numberVariables[i])) {
        //            return false;
        //        }
        //    }
        //}
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

    containsDuplicate(equationIndex, posSolution, ...numberVariables) {

        if (equationIndex <= 2) {
            numberVariables.splice(equationIndex * 3, 3, ...posSolution);
        }

        numberVariables = numberVariables.filter(x => x != 0);

        return (new Set(numberVariables)).size !== numberVariables.length;
    }

}