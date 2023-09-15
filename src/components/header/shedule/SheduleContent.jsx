import {Box, Grid, SvgIcon, Typography} from "@mui/material";

const SheduleContent = () => {

    return (
        <>
            <Grid item>
                <Box>
                    <Typography variant='caption' component='p' fontWeight='400' lineHeight='18px' color={'#677280'}
                                fontSize='12px'>Будни</Typography>
                    <Typography component='p' fontWeight='700' fontSize='18px' lineHeight='28px' color='#212B36'>8:00 -
                        22:00</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <Typography variant='caption' component='p' fontWeight='400' lineHeight='18px' color={'#677280'}
                                fontSize='12px'>Выходные</Typography>
                    <Typography component='p' fontWeight='700' fontSize='18px' lineHeight='28px' color='#212B36'>9:00 -
                        21:00</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default SheduleContent;