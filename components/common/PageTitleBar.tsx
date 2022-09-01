import React, { FC } from 'react'
import { Box, AppBar, Toolbar, Typography, SvgIcon, Divider } from '@mui/material'

interface PageTitleBarProps {
    title: string,
    icon: React.ElementType
}

const PageTitleBar: FC<React.PropsWithChildren<PageTitleBarProps>> = (props) => {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '30px' }}>
            <AppBar position="static">
                <Toolbar>
                    <SvgIcon
                        component={props.icon}
                        sx={{ mr: 2, width: '40px' }}
                    >
                    </SvgIcon>
                    <Box sx={{
                        borderLeft: "2px solid white",
                        paddingLeft: "20px"
                    }}>
                        <Typography variant="h6" component="div" sx={{ color: "white" }}>
                            {props.title}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default PageTitleBar