import {Button, SvgIcon, Typography} from "@mui/material";
import { IconButton } from '@mui/material';
//import BoxDelivery from 'src/assets/svg/BoxDelivery';
import BoxDelivery from './BoxDeliverySVG';
import './TrackDelivery.scss';

const TrackDelivery = ({children, color}) => {

    return (
        <Button variant={'contained'} size={'medium'} startIcon={<BoxDelivery/>} color={color} className='trackDelivery'>{children}</Button>
    );
}

export default TrackDelivery;
