import { Grid } from '@mui/material'
import Image from 'next/image'
//import Link from 'next/link'

interface leftMenuProps {
    isTablet: boolean;
}

const LeftMenu = (props: leftMenuProps) => {
    return (
        <Grid container justifyContent='flex-start' alignItems='center' style={{ padding: !props.isTablet ? '0px 0px 0px 20px': '5px 20px' }}>
            <Grid item lg={2} md={4} xs={3}>
                <a href='https://handong.edu/' target="_blank" rel="noreferrer">
                    <Image src={`/logo.jpeg`} width={!props.isTablet ? 200 : 140} height={!props.isTablet ? 70 : 50} alt="logo" />
                </a>
            </Grid>
            {/* <Grid item lg={3} md={6} xs={4} style={{ minWidth: 200, fontSize: 18, fontWeight: 'bold', marginLeft: '50px' }}>
                <Link href={`${props.prodLink}/`}>THE POWER-X LAB</Link>
            </Grid> */}
        </Grid>
    )
}

export default LeftMenu