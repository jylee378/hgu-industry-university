import type { NextPage } from 'next'
import { Box, Grid, Typography } from '@mui/material'
import PageTitleBar from '../../components/common/PageTitleBar'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const ReferencePage: NextPage = () => {
    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title={'자료실'} icon={LocalLibraryOutlinedIcon} />
        </Box>
    )

}

export default ReferencePage