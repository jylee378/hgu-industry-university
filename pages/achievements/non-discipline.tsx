import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import PageTitleBar from '../../components/common/PageTitleBar'
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import { data } from '../../data/achievements/non_discipline'
import React from 'react';
import { useTheme } from '@mui/material/styles'

const styles = {
    container: {
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
        padding: '0px 0px 0 40px',
        marginBottom: '80px',
    }
}

const NonDisciplinePage: NextPage = () => {

    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"))

    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title={'1차년도 비교과활동'} icon={WindPowerOutlinedIcon} />
            <Box sx={{ padding: "0px 20px" }}>
                {
                    data.map((item, index) => (
                        <React.Fragment key={index}>
                            <Grid container spacing={3} display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
                                {
                                    item.images.map((image, imageId) => (
                                        <Grid key={imageId} item md={3} display="flex" justifyContent="center">
                                            <Image width={isLargeScreen ? 330 : 250} height={isLargeScreen ? 250 : 180} src={image} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Box style={styles.container}>
                                <Grid container justifyContent="space-between">
                                    <Grid item sx={{ marginTop: '30px', paddingRight: '40px', width: '600px'}}>
                                        <Typography textAlign="left" variant="h5">{item.title}</Typography>
                                        <Typography textAlign="left" variant="h6" fontWeight="400">{item.visit_date}</Typography>
                                        <br />
                                        {
                                            item.details.map((detail, detailId) => (
                                                <Typography key={detailId} textAlign="left" fontWeight="400">{detail}</Typography>
                                            ))
                                        }
                                    </Grid>
                                    <Grid item>
                                        <Image width={350} height={200} src={`/non_discipline/discipline_background_crop.png`} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </React.Fragment>
                    ))
                }
            </Box>
        </Box>
    )
}

export default NonDisciplinePage