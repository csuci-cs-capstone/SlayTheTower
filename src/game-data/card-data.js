import { usePlayer, setHealth } from '../ducks/player';

export const cards = [
    {
        name: 'slash',
        art: 'art url',
        type: 'attack',
        energy: 1,
        exhaust: false,
        action: {
            target: ['foe'],
            effect: ['damage'],
            power: [5]
        },
        description: "Slash target foe, deal 5 damage.",
        card_id: 0
        
    },
    {   
        name: 'guard',
        art: 'art url',
        type: 'defend',
        energy: 1,
        exhaust: false,
        action: {
            target: ['hero'],
            effect: ['armor'],
            power: [5]
        },
        description: "Gear up, gain 5 armor.",
        card_id: 1
    },
    {   
        name: 'heal',
        art: 'art url',
        type: 'skill',
        energy: 2,
        exhaust: true,
        action: {
            target: ['hero'],
            effect: ['heal'],
            power: [8]
        },
        description: "Heal self for 8 health",
        card_id: 2
    },
];