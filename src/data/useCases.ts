export const useCaseKeys = ['retail', 'warehouses', 'manufacturing', 'construction', 'hospitality'] as const

export type UseCaseKey = (typeof useCaseKeys)[number]
