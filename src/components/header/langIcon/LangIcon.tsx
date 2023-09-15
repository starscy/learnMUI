import React from "react";
import {Grid, Menu, MenuItem, SvgIcon, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const LangIcon = ({lang}) => {
    const langStyles = {
        'svg': {
            alignSelf: 'center',
        }
    }

    const fontStyles = {
        'text-transform': 'lowercase',
        '&:first-letter': {
            textTransform: 'uppercase'
        }
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Grid container sx={langStyles} columnSpacing={1}>
                    <SvgIcon>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1168_16674)">
                                <g clipPath="url(#clip1_1168_16674)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M-3.63623 -0.226562H23.6365V20.228H-3.63623V-0.226562Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M-3.63623 6.5918H23.6365V20.2282H-3.63623V6.5918Z" fill="#0039A6"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M-3.63623 13.4102H23.6365V20.2283H-3.63623V13.4102Z" fill="#D52B1E"/>
                                </g>
                            </g>
                            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#EAECF0"/>
                            <defs>
                                <clipPath id="clip0_1168_16674">
                                    <rect width="20" height="20" rx="10" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_1168_16674">
                                    <rect width="27.2727" height="20.4545" fill="white"
                                          transform="translate(-3.63623 -0.226562)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Grid item>
                        <Grid container>
                            <Typography component='p' color={'#677280'} fontSize={'14px'} lineHeight={'24px'} sx={fontStyles}
                                        fontWeight={400}>{lang}</Typography>
                            <SvgIcon fontSize={'16px'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="#212B36"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00002 10.6675C7.84425 10.6678 7.6933 10.6136 7.57335 10.5142L3.57335 7.18084C3.43721 7.06768 3.35159 6.90507 3.33534 6.72878C3.31909 6.5525 3.37353 6.37698 3.48669 6.24083C3.59985 6.10469 3.76245 6.01907 3.93874 6.00282C4.11502 5.98657 4.29054 6.04101 4.42669 6.15417L8.00002 9.14083L11.5734 6.26084C11.6415 6.20546 11.72 6.1641 11.8042 6.13915C11.8885 6.11419 11.9768 6.10613 12.0641 6.11542C12.1515 6.12472 12.2361 6.15118 12.3132 6.1933C12.3903 6.23541 12.4583 6.29235 12.5134 6.36083C12.5744 6.42938 12.6206 6.5098 12.6492 6.59705C12.6777 6.6843 12.6879 6.7765 12.6791 6.86787C12.6704 6.95925 12.6428 7.04783 12.5983 7.12807C12.5537 7.20831 12.493 7.27847 12.42 7.33417L8.42002 10.5542C8.29663 10.6378 8.14876 10.6777 8.00002 10.6675Z"
                                        fill="#212B36"/>
                                </svg>
                            </SvgIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Россия</MenuItem>
                <MenuItem onClick={handleClose}>Беларусь</MenuItem>
                <MenuItem onClick={handleClose}>Казахстан</MenuItem>
            </Menu>
        </>
    );
}

export default LangIcon;

LangIcon.propTypes = {
    lang: PropTypes.string
}