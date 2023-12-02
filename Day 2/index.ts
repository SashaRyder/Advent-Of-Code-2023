import { getPuzzleInput } from "../getPuzzleInput";
const input = await getPuzzleInput(import.meta.dir);

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

// Day 2 Puzzle 1
console.log(`Day 2 Puzzle 1: ${input.reduce((prev, curr, index) => {
    const split = curr.split(/[:,;]/).slice(1);
    const gameNotPossible = split.some((cubes) => {
        const [count, colour] = cubes.trim().split(" ");
        return +count > (colour === "red" ? MAX_RED : colour === "blue" ? MAX_BLUE : MAX_GREEN);
    });
    return gameNotPossible ? prev : prev += index + 1;    
}, 0)}`);

// Day 2 Puzzle 2

console.log(`Day 2 Puzzle 2: ${input.reduce((prev, curr, index) => {
    const split = curr.split(/[:,;]/).slice(1);
    const {red, green, blue} = split.reduce((previous, current) => {
        const [count, colour] = current.trim().split(" ");
        return { 
            red: colour === "red" && +count > previous.red ? +count : previous.red,
            green: colour === "green" && +count > previous.green ? +count : previous.green,
            blue: colour === "blue" && +count > previous.blue ? +count : previous.blue,
        }
    }, {red: 0, green: 0, blue: 0});
    return prev + (red * green * blue);
}, 0)}`);