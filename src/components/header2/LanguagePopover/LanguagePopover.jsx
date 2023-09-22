import React, { useState } from 'react';
import {Box, MenuItem, Stack, IconButton, Popover, Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// ----------------------------------------------------------------------

const LANGS = [
    {
        value: 'ru',
        label: 'Россия',
        icon: '/src/assets/langsIcons/rus.svg',
    },
    {
        value: 'be',
        label: 'Беларусь',
        icon: '/src/assets/langsIcons/rus.svg',
    },
    {
        value: 'kz',
        label: 'Казахстан',
        icon: '/src/assets/langsIcons/rus.svg',
    },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>

            <IconButton
                onClick={handleOpen}
                // sx={{
                //     padding: 0,
                //     width: 100,
                //     height: 44,
                //     ...(open && {
                //         bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                //     }),
                // }}
            >
                <img src={LANGS[0].icon} alt={LANGS[0].label}/>
                <Typography component='p' color={'#677280'} fontSize={'14px'} lineHeight={'24px'} marginLeft={'10px'}
                            fontWeight={400}>{LANGS[0].label}</Typography>
                <KeyboardArrowDownIcon/>

            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                // PaperProps={{
                //     sx: {
                //         p: 1,
                //         mt: 1.5,
                //         ml: 0.75,
                //         width: 180,
                //         '& .MuiMenuItem-root': {
                //             px: 1,
                //             typography: 'body2',
                //             borderRadius: 0.75,
                //         },
                //     },
                // }}
            >
                <Stack spacing={0.75}>
                    {LANGS.map((option) => (
                        <MenuItem key={option.value} selected={option.value === LANGS[0].value} onClick={() => handleClose()}>
                            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </Popover>
        </>
    );
}
