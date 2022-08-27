import type { NextPage } from 'next'
import { Box, Card, Grid, CardContent, CardMedia, Typography } from '@mui/material'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PageTitleBar from '../../ components/common/PageTitleBar';
import { data } from '../../data/professor'

const ProfessorPage: NextPage = () => {
    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title="참여 교수" icon={ContactPageOutlinedIcon} />

            <Grid container display="flex" spacing={2}>
                <Grid item md={6}>
                    <Card>
                        <Grid container display={'flex'}>
                            {/* 연구책임자 교수 이미지 */}
                            <Grid item md={5}>
                                <CardMedia
                                    component="img"
                                    image={data.header.image}
                                    alt={data.header.name}
                                    sx={{
                                        width: '222px',
                                        height: '268px'
                                    }}
                                />
                            </Grid>
                            {/* 연구책임자 프로필 */}
                            <Grid item md={7}>
                                <CardContent sx={{ padding: '30px 50px' }}>
                                    <Typography textAlign="left" gutterBottom variant="h4" component="div">
                                        {data.header.name} <span style={{ fontSize: '16px' }}>{data.header.role}</span>
                                    </Typography>
                                    <br />
                                    <Typography textAlign="left" variant="body2">
                                        연구분야
                                    </Typography>
                                    <Typography textAlign="left" variant="body1">
                                        {data.header.field}
                                    </Typography>
                                    <br />
                                    <br />
                                    <Typography textAlign="left" variant="body1">
                                        {data.header.email}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={6} />
                {
                    data.professors.map((item, index) => (
                        <Grid item md={6} key={index}>
                            <Card>
                                <Grid container display={'flex'}>
                                    {/* 교수 이미지 */}
                                    <Grid item md={5}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.name}
                                            sx={{
                                                width: '222px',
                                                height: '268px'
                                            }}
                                        />
                                    </Grid>
                                    {/* 교수 프로필 */}
                                    <Grid item md={7}>
                                        <CardContent sx={{ padding: '30px 50px' }}>
                                            <Typography textAlign="left" gutterBottom variant="h4" component="div">
                                                {item.name} <span style={{ fontSize: '16px' }}>{item.role}</span>
                                            </Typography>
                                            <br />
                                            <Typography textAlign="left" variant="body2">
                                                연구분야
                                            </Typography>
                                            <Typography textAlign="left" variant="body1">
                                                {item.field}
                                            </Typography>
                                            <br />
                                            <br />
                                            <Typography textAlign="left" variant="body1">
                                                {item.email}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ProfessorPage