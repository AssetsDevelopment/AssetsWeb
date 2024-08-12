import React, { useState, useContext, useCallback, ReactNode } from 'react';
import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
import { SnackbarContext, SnackbarSeverity, SnackbarContextType } from './SnackbarContext';


// interface SnackbarProviderProps {
//   children: ReactNode;
// }

// interface SnackbarState {
//   open: boolean;
//   message: string;
//   severity: SnackbarSeverity;
// }

export const SnackbarProvider = ({ children }: {children: ReactNode}): JSX.Element => {
export const AuthProvider = ({ children }: {children: ReactNode}): JSX.Element => {
  
    // Este estado es el que controla si el snackbar se muestra o no
    // const [snackbar, setSnackbar] = useState<SnackbarState>({
    //     open: false,
    //     message: '',
    //     severity: 'error',
    // });

    // Este llamado se hace desde cualquier componente que quiera mostrar un snackbar
    // const showSnackbar = useCallback((message: string, severity: SnackbarSeverity = 'error') => {
    //     setSnackbar({ open: true, message, severity });
    // }, []);


    // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') return;
    //     setSnackbar((prev) => ({ ...prev, open: false }));
    // };

    
    return (
        <SnackbarContext.Provider>
        {children}
        </SnackbarContext.Provider>
    );
 
};

// export const useSnackbar = (): SnackbarContextType => {
//   const context = useContext(SnackbarContext);
//   if (!context) {
//     throw new Error('useSnackbar must be used within a SnackbarProvider');
//   }
//   return context;
};
