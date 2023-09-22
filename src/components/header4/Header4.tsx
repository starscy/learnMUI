import PropTypes from 'prop-types';
// @mui
import {styled} from '@mui/material/styles';
import {Box, Stack, AppBar, Toolbar, IconButton} from '@mui/material';
// utils
import { bgBlur } from '../../utils/cssStyles';
// components
import Iconify from '../../components/iconify';
//
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover/LanguagePopover';
import PhoneMenu from './PhoneMenu/PhoneMenu';
import Shedule from './Shedule/Shedule';
import TrackDelivery from './TrackDelivery/TrackDelivery';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(Box)(({theme}) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
        width: `calc(100%}px)`,
    },
    backgroundColor: theme.palette.background.default
}));


const StyledToolbar = styled(Toolbar)(({theme}) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
        backgroundColor: theme.palette.background.default  //не работает
    },
}));

// ----------------------------------------------------------------------

Header4.propTypes = {
    onOpenNav: PropTypes.func,
};

export default function Header4({onOpenNav}) {
    return (
        <StyledRoot>
            <StyledToolbar>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{
                        xs: 0.5,
                        sm: 1,
                    }}
                    sx={{
                        width:'100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <LanguagePopover/>
                    <PhoneMenu phoneNumber={'+7(499)979-98-56'} city={'Москва'}/>
                    <PhoneMenu phoneNumber={'+7(812)209-18-80'} city={'Санкт-Петербург'}/>
                    <Shedule/>
                    <TrackDelivery children={'Отследить доставку'} color='warning'/>
                </Stack>
            </StyledToolbar>
        </StyledRoot>
    );
}
