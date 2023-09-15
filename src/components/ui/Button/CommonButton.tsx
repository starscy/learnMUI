import Button from "@mui/material/Button";
import React from "react";
import { SxProps, Theme } from '@mui/material/styles';

type CommandButtonProps = {
    children?: React.ReactNode,
    color?: string,
    disabled?: boolean,
    size?: string,
    variant?: string,
    sx?: SxProps<Theme>;

}
const CommonButton = ({children, color, disabled, size, variant, sx}: CommandButtonProps) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
        >{children}</Button>
    );
}

export default CommonButton;