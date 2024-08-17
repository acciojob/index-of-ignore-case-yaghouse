function indexOfIgnoreCase(str, subStr) {
    // convert both strings to lower case
    var lowerStr = str.toLowerCase();
    var lowerSubStr = subStr.toLowerCase();

    // use indexOf to find the first occurrence of subStr in str
    var index = lowerStr.indexOf(lowerSubStr);

    // return the index
    return index;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
