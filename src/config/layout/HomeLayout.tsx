import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Navbar, SideBar } from "../../app/common/components/index"

export const HomeLayout = ({ children } : any /* Cambiar */) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    return (

        <Box sx={{ display: 'flex' }}>

            <Navbar handleOpenSidebar={handleOpenSidebar} />

            <SideBar openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar} />

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