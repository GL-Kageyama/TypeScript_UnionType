# TypeScript UnionType
## UnionType
Union type is a type that can be expressed as type A or type B.  
Can be used for multiple types.  

## Code
```TypeScript
// ===================================================================
// [Basic use of Union type]

// Defined by Union type
type StringNumber = string | number;

// StringNumber type can contain both string and number
const StrObj: StringNumber = "abcdefghi";
const NumObj: StringNumber = 123456789;

// Either type is present in the output
console.log("StrObj type is " + typeof StrObj + " : " + StrObj);
console.log("NumObj type is "+typeof NumObj + " : " + NumObj);
console.log();

// ===================================================================
// [Union multiple types with type Union]

// Define multiple types
type Tiger = {
    tigerSound: string;
};
type Gorilla = {
    gorillaSound: string;
};
type Crow = {
    crowSound: string;
};
type Pig = {
    pigSound: string;
};

// Group multiple types together in a Union type as type Animal
type Animal = Tiger | Gorilla | Crow | Pig;

// Multiple types can be defined in Animal type
const tigerObj: Animal = {
    tigerSound: "Roar !"
};
const gorillaObj: Animal = {
    gorillaSound: "Ooh ooh !"
};
const crowObj: Animal = {
    crowSound: "Caw caw"
};
const pigObj: Animal = {
    pigSound: "Oink oink"
};

// Each value of type Animal contains a value of type
console.log("Tiger sound is " + tigerObj.tigerSound);
console.log("Gorilla sound is " + gorillaObj.gorillaSound);
console.log("Crow sound is " + crowObj.crowSound);
console.log("Pig sound is " + pigObj.pigSound);
console.log();
```

## Output Sample
$ npx tsc  
$ node dist/index.js  
StrObj type is string : abcdefghi  
NumObj type is number : 123456789  

Tiger sound is Roar !  
Gorilla sound is Ooh ooh !  
Crow sound is Caw caw  
Pig sound is Oink oink  

## Node.js
Install Node.js to compile & run TypeScript.  

https://nodejs.org/en/  
 note : The stable, even version is recommended.  

Version Check  
$ node -v  
