import styles from './Header.module.scss';
import {Grid} from "@mui/material";
import Shedule from "./shedule/Shedule";
import CommonPhone from "./Phones/CommonPhone";
import LangIcon from "./langIcon/LangIcon";
import TrackDeliveryBtn from "./trackDeliveryBtn/TrackDeliveryBtn";
// import CommonMenu from "../ui/Menu/CommonMenu";
// import PhoneMenu from "./PhoneMenu/PhoneMenu";

const Header1 = () => {

    return (
        <Grid container className={styles.header}>
            <Grid item>
                <LangIcon lang={'Россия'}/>
            </Grid>
            <Grid item>
                <CommonPhone city={'Москва'} phoneNumber={'+7(499)979-98-56'}/>
            </Grid>
            <Grid item>
                <CommonPhone city={'Санкт-Петербург'} phoneNumber={'+7(812)209-18-80'}/>
            </Grid>
            <Grid item>
                <Shedule/>
            </Grid>
            <Grid item>
                <TrackDeliveryBtn children={'Отследить доставку'}/>
            </Grid>
        </Grid>
    );
}

export default Header1;