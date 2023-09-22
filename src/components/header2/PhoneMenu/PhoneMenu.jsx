import React from "react";
import {Grid, Menu, MenuItem, SvgIcon, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const PhoneMenu = ({city, phoneNumber}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    let open = Boolean(anchorEl);
    const handleMouseOver = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction="row">
            <SvgIcon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.375 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41-.48-1.14-.72-2.23-.72-3.27 0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67.64-.63 1.34-.94 2.08-.94.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78ZM18.905 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23m7 3.5c0-3.87-3.13-7-7-7"
                        stroke="#FF9E2D"/>
                </svg>
            </SvgIcon>
            <Stack>
                <Typography fontSize={12} lineHeight={'18px'} fontWeight={400} color={'#677280'}>{city}</Typography>
                <Typography fontSize={18} lineHeight={'28px'} fontWeight={700} color={'#212121'}>
                    {phoneNumber}
                    <KeyboardArrowDownIcon/>
                </Typography>
            </Stack>
        </Stack>
    );

            {/*<Grid item>*/}
            {/*    <Typography fontSize={12} lineHeight={'18px'} fontWeight={400} color={'#677280'}>{city}</Typography>*/}
            {/*    <Grid container*/}
            {/*          id="basic-button"*/}
            {/*          aria-controls={open ? 'basic-menu' : undefined}*/}
            {/*          aria-haspopup="true"*/}
            {/*          aria-expanded={open ? 'true' : undefined}*/}
            {/*          onClick={handleMouseOver}*/}
            {/*    >*/}
            {/*        <Typography fontSize={18} lineHeight={'28px'} fontWeight={700}>*/}
            {/*            {phoneNumber}*/}
            {/*        </Typography>*/}
            {/*        <SvgIcon>*/}
            {/*            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"*/}
            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
            {/*                <path*/}
            {/*                    d="M8.00002 10.6675C7.84425 10.6678 7.6933 10.6136 7.57335 10.5142L3.57335 7.18084C3.43721 7.06768 3.35159 6.90507 3.33534 6.72878C3.31909 6.5525 3.37353 6.37698 3.48669 6.24083C3.59985 6.10469 3.76245 6.01907 3.93874 6.00282C4.11502 5.98657 4.29054 6.04101 4.42669 6.15417L8.00002 9.14083L11.5734 6.26084C11.6415 6.20546 11.72 6.1641 11.8042 6.13915C11.8885 6.11419 11.9768 6.10613 12.0641 6.11542C12.1515 6.12472 12.2361 6.15118 12.3132 6.1933C12.3903 6.23541 12.4583 6.29235 12.5134 6.36083C12.5744 6.42938 12.6206 6.5098 12.6492 6.59705C12.6777 6.6843 12.6879 6.7765 12.6791 6.86787C12.6704 6.95925 12.6428 7.04783 12.5983 7.12807C12.5537 7.20831 12.493 7.27847 12.42 7.33417L8.42002 10.5542C8.29663 10.6378 8.14876 10.6777 8.00002 10.6675Z"*/}
            {/*                    fill="#212B36"/>*/}
            {/*            </svg>*/}
            {/*        </SvgIcon>*/}
            {/*    </Grid>*/}
            {/*    <Menu*/}
            {/*        id="basic-menu"*/}
            {/*        anchorEl={anchorEl}*/}
            {/*        open={open}*/}
            {/*        onClose={handleClose}*/}
            {/*        MenuListProps={{*/}
            {/*            'aria-labelledby': 'basic-button',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <MenuItem onClick={handleClose}>*/}
            {/*            <Phone phoneNumber={'+7(499)979-98-56'}/>*/}
            {/*        </MenuItem>*/}
            {/*        <MenuItem onClick={handleClose}><Phone phoneNumber={'+7(499)979-98-56'}/></MenuItem>*/}
            {/*        <MenuItem onClick={handleClose}><Phone phoneNumber={'+7(499)979-98-56'}/></MenuItem>*/}
            {/*    </Menu>*/}
            {/*</Grid>*/}
}

export default PhoneMenu;

