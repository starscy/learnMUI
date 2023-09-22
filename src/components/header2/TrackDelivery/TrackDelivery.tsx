import {Button, SvgIcon, Typography} from "@mui/material";
import { IconButton } from '@mui/material';
//import BoxDelivery from 'src/assets/svg/BoxDelivery';
import BoxDelivery from '../BoxDeliverySVG';

const TrackDelivery = ({children}) => {

    return (
        <Button variant={'contained'} size={'medium'} startIcon={ <BoxDelivery/>}>{children}</Button>
    );
}

export default TrackDelivery;

