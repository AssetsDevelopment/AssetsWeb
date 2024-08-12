import { createContext } from 'react';
import { AuthContextProps } from '../../modules/auth/interface/auth-state.interface';

export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export interface SnackbarContextType {
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

// export const SnackbarContext = createContext<SnackbarContextType | null>(null);
// export const SnackbarContext = createContext<SnackbarContextType>({} as SnackbarContextType);
export const SnackbarContext = createContext<AuthContextProps | null>(null);

