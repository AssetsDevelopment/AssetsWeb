import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Box, Badge, Menu, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import UserConnected from "./UserConnected";
import NotificationBox from "./NotificationBox";

export const Navbar = ({ drawerWidth = 240, handleDrawerToggle }) => {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    logout();
    navigate("/auth/login"); 
  };

  const handleNotificationsMenu = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppBar 
        position="fixed"
        sx={{ 
          width: { sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px`},
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
                onClick={handleDrawerToggle}
              >
                <MenuOutlined /> 
              </IconButton>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} />
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Badge color="error" variant="dot" sx={{ mr: 2 }}>
                  <IconButton color='inherit' onClick={handleNotificationsMenu}>
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
                <Typography variant="p">{user?.email}</Typography>
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