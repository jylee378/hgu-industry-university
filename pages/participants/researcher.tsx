import type { NextPage } from 'next'
import { Box } from '@mui/material'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PageTitleBar from '../../ components/common/PageTitleBar';

const ResearcherPage: NextPage = () => {
    return (
        <Box style={{padding: '50px 10% 50px 10%'}}>
            <PageTitleBar title="참여 연구원" icon={ContactPageOutlinedIcon} />
        </Box>
    )
}

export default ResearcherPage