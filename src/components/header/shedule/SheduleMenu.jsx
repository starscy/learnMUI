import {Grid, SvgIcon, Typography} from "@mui/material";
import React from "react";

const SheduleContent = () => {
    const svgStyle = {
        alignSelf: 'center'
    }

    const shemuleStyles = {
        '&>svg': {
            alignSelf: 'center'
        }
    }
    return (
        <>
            <Grid container columnSpacing={1} sx={shemuleStyles}>
                <SvgIcon>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.4048 12C22.4048 17.52 17.9248 22 12.4048 22C6.88479 22 2.40479 17.52 2.40479 12C2.40479 6.48 6.88479 2 12.4048 2C17.9248 2 22.4048 6.48 22.4048 12Z"
                            stroke="#FF9E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M16.1147 15.1798L13.0147 13.3298C12.4747 13.0098 12.0347 12.2398 12.0347 11.6098V7.50977"
                            stroke="#FF9E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SvgIcon>
                <Grid item>
                    <Typography variant='caption' component='p' fontWeight='400' lineHeight='18px' color={'#677280'}
                                fontSize='12px'>Сегодня</Typography>
                    <Grid container>
                        <Typography component='p' fontWeight='700' fontSize='18px' lineHeight='28px' color='#212B36'>8:00
                            -
                            22:00
                        </Typography>
                        <SvgIcon fontSize={'8px'} sx={svgStyle}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00002 10.6675C7.84425 10.6678 7.6933 10.6136 7.57335 10.5142L3.57335 7.18084C3.43721 7.06768 3.35159 6.90507 3.33534 6.72878C3.31909 6.5525 3.37353 6.37698 3.48669 6.24083C3.59985 6.10469 3.76245 6.01907 3.93874 6.00282C4.11502 5.98657 4.29054 6.04101 4.42669 6.15417L8.00002 9.14083L11.5734 6.26084C11.6415 6.20546 11.72 6.1641 11.8042 6.13915C11.8885 6.11419 11.9768 6.10613 12.0641 6.11542C12.1515 6.12472 12.2361 6.15118 12.3132 6.1933C12.3903 6.23541 12.4583 6.29235 12.5134 6.36083C12.5744 6.42938 12.6206 6.5098 12.6492 6.59705C12.6777 6.6843 12.6879 6.7765 12.6791 6.86787C12.6704 6.95925 12.6428 7.04783 12.5983 7.12807C12.5537 7.20831 12.493 7.27847 12.42 7.33417L8.42002 10.5542C8.29663 10.6378 8.14876 10.6777 8.00002 10.6675Z"
                                    fill="#212B36"/>
                            </svg>
                        </SvgIcon>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}

export default SheduleContent;