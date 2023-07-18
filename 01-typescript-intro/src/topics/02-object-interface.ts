
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    homeTown?: string

}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.homeTown = 'Rivendell';

console.log(skills)
console.table(strider)

export {}