class Equation {

    validSolutions = [];

    constructor(id, operation1, operation2, answer) {
        this.id = id;
        this.operation1 = operation1;
        this.operation2 = operation2;
        this.answer = answer;
    }

    getValidSolutions() {

        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= 9; j++) {
                if (i === j) continue;
                for (var k = 1; k <= 9; k++) {
                    if (i === k || j === k) continue;
                    if (this.isValidSolution(i, j, k)) {
                        this.validSolutions.push((i, j, k));
                    }
                }
            }
        }
    }

    isValidSolution(i, j, k) {
        let lhs;
        let firstOperationPerformed;

        if ((this.operation2 == Operation.Divide || this.operation2 == Operation.Times) &&
            this.operation1 == Operation.Minus || this.operation1 == Operation.Plus) {
            lhs = PerformOperation(j, k, this.operation2);
            firstOperationPerformed = false;
        } else {
            lhs = PerformOperation(i, j, this.operation1);
            firstOperationPerformed = true;
        }

        if (firstOperationPerformed) {
            lhs = PerformOperation(lhs, k, this.operation2);
        } else {
            lhs = PerformOperation(i, lhs, this.operation1);
        }
        return lhs === this.answer;

    }
}

//function Plus(a, b) {
//    return a + b;
//}

//function Minus(a, b) {
//    return a - b;
//}

//function Times(a, b) {
//    return a * b;
//}

//function Divide(a, b) {
//    return a / b;
//}

function PerformOperation(a, b, operation) {
    switch (operation) {
        case Operation.Divide:
            return a / b;
        case Operation.Times:
            return a * b;
        case Operation.Minus:
            return a - b;
        case Operation.Plus:
            return a + b;
    }
}