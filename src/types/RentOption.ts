export type RentOption = {
    name: string,
    duration: number,
    original_price: number,
    discount_price: number,
    discount_percentage: string,
    type: 'COMMON' | 'ESPECIAL' | 'PREMIUM',
    description?: string
}