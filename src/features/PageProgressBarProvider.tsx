'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

import { colors } from '../../tailwind.config'

export const PagesProgressBarProvider = () => {
  return <ProgressBar color={colors['sbm-primary']} height="4px" />
}
