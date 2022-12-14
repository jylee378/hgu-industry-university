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
    const handleAchievementsMenuRefMenuClose = (event: Event | React.SyntheticEvent, moveTo?: string) => {
        if (
            participantsMenuRef.current &&
            participantsMenuRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        if (moveTo) {
            router.push(moveTo)
        }
        setOpenAchievementsMenu(false);
    };
    const handleCommunityMenuRefMenuClose = (event: Event | React.SyntheticEvent, moveTo?: string) => {
        if (
            participantsMenuRef.current &&
            participantsMenuRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        if (moveTo) {
            router.push(moveTo)
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
                {/* -------------------------------???????????? ??????------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={participantsMenuRef}
                        id="composition-button"
                        aria-controls={openParticipantsMenu ? 'composition-menu' : undefined}
                        aria-expanded={openParticipantsMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleParticipantsMenuToggle}
                    >
                        <Typography>????????????</Typography>
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
                                            <MenuItem onClick={(event) => handleParticipantsMenuClose(event, '/participants/professor')}>????????????</MenuItem>
                                            <MenuItem onClick={(event) => handleParticipantsMenuClose(event, '/participants/researcher')}>???????????????</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>

                {/* -------------------------------???????????? ??????------------------------------- */}
                <Button onClick={() => router.push('/curriculum')}><Typography>????????????</Typography></Button>

                {/* -------------------------------???????????? ??????------------------------------- */}
                <Button onClick={() => router.push('/industry-university')}><Typography>????????????</Typography></Button>

                {/* -------------------------------???????????? ??????------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={achievementsMenuRef}
                        id="composition-button"
                        aria-controls={openAchievementsMenu ? 'composition-menu' : undefined}
                        aria-expanded={openAchievementsMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleAchievementsMenuToggle}
                    >
                        <Typography>????????????</Typography>
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
                                            <MenuItem onClick={(event) => handleAchievementsMenuRefMenuClose(event, '/achievements/academic')}>????????????</MenuItem>
                                            <MenuItem onClick={(event) => handleAchievementsMenuRefMenuClose(event, '/achievements/paper')}>??????</MenuItem>
                                            <MenuItem onClick={(event) => handleAchievementsMenuRefMenuClose(event, '/achievements/patent')}>??????</MenuItem>
                                            <MenuItem onClick={(event) => handleAchievementsMenuRefMenuClose(event, '/achievements/non-discipline')}>?????????????????????</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>

                {/* -------------------------------???????????? ??????------------------------------- */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        ref={communityMenuRef}
                        id="composition-button"
                        aria-controls={openComminityMenu ? 'composition-menu' : undefined}
                        aria-expanded={openComminityMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleComminityMenuToggle}
                    >
                        <Typography>????????????</Typography>
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
                                            <MenuItem onClick={(event) => handleCommunityMenuRefMenuClose(event, '/community/reference')}>?????????</MenuItem>
                                            <MenuItem onClick={(event) => handleCommunityMenuRefMenuClose(event, '/community/notice')}>????????????</MenuItem>
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