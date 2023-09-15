import {Box, Grid, SvgIcon, Typography} from "@mui/material";
import SheduleContent from "./SheduleContent.jsx";

const Shedule = () => {
    const shemuleStyles = {
        'svg': {
            alignSelf: 'center',
        }
    }

    return (
        <Grid container columnSpacing={2} sx={shemuleStyles}>
            <SvgIcon >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.4048 12C22.4048 17.52 17.9248 22 12.4048 22C6.88479 22 2.40479 17.52 2.40479 12C2.40479 6.48 6.88479 2 12.4048 2C17.9248 2 22.4048 6.48 22.4048 12Z"
                        stroke="#FF9E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M16.1147 15.1798L13.0147 13.3298C12.4747 13.0098 12.0347 12.2398 12.0347 11.6098V7.50977"
                        stroke="#FF9E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </SvgIcon>
            <SheduleContent/>
        </Grid>
    );
}

export default Shedule;