import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from "../state/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
