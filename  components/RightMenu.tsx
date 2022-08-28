import { useState, useRef } from 'react'
import { Box, Stack, Divider, Typography, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import customStyled from './Layout.module.css'

interface rightMenuProps {
    isResponsive: boolean
}

const RightMenu = (props: rightMenuProps) => {

    const router = useRouter()

    const [openParticipantsMenu, setOpenParticipantsMenu] = useState(false);
    const [openAchievementsMenu, setOpenAchievementsMenu] = useState(false);
    const [openComminityMenu, setOpenComminityMenu] = useState(false);
    const participantsMenuRef = useRef<HTMLButtonElement>(null);
    const achievementsMenuRef = useRef<HTMLButtonElement>(null);
    const communityMenuRef = useRef<HTMLButtonElement>(null);
    const handleParticipantsMenuToggle = () => {
        setOpenParticipantsMenu((prevOpen) => !prevOpen);
    };
    const handleAchievementsMenuToggle = () => {
        setOpenAchievementsMenu((prevOpen) => !prevOpen);
    };
    const handleComminityMenuToggle = () => {
        setOpenComminityMenu((prevOpen) => !prevOpen);
    };
    const handleParticipantsMenuClose = (event: Event | React.SyntheticEvent, moveTo?: string) => {
        if (
            participantsMenuRef.current &&
            participantsMenuRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        if (moveTo) {
            router.push(moveTo)
        }
        setOpenParticipantsMenu(false);
    };
    const handleAchievementsMenuRefMenuClose = (event: Event | React.SyntheticEvent) => {
        if (
            participantsMenuRef.current &&
            participantsMenuRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpenAchievementsMenu(false);
    };
    const handleCommunityMenuRefMenuClose = (event: Event | React.SyntheticEvent) => {
        if (
            participantsMenuRef.current &&
            participantsMenuRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpenComminityMenu(false);
    };
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenParticipantsMenu(false);
            setOpenAchievementsMenu(false);
            setOpenComminityMenu(false);
        } else if (event.key === 'Escape') {
            setOpenParticipantsMenu(false);
            setOpenAchievementsMenu(false);
            setOpenComminityMenu(false);
        }
    }

    return (
        <Box sx={{ marginTop: !props.isResponsive ? "0px" : "20px" }}>
            <Stack
                direction={!props.isResponsive ? "row" : "column"}
                spacing={3}
                className={customStyled.link}
                divider={<Divider orientation={!props.isResponsive ? "vertical" : "horizontal"} flexItem
                />}
            >
                {/* -------------------------------참여인력 메뉴------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={participantsMenuRef}
                        id="composition-button"
                        aria-controls={openParticipantsMenu ? 'composition-menu' : undefined}
                        aria-expanded={openParticipantsMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleParticipantsMenuToggle}
                    >
                        <Typography>참여인력</Typography>
                    </Button>
                    <Popper
                        open={openParticipantsMenu}
                        anchorEl={participantsMenuRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        sx={{
                            width: props.isResponsive ? "300px": "120px",
                            zIndex: "100"
                        }}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleParticipantsMenuClose}>
                                        <MenuList
                                            autoFocusItem={openParticipantsMenu}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={(event) => handleParticipantsMenuClose(event, '/participants/professor')}>참여교수</MenuItem>
                                            <MenuItem onClick={(event) => handleParticipantsMenuClose(event, '/participants/researcher')}>참여연구원</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>

                {/* -------------------------------교과과정 메뉴------------------------------- */}
                <Button onClick={() => router.push('/curriculum')}><Typography>교과과정</Typography></Button>

                {/* -------------------------------산학협력 메뉴------------------------------- */}
                <Button><Typography>산학협력</Typography></Button>

                {/* -------------------------------사업성과 메뉴------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={achievementsMenuRef}
                        id="composition-button"
                        aria-controls={openAchievementsMenu ? 'composition-menu' : undefined}
                        aria-expanded={openAchievementsMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleAchievementsMenuToggle}
                    >
                        <Typography>사업성과</Typography>
                    </Button>
                    <Popper
                        open={openAchievementsMenu}
                        anchorEl={achievementsMenuRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        sx={{
                            width: props.isResponsive ? "300px": "120px",
                            zIndex: "100"
                        }}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleAchievementsMenuRefMenuClose}>
                                        <MenuList
                                            autoFocusItem={openAchievementsMenu}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleAchievementsMenuRefMenuClose}>학회활동</MenuItem>
                                            <MenuItem onClick={handleAchievementsMenuRefMenuClose}>논문</MenuItem>
                                            <MenuItem onClick={handleAchievementsMenuRefMenuClose}>특허</MenuItem>
                                            <MenuItem onClick={handleAchievementsMenuRefMenuClose}>비교과프로그램</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>

                {/* -------------------------------커뮤니티 메뉴------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={communityMenuRef}
                        id="composition-button"
                        aria-controls={openComminityMenu ? 'composition-menu' : undefined}
                        aria-expanded={openComminityMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleComminityMenuToggle}
                    >
                        <Typography>커뮤니티</Typography>
                    </Button>
                    <Popper
                        open={openComminityMenu}
                        anchorEl={communityMenuRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        sx={{
                            width: props.isResponsive ? "300px": "120px",
                            zIndex: "100"
                        }}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleCommunityMenuRefMenuClose}>
                                        <MenuList
                                            autoFocusItem={openComminityMenu}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleCommunityMenuRefMenuClose}>자료실</MenuItem>
                                            <MenuItem onClick={handleCommunityMenuRefMenuClose}>공지사항</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>
        </Box>

    )
}

export default RightMenu