import type { NextPage } from 'next'
import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PageTitleBar from '../../components/common/PageTitleBar';
import { data } from '../../data/participants/researcher'

const styles = {
    tableRow: {
        "&:last-child td": {
            borderBottom: '1px solid #00296b',
        },
    },
}

const ResearcherPage: NextPage = () => {
    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title="참여 연구원" icon={ContactPageOutlinedIcon} />
            <Table aria-label="researcher table" sx={{
                border: '1px solid #00296b',
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" rowSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            참여 학생
                        </TableCell>
                        <TableCell align="center" colSpan={12} sx={{
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            학위 과정
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            학기 8학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            석사 1학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            석사 2학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            석사 3학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            석사 4학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 1학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 2학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 3학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 4학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 5학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            박사 6학기
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            비고
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) => (
                            <TableRow key={index} sx={{
                                "&:last-child td": {
                                    borderBottom: '1px solid #00296b',
                                },
                            }}>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.name}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.bachelor_8 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.master_1 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.master_2 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.master_3 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.master_4 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_1 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_2 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_3 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_4 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_5 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1} sx={{
                                    borderRight: '1px solid rgba(224, 224, 224, 1)'
                                }}>
                                    {item.doctor_6 && 'O'}
                                </TableCell>
                                <TableCell align="center" colSpan={1}>
                                    {item.etc}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default ResearcherPage