import fs from "fs/promises";

export const getPuzzleInput = async (path: string): Promise<string[]> => {
    const input = await fs.readFile(`${path}/input.txt`, {encoding: "utf8"});
    const lines = input.split(/\r?\n/);

    return lines;
}