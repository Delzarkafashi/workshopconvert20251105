/*GRUNDLÄGGANDE*/
export function convert(celsius) {
return (celsius * (9/5)) + 32;
};

/*AVANCERAD*/
// export function convert(value, from, to) {
//     if(from === "C" && to === "F") {
//         return (value * (9/5)) + 32;
//     } else if(from === "F" && to === "C") {
//         return (value - 32) * (5/9);
//     } else if(from === to) {
//         return value;
//     } else {
//         return "Ogiltig enhetskombination";
//     }
// };