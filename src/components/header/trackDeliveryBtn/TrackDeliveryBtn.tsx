
import {SvgIcon, Typography} from "@mui/material";
import CommonButton from "../../ui/Button/CommonButton";

const TrackDeliveryBtn = ({children}) => {
    const buttonStyles = {
        height: '36px',
        backgroundColor: '#FF9E2D',
        borderRadius: '8px',
        textTransform: 'lowercase',
        '&:hover': {
          backgroundColor: '#FD7165'
        },
        '&>p': {
            paddingTop: '5px',
        },
        '&>p:first-letter': {
            textTransform: 'uppercase'
        }
    }

    return (
            <CommonButton variant='contained' size='large' sx={buttonStyles} >
                <SvgIcon>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.45166 6.19922L10.81 10.4575L18.1183 6.22419" stroke="#1D2939"
                              strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.8101 18.0076V10.4492" stroke="#1D2939" strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M18.8184 10.691V7.64102C18.8184 6.49102 17.9934 5.09103 16.9851 4.5327L12.5351 2.06602C11.5851 1.53268 10.0351 1.53268 9.08507 2.06602L4.63508 4.5327C3.62674 5.09103 2.80176 6.49102 2.80176 7.64102V12.3577C2.80176 13.5077 3.62674 14.9077 4.63508 15.466L9.08507 17.9327C9.56007 18.1994 10.1851 18.3327 10.8101 18.3327C11.4351 18.3327 12.0601 18.1994 12.5351 17.9327"
                            stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M16.8102 17.8334C18.283 17.8334 19.4769 16.6394 19.4769 15.1667C19.4769 13.6939 18.283 12.5 16.8102 12.5C15.3375 12.5 14.1436 13.6939 14.1436 15.1667C14.1436 16.6394 15.3375 17.8334 16.8102 17.8334Z"
                            stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.9769 18.3333L19.1436 17.5" stroke="#1D2939" strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </SvgIcon>
                <Typography variant='subtitle2' component='p' color='#000'>{children}</Typography>
            </CommonButton>
    );
}

export default TrackDeliveryBtn;

