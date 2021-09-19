export interface Cat {
    name: string;
    age: number;
    bloodType: BloodType
}

// export type BloodType = 'A' | 'B' | 'C' | 'D'
export enum BloodType { A = 'A', B = 'B', C = 'C', D = 'D' }