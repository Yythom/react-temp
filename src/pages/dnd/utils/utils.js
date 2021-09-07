function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
}

const replaceStr = (str, index, char) => {
    const strAry = str.split('');
    strAry[index] = char;
    return strAry.join('');
}

export {
    insertStr,
    replaceStr,
}