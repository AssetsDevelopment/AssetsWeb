import { useNavigate } from "react-router-dom";
import { FormEvent, MouseEvent, useState } from "react";
import { useAuthContext } from "../../modules/auth/context";

// Mui
import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Box, Badge, Menu } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NotificationBox from "./NotificationBox";
import UserConnected from "./UserConnected";

// Iconos
// import UserConnected from "./UserConnected";
// import NotificationBox from "./NotificationBox";

export const Navbar: React.FC<{ toggleOpen: () => void }> = ({ toggleOpen })=> {

    const { user, logout } = useAuthContext()

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    const handleMenu = (e: FormEvent<HTMLFormElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = () => {
        logout();
        navigate("/auth/login"); 
    };

    const handleNotificationsMenu = (e: MouseEvent<HTMLButtonElement>) => {
        setNotificationsAnchorEl(e.currentTarget);
    };

    const handleNotificationsClose = () => {
        setNotificationsAnchorEl(null);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppBar 
            position="fixed"
            sx={{ 
                width: { sm: `calc(100% - 240px)`},
                ml: { sm: `240px`},
                backgroundColor: (theme) => theme.palette.primary.main,
            }}
            >
            <Toolbar>
                <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                    <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    onClick={toggleOpen}
                    >
                    <MenuOutlined /> 
                    </IconButton>
                </Grid>
                <Grid item sx={{ flexGrow: 1 }} />
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Badge color="error" variant="dot" sx={{ mr: 2 }}>
                        <IconButton 
                            color='inherit' 
                            onClick={handleNotificationsMenu}
                        >
                        <NotificationsOutlined />
                        </IconButton>
                    </Badge>
                    <Menu
                        anchorEl={notificationsAnchorEl}
                        open={Boolean(notificationsAnchorEl)}
                        onClose={handleNotificationsClose}
                    >
                        <NotificationBox icon="1" />
                    </Menu>
                    {/* <Typography variant="p">{user.email}</Typography> */}
                    <UserConnected
                        anchorEl={anchorEl}
                        handleMenu={handleMenu}
                        handleClose={handleClose}
                        onLogout={onLogout}
                    />
                    </Box>
                </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
        </LocalizationProvider>
    );
};