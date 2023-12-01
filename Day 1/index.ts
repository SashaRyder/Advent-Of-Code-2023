import { getPuzzleInput } from "../getPuzzleInput";
const input = await getPuzzleInput(import.meta.dir);

// Day 1 Puzzle 1

console.log(`Day 1 Puzzle 1: ${input.reduce((prev, curr) => {
    const numbers = curr.replaceAll(/\D/g, '');
    return prev += +(numbers[0] + numbers[numbers.length - 1])
}, 0)}`);

// Day 1 Puzzle 2

const matches = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

console.log(`Day 1 Puzzle 2: ${input.reduce((prev, curr) => {
    for(let match of matches) {
        const matchNumberStr =  `${matches.indexOf(match) + 1}`;
        while (curr.includes(match))  {
            let split = curr.split("");
            let indexMatch = curr.indexOf(match);
            const a = `${split.slice(0, indexMatch + 1).join("")}${matchNumberStr}${split.slice(indexMatch + 2).join("")}`;
            curr = a;
        }
    } 
    const numbers = curr.replaceAll(/\D/g, '');
    return prev += +(numbers[0] + numbers[numbers.length - 1])
}, 0)}`);