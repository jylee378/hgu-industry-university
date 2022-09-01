import React from 'react'
import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { data } from '../../data/achievements/academic'
import PageTitleBar from '../../components/common/PageTitleBar'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import styles from './academic.module.css'

const AcademicPage: NextPage = () => {

    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            {
                data.map((item, index) => (
                    <React.Fragment key={index}>
                        <PageTitleBar title={item.main_title} icon={LightbulbOutlinedIcon} />
                        <Box sx={{ padding: '0px 100px' }}>
                            {
                                item.data.map((content, number) => (
                                    <React.Fragment key={number}>
                                        <Box className={styles.parallelogram} sx={{
                                        }}>
                                            <Box className={styles.parallelogramFont}>
                                                <Typography variant='h6'>{content.title}</Typography>
                                                <Typography color={"black"} fontWeight={'400'} fontSize={'14px'}>{content.writer}</Typography>
                                            </Box>
                                        </Box>

                                    </React.Fragment>

                                ))
                            }
                        </Box>
                    </React.Fragment>

                ))
            }
        </Box>
    )
}

export default AcademicPage