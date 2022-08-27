import type { NextPage } from 'next'
import { Box } from '@mui/material'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PageTitleBar from '../../ components/common/PageTitleBar';

const ProfessorPage: NextPage = () => {
    return (
        <Box style={{padding: '50px 10% 50px 10%'}}>
            <PageTitleBar title="참여 교수" icon={ContactPageOutlinedIcon} />
        </Box>
    )
}

export default ProfessorPage