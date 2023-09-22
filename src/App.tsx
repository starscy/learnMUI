import Header1 from './components/header/Header'
import Header2 from './components/header2/Header2'
import Header from './components/header3';
import {Box, colors} from '@mui/material'
import {useState} from "react";
// import ThemeProvider from 'src/theme';
import ThemeProvider from './theme';
import Header4 from "./components/header4/Header4";

export default function MyPage() {
    // const theme = createTheme({
    //     palette: {
    //         secondary: {
    //             main: colors.orange[500],
    //         }
    //     }
    // })

    const [open, setOpen] = useState(false);

    return (
        <>
            <ThemeProvider>
                <Box
                    sx={{
                        height: '20px',
                        width: '300px',
                        bgcolor: 'secondary.main'
                    }}
                ></Box>
                <Header4 onOpenNav={() => setOpen(true)}/>
                <Box
                    sx={{
                        height: '20px',
                        width: '300px',
                        bgcolor: 'secondary.light'
                    }}
                ></Box>
                <Header2/>
                <Box
                    sx={{
                        height: '20px',
                        width: '300px',
                        bgcolor: 'warning.main'
                    }}
                ></Box>
                <Header1 />
                <Box
                    sx={{
                        height: '20px',
                        width: '300px',
                        bgcolor: 'warning.light'
                    }}
                ></Box>
            </ThemeProvider>
        </>
    );
}
