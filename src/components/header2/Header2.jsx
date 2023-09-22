import {AppBar, Toolbar} from "@mui/material";
import LanguagePopover from "./LanguagePopover/LanguagePopover";
import PhoneMenu from "./PhoneMenu/PhoneMenu";
import Shedule from "./Shedule/Shedule";
import TrackDelivery from "./TrackDelivery/TrackDelivery";
import Stack from "@mui/material/Stack";

const Header2 = () => {
    return (
        <AppBar position={"static"} sx={{backgroundColor: '#F9FAFB'}}>
            <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
                <LanguagePopover/>
                <Stack direction={'row'} sx={{width:'50%', display: 'flex', justifyContent: 'space-between' }}>
                    <PhoneMenu phoneNumber={'+7(499)979-98-56'} city={'Москва'}/>
                    <PhoneMenu phoneNumber={'+7(812)209-18-80'} city={'Санкт-Петербург'}/>
                    <Shedule/>
                </Stack>
                <TrackDelivery children={'Отследить доставку'}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header2;