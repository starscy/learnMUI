// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Button} from '@mui/material';
import Header from  './components/header/Header.jsx'
// components
import Iconify from '../components/iconify';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function MyPage() {
    const theme = useTheme();

    return (
        <>
            <Header/>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    My test page
                </Typography>
                <Button variant='contained' size='large' onClick={()=>console.log('worked')}>girst button</Button>
            </Container>
        </>
    );
}
