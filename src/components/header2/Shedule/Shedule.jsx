import {SvgIcon} from "@mui/material";
import Stack from "@mui/material/Stack";
import SheduleContent from "./SheduleContent";

const Shedule = () => {
    // const shemuleStyles = {
    //     'svg': {
    //         alignSelf: 'center',
    //     }
    // }

    return (
        <Stack direction="row">
            <SvgIcon >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.405 12c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10Z" stroke="#FF9E2D"/><path d="m16.115 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1" stroke="#FF9E2D"/></svg>
            </SvgIcon>
            <SheduleContent title={'Будни'} time={'8:00 - 22:00'}/>
            <SheduleContent title={'Выходные'} time={'9:00 - 21:00'}/>
        </Stack>
    );
}

export default Shedule;