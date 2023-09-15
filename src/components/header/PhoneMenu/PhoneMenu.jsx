import React from "react";
import {Grid, Menu, MenuItem, SvgIcon, Typography} from "@mui/material";
import CommonMenu from "../../ui/Menu/CommonMenu";

const PhoneMenu = ({city, phoneNumber}) => {
    const phonesStyles = {
        'svg:first-child': {
            alignSelf: 'center',
            paddingTop: '10px'
        }
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    let open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container sx={phonesStyles} spacing={2}>
            <SvgIcon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.3748 18.33C22.3748 18.69 22.2948 19.06 22.1248 19.42C21.9548 19.78 21.7348 20.12 21.4448 20.44C20.9548 20.98 20.4148 21.37 19.8048 21.62C19.2048 21.87 18.5548 22 17.8548 22C16.8348 22 15.7448 21.76 14.5948 21.27C13.4448 20.78 12.2948 20.12 11.1548 19.29C10.0048 18.45 8.91478 17.52 7.87478 16.49C6.84478 15.45 5.91478 14.36 5.08478 13.22C4.26478 12.08 3.60479 10.94 3.12479 9.81C2.64479 8.67 2.40479 7.58 2.40479 6.54C2.40479 5.86 2.52479 5.21 2.76479 4.61C3.00479 4 3.38479 3.44 3.91479 2.94C4.55479 2.31 5.25479 2 5.99479 2C6.27479 2 6.55479 2.06 6.80479 2.18C7.06479 2.3 7.29479 2.48 7.47479 2.74L9.79479 6.01C9.97479 6.26 10.1048 6.49 10.1948 6.71C10.2848 6.92 10.3348 7.13 10.3348 7.32C10.3348 7.56 10.2648 7.8 10.1248 8.03C9.99479 8.26 9.80478 8.5 9.56479 8.74L8.80478 9.53C8.69478 9.64 8.64478 9.77 8.64478 9.93C8.64478 10.01 8.65479 10.08 8.67479 10.16C8.70479 10.24 8.73479 10.3 8.75479 10.36C8.93479 10.69 9.24478 11.12 9.68478 11.64C10.1348 12.16 10.6148 12.69 11.1348 13.22C11.6748 13.75 12.1948 14.24 12.7248 14.69C13.2448 15.13 13.6748 15.43 14.0148 15.61C14.0648 15.63 14.1248 15.66 14.1948 15.69C14.2748 15.72 14.3548 15.73 14.4448 15.73C14.6148 15.73 14.7448 15.67 14.8548 15.56L15.6148 14.81C15.8648 14.56 16.1048 14.37 16.3348 14.25C16.5648 14.11 16.7948 14.04 17.0448 14.04C17.2348 14.04 17.4348 14.08 17.6548 14.17C17.8748 14.26 18.1048 14.39 18.3548 14.56L21.6648 16.91C21.9248 17.09 22.1048 17.3 22.2148 17.55C22.3148 17.8 22.3748 18.05 22.3748 18.33Z"
                        stroke="#FF9E2D" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M18.9048 9C18.9048 8.4 18.4348 7.48 17.7348 6.73C17.0948 6.04 16.2448 5.5 15.4048 5.5"
                          stroke="#FF9E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.4048 9C22.4048 5.13 19.2748 2 15.4048 2" stroke="#FF9E2D" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </SvgIcon>
            <Grid item>
                <Typography fontSize={12} lineHeight={'18px'} fontWeight={400} color={'#677280'}>{city}</Typography>
                <Grid container
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                >
                    <Typography fontSize={18} lineHeight={'28px'} fontWeight={700}>
                        {phoneNumber}
                    </Typography>
                    <SvgIcon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.00002 10.6675C7.84425 10.6678 7.6933 10.6136 7.57335 10.5142L3.57335 7.18084C3.43721 7.06768 3.35159 6.90507 3.33534 6.72878C3.31909 6.5525 3.37353 6.37698 3.48669 6.24083C3.59985 6.10469 3.76245 6.01907 3.93874 6.00282C4.11502 5.98657 4.29054 6.04101 4.42669 6.15417L8.00002 9.14083L11.5734 6.26084C11.6415 6.20546 11.72 6.1641 11.8042 6.13915C11.8885 6.11419 11.9768 6.10613 12.0641 6.11542C12.1515 6.12472 12.2361 6.15118 12.3132 6.1933C12.3903 6.23541 12.4583 6.29235 12.5134 6.36083C12.5744 6.42938 12.6206 6.5098 12.6492 6.59705C12.6777 6.6843 12.6879 6.7765 12.6791 6.86787C12.6704 6.95925 12.6428 7.04783 12.5983 7.12807C12.5537 7.20831 12.493 7.27847 12.42 7.33417L8.42002 10.5542C8.29663 10.6378 8.14876 10.6777 8.00002 10.6675Z"
                                fill="#212B36"/>
                        </svg>
                    </SvgIcon>
                </Grid>
                <CommonMenu open={open} handleClose={handleClose} handleClick={handleClick} anchorEl={anchorEl}/>
            </Grid>
        </Grid>
    );
}

export default PhoneMenu;

