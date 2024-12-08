import { useSelector } from 'react-redux'
import type { AppState } from '@/shared/store'

export const useAppState = useSelector.withTypes<AppState>()