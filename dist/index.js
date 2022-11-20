"use strict";
// ===================================================================
// [Basic use of Union type]
// StringNumber type can contain both string and number
const StrObj = "abcdefghi";
const NumObj = 123456789;
// Either type is present in the output
console.log("StrObj type is " + typeof StrObj + " : " + StrObj);
console.log("NumObj type is " + typeof NumObj + " : " + NumObj);
console.log();
// Multiple types can be defined in Animal type
const tigerObj = {
    tigerSound: "Roar !"
};
const gorillaObj = {
    gorillaSound: "Ooh ooh !"
};
const crowObj = {
    crowSound: "Caw caw"
};
const pigObj = {
    pigSound: "Oink oink"
};
// Each value of type Animal contains a value of type
console.log("Tiger sound is " + tigerObj.tigerSound);
console.log("Gorilla sound is " + gorillaObj.gorillaSound);
console.log("Crow sound is " + crowObj.crowSound);
console.log("Pig sound is " + pigObj.pigSound);
console.log();
