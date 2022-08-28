import type { NextPage } from 'next'
import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PageTitleBar from '../ components/common/PageTitleBar';

const CurriculumPage: NextPage = () => {
    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title="WE-지역현안 교육 연구 내용" icon={AutoStoriesOutlinedIcon} />
            <PageTitleBar title="교과과정" icon={AutoStoriesOutlinedIcon} />

            {/* ------------------첫번째 표----------------------- */}
            <Table size="small" aria-label="curriculum table-1" sx={{
                border: '1px solid #00296b',
                marginBottom: '20px'
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            학과명
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            구분
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            인증 프로그램명
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            이수 조건
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                        }}>
                            기계제어공학과
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            인증
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            스마트 그린 에너지 인증과정<br />
                            Smart Green Energy<br />
                            Certificate Program
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                            총 21학점 이수<br />
                            - 필수 9학점<br />
                            - 공통선택 6학점 이상<br />
                            - 융합심화 6학점 이상<br />
                            - Energy 기술 분야 졸업연구 발표
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            공간설계공학과
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            인증
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            스마트 에코 테크놀로지 인증과정<br />
                            Smart Eco Technology
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderBottom: '1px solid #00296b',
                        }}>
                            총 21학점 이수<br />
                            - 필수 9학점<br />
                            - 공통선택 6학점 이상<br />
                            - 융합심화 6학점 이상<br />
                            - Smart Eco 기술 분야 졸업연구 발표
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* ------------------두번째 표----------------------- */}
            <Table size="small" aria-label="curriculum table-2" sx={{
                border: '1px solid #00296b',
                marginBottom: '20px'
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            구분
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            교과목 명
                        </TableCell>
                        <TableCell align="center" colSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            이수 조건
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" rowSpan={2} colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                        }}>
                            필수
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            Wind Energy System 개론
                        </TableCell>
                        <TableCell align="center" rowSpan={2} colSpan={2}>
                            9학점
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            논문연구 (I~II)
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" rowSpan={5} colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            공통선택
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            Wind Energy 기술 특론
                        </TableCell>
                        <TableCell align="center" rowSpan={5} colSpan={2} sx={{
                            borderBottom: '1px solid #00296b',
                        }}>
                            6학점 이상
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            Technical Writing
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            논문연구 (III~V)
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            그린에너지콜로키움
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            풍력단지의 시뮬레이션
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* ------------------세번째 표----------------------- */}
            <Table size="small" aria-label="curriculum table-3" sx={{
                border: '1px solid #00296b'
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" rowSpan={2} colSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            융합심화(선택)
                        </TableCell>
                        <TableCell align="center" rowSpan={2} colSpan={4} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            교과목 명
                        </TableCell>
                        <TableCell align="center" colSpan={3} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            3R 기술 분야
                        </TableCell>
                        <TableCell align="center" rowSpan={2} colSpan={2} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            이수 조건
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            IDA
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            SOM
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid #00296b',
                            borderBottom: '1px solid #00296b',
                            backgroundColor: '#dcdcdc'
                        }}>
                            EHI
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" rowSpan={6} colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                        }}>
                            그린 에너지 시스템
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            유체-고체 상호작용
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" rowSpan={13} colSpan={2} sx={{
                            borderBottom: '1px solid #00296b',
                        }}>
                            융합심화 분야<br />
                            6학점 이상
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            3차원 전산유체 해석
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            전기-물리-광학적 계측방법
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            그린에너지변환 및 저장
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            고등전력전자
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            에너지플랜트 시스템 개론
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" rowSpan={5} colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                        }}>
                            스마트 에너지
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            최적제어 및 강화학습
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            {`Adaptive Signal Processing & Machine Learning`}
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            딥러닝 영상처리
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            {`Digital Twin & Automation`}
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            항법유도제어
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" rowSpan={2} colSpan={2} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            에너지 재료
                        </TableCell>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            복합재료역학
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)'
                        }}>
                            O
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            고급재료역학
                        </TableCell>
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }} />
                        <TableCell align="center" colSpan={1} sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            borderBottom: '1px solid #00296b',
                        }}>
                            O
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}
export default CurriculumPage