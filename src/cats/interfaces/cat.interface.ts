export interface Cat {
    name: string;
    age: number;
    bloodType: BloodType
}

type BloodType = 'A' | 'B' | 'C' | 'D'