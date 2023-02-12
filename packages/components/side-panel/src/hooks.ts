import { useContext } from 'react';
import { context } from './Provider';

export const useSidePanel = () => useContext(context);
