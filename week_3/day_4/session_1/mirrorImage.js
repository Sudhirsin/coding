



// WRITE A FUNCTION THAT ACCEPTS A STRING
// CREATE A VARIABLE THAT STORES INFORMATION OF ALL ALPHABETS IN CAPITAL AND SMALL LETTER
// INFO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// A will have an index of 26
// a will have an index of 0
// CREATE A EMPTY STRING OUTPUT
// FOR EVERY ELEMENT IN THE INPUT STRING:
//     IF INFO.INDEXOF(ELEMENT) IS VALID:
//         IF VALUE IS LESS THAN 26:
//             IF VALUE IS LESS THAN 13:
//                 OUTPUT += INFO[25 - VALUE]
//             ELSE:
//                 OUTPUT += INFO[12 - VALUE%13]
//         ELSE:
//             IF VALUE IS LESSER THAN 25+13:
//                 OUTPUT += INFO[51 - VALUE%26]
//             ELSE:
//                 OUTPUT += INFO[26 + VALUE%(26+13)]
// RETURN OUTPUT