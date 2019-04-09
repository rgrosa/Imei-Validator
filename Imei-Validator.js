
function imeiValidator(imeiValue) {
    let imeiLengthMax = 15;
    if (imeiValue.length != imeiLengthMax) {
        alert("Value informed does not have '15' digits");
        return false;
    }

    let imeiArray = imeiValue.split("");
    let imeiTestDigit = imeiValue.slice(14);
    imeiTestDigit = parseInt(imeiTestDigit);
    let ArrayMath = imeiArray.slice([0], [14]);
    let i;

    for (i = 1; i <= ArrayMath.length; i = i + 2) {
        ArrayMath[i] = (ArrayMath[i] * 2);
        ArrayMath[i] = ArrayMath[i].toString();
    }

    let dataJoin = ArrayMath.join("").split("").map(function (x) { return parseInt(x) });
    let dataJoinLength = dataJoin.length;
    let helpVariable = 0;
    let finalResult = 0;

    if (dataJoinLength % 2 == 0) {
        dataJoinLength = dataJoinLength - 1;
        for (i = 0; i <= dataJoinLength; i = i + 2) {
            if (dataJoin[i + 1] == null) {
                helpVariable = dataJoin[i] + 0;
            } else {
                helpVariable = dataJoin[i] + dataJoin[i + 1];
            }
            finalResult = (helpVariable + finalResult);
        }

    } else {
        for (i = 0; i <= dataJoinLength; i = i + 2) {
            if (dataJoin[i + 1] == null) {
                helpVariable = dataJoin[i] + 0;
            } else {
                helpVariable = dataJoin[i] + dataJoin[i + 1];
            }
            finalResult = (helpVariable + finalResult);
        }
    }

    let result = (finalResult + imeiTestDigit) % 10;

    if ((finalResult % 10) == 0) {
        alert("IMEI is valid: " + imeiValue);
        return true;
    }
    else if (result == 0) {
        alert("IMEI is valid: " + imeiValue);
        return true;
    } else {
        alert("IMEI is not valid " + imeiValue);
        return false;
    }
}