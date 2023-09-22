import {Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

const SheduleContent = ({title, time}) => {
    return (
            <Stack>
                    <Typography variant='caption' component='p' fontWeight='400' lineHeight='18px' color={'#677280'}
                                fontSize='12px'>{title}</Typography>
                    <Typography component='p' fontWeight='700' fontSize='18px' lineHeight='28px' color='#212B36'>{time}</Typography>
            </Stack>
    );
}

export default SheduleContent;