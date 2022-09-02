import type { NextPage } from 'next'
import { Box, Grid, Typography } from '@mui/material'
import PageTitleBar from '../../components/common/PageTitleBar'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const NoticePage: NextPage = () => {
    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title={'공지사항'} icon={LocalLibraryOutlinedIcon} />
        </Box>
    )

}

export default NoticePage