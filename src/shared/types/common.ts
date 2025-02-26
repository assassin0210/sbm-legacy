import { variants, variantsV2 } from '@/shared/cvaConfigs/buttonConfig'

export type IButtonVariant = keyof typeof variants
export type IButtonVariantV2 = keyof typeof variantsV2

export type TButtonSize = 'small' | 'medium'
