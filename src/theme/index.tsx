// src/theme/index.tsx

'use client';

import React, {useMemo} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions} from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import customShadows from './customShadows';
import componentsOverrides from './overrides';


type Props = {
    children: React.ReactNode;
};

export default function ThemeProvider({children}: Props) {
    const baseOption = useMemo(
        () => ({
           // palette: palette('light'),
            palette: palette.primary,
            shadows: shadows('light'),
            customShadows: customShadows('light'),
            typography,
            shape: {borderRadius: 8},
        }),
        []
    );

    const theme = createTheme(baseOption as ThemeOptions);

    theme.components = componentsOverrides(theme);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>
    );
}