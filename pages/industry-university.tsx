import React from 'react'
import type { NextPage } from 'next'
import {
    Box, Table, TableBody, TableRow, TableCell, Grid, Typography, useMediaQuery
} from '@mui/material'
import HubIcon from '@mui/icons-material/Hub';
import PageTitleBar from '../ components/common/PageTitleBar';
import { data } from '../data/industry_university'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

const IndustryUniversityPage: NextPage = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            {
                data.map((item, index) => (
                    <React.Fragment key={index}>
                        <PageTitleBar title={item.main_title} icon={HubIcon} />
                        <Box sx={{ padding: '0px 100px', marginBottom: "30px" }}>
                            <Grid container display="flex" justifyContent="flex-start" alignItems="flex-end" sx={{ marginLeft: isMobile ? '0px' : '490px'}}>
                                {!isMobile && <Box sx={{ width: '150px', height: '30px', borderTop: "2px solid #dcdcdc", borderLeft: "2px solid #dcdcdc" }} />}
                                <Box sx={{ width: '300px', border: '2px solid #dcdcdc', padding: '10px 10px' }}>
                                    <Typography>{item.top_of_logo}</Typography>
                                </Box>
                            </Grid>
                            <Grid container display="flex" justifyContent="flex-start" alignItems="center">
                                <Box sx={{ width: '350px', border: '2px solid #dcdcdc', padding: '10px 10px' }}>
                                    <Typography>{item.left_of_logo}</Typography>
                                </Box>
                                {!isMobile && <Box sx={{ height: "2px", borderTop: "2px solid #dcdcdc" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Box>}
                                <Box sx={{ border: '2px solid #dcdcdc' }}>
                                    <Image width={200} height={80} src={item.logo} />
                                </Box>
                            </Grid>
                            {
                                item.bottom_of_logo &&
                                <>
                                    {!isMobile && <Grid container display="flex" justifyContent="flex-start" sx={{ marginLeft: isMobile ? '0px' : '490px'}}><Box sx={{ width: "2px", height: '30px', borderLeft: "2px solid #dcdcdc" }}></Box></Grid>}
                                    <Grid container display="flex" justifyContent="flex-start" sx={{ marginLeft: isMobile ? '0px' : '340px'}}>
                                        <Box sx={{ width: '300px', border: '2px solid #dcdcdc', padding: '10px 10px' }}>
                                            <Typography>{item.top_of_logo}</Typography>
                                        </Box>
                                    </Grid>
                                </>
                            }
                        </Box>
                        <Box sx={{ padding: '0px 100px', marginBottom: "30px" }}>
                            <Table aria-label="industry-university table" sx={{
                                border: '1px solid #00296b',
                            }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" rowSpan={2} sx={{
                                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                                        }}>
                                            협력 내용
                                        </TableCell>
                                        <TableCell align="left" colSpan={5} sx={{ padding: "15px 50px"}}>
                                            {
                                                item.content.map((text, textNum) => (
                                                    <Typography textAlign={"left"} key={textNum}>{text}</Typography>
                                                ))
                                            }
                                        </TableCell>
                                    </TableRow>
                                    {
                                        item.content_images &&
                                        <TableRow>
                                            <TableCell align="center" colSpan={5}>
                                                <Grid container spacing={3} display="flex" justifyContent="center">
                                                    {
                                                        item.content_images.map((image, number) => (
                                                            <Grid item key={number}>
                                                                <Image width={250} height={200} src={image} />
                                                            </Grid>
                                                        ))
                                                    }

                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    }
                                    {
                                        item.homepage &&
                                        <TableRow>
                                            <TableCell align="center" rowSpan={2} sx={{
                                                borderRight: '1px solid rgba(224, 224, 224, 1)',
                                            }}>
                                                홈페이지
                                            </TableCell>
                                            <TableCell align="center" colSpan={5}>
                                                <a href={item.homepage} target="_blank" rel="noreferrer"><Typography>{item.homepage}</Typography></a>
                                            </TableCell>
                                        </TableRow>
                                    }
                                </TableBody>
                            </Table>
                        </Box>
                    </React.Fragment>
                ))
            }
        </Box>
    )
}

export default IndustryUniversityPage