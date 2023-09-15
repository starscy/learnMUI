// src/app/layout

import ThemeProvider from 'src/theme';

return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider>{children}</ThemeProvider>
    </body>
    </html>
);