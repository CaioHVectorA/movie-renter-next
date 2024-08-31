export type RentOption = {
    name: string,
    duration: number,
    original_price: number,
    discount_price: number,
    base_discount_percentage: string,
    discount: number,
    type: 'COMMON' | 'ESPECIAL' | 'PREMIUM',
    description?: string
}