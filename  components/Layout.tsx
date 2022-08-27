import React, { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import {
    Box, AppBar, Toolbar, Grid, useMediaQuery, IconButton,
    Drawer, Divider, Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {

    // 반응형 웹을 위한 변수
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    // 사이드바 팝업
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header */}
            <AppBar position='fixed'>
                <Toolbar sx={{ display: 'flex' }}>
                    {!isMobile ?
                        // 브라우저 크기 태블릿 이상
                        <>
                            {/* 홈, 로고 */}
                            <LeftMenu
                                isResponsive={isMobile}
                            />
                            {/* 메뉴 */}
                            <RightMenu
                                isResponsive={isMobile}
                            />
                        </>
                        // 브라우저 크기 태블릿 이하
                        :
                        <Grid container justifyContent='flex-end' alignItems='center'>
                            <IconButton color="secondary" aria-label="openDrawer" component="span" onClick={() => setOpenDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    }

                </Toolbar>
            </AppBar>
            {/* 태블릿 크기 이하일 때만 -> 메뉴 버튼 누를 경우 Drawer 표출 */}
            <Drawer
                anchor='left'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                {/* Drawer body - mobile 크기일때만 drawer close 버튼 표출 */}
                <Grid container alignItems='center'>
                    <Grid item md={8}>
                        <LeftMenu
                            isResponsive={isMobile}
                        />
                    </Grid>
                    <Grid item md={4}>
                        {isMobile &&
                            <IconButton
                                color="secondary"
                                aria-label="closeDrawer"
                                component="span"
                                onClick={() => setOpenDrawer(false)}
                                sx={{
                                    paddingRight: '15px'
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        }
                    </Grid>
                </Grid>
                <Divider />
                <RightMenu
                    isResponsive={isMobile}
                />
            </Drawer>
            {/* Body */}
            <Box component="main" sx={{ flexGrow: 1, minHeight: '650px' }}>
                <Toolbar />
                {children}
            </Box>
            {/* Footer */}
            <footer className={styles.footer}>
                <Typography>
                    경상북도 포항시 북구 흥해읍 한동로 558, 한동대학교 산학협력단 3층
                    <br /><br />
                    경북지역 풍력에너지 클러스터 인재양성사업단 / 054. 260. 1937
                </Typography>
            </footer>
        </Box>
    )
}

export default Layout