import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface leftMenuProps {
    isResponsive: boolean;
}

const LeftMenu = (props: leftMenuProps) => {

    const router = useRouter()

    return (
        <Grid container justifyContent='flex-start' alignItems='center' style={{ padding: !props.isResponsive ? '0px 0px 0px 20px' : '5px 20px' }}>
            <Grid item lg={2} md={4}>
                <a href='https://handong.edu/' target="_blank" rel="noreferrer">
                    <Image src={`/logo.jpeg`} width={!props.isResponsive ? 200 : 140} height={!props.isResponsive ? 70 : 50} alt="logo" />
                </a>
            </Grid>
            {/* 메인 페이지 아닐 경우에 메인으로 이동하는 로고가 표시된다 */}
            {
                router.pathname !== "/" && (
                    <Grid item lg={3} md={4} xs={3} style={{ minWidth: 150, fontSize: 18, fontWeight: 'bold' }}>
                        <Typography><Link href={`/`}>THE WIND BLOWS</Link></Typography>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default LeftMenu