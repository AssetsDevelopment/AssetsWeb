import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Navbar, SideBar } from "../../app/common/components/index"

const drawerWidth = 240;

export const HomeLayout = ({ children } : any /* Cambiar */) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

      <SideBar drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component='main'
        sx={{ 
          flexGrow: 1, 
          p: isMobile ? 0 : 3 
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};