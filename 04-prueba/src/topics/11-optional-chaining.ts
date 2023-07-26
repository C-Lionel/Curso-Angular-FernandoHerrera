
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}
const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = ( passenger: Passenger ): number => {
   
    if (!passenger.children) return 0;

    const howManyChildren = passenger.children!.length; //todo: el ! significa que le estas diciendo a typescript, confia en mi nunca vas a recibir un nulo
    console.log(passenger.name, howManyChildren);
    return howManyChildren;

}

printChildren(  passenger1 )