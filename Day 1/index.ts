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
    for(const [index, match] of matches.entries()) {
        while (curr.includes(match))  {
            const split = curr.split("");
            const indexMatch = curr.indexOf(match);
            curr = `${split.slice(0, indexMatch + 1).join("")}${index + 1}${split.slice(indexMatch + 2).join("")}`;
        }
    } 
    const numbers = curr.replaceAll(/\D/g, '');
    return prev += +(numbers[0] + numbers[numbers.length - 1])
}, 0)}`);