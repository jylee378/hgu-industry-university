import { Box, Stack, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import customStyled from './Layout.module.css'

interface rightMenuProps {
    isTablet: boolean
}

const RightMenu = (props: rightMenuProps) => {

    return (
        <Box sx={{ marginTop: !props.isTablet ? "0px" : "20px" }}>
            <Stack
                direction={!props.isTablet ? "row" : "column"}
                spacing={3}
                className={customStyled.link}
                divider={<Divider orientation={!props.isTablet ? "vertical" : "horizontal"} flexItem
                />}
            >
                <Link href={`/a`}><Typography>참여인력</Typography></Link>
                <Link href={`/b`}><Typography>교과과정</Typography></Link>
                <Link href={`/c`}><Typography>산학협력</Typography></Link>
                <Link href={`/d`}><Typography>사업성과</Typography></Link>
                <Link href={`/f`}><Typography>커뮤니티</Typography></Link>
            </Stack>
        </Box>

    )
}

export default RightMenu