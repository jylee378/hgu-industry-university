import type { NextPage } from 'next'
import { Box } from '@mui/material'
import PageTitleBar from '../../components/common/PageTitleBar'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { data } from '../../data/community/notice';
import { useMemo } from 'react';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: '번호',
        headerAlign: 'center',
        flex: 0.1,
        align: 'center'
    },
    {
        field: 'title',
        headerName: '제목',
        flex: 0.9
    },
];
const addIdToData = (input: {
    title: string;
    content: string;
}[]) => {
    return input.map((obj, index) => ({ ...obj, id: index + 1 }))
}

const NoticePage: NextPage = () => {

    const result = useMemo(() => addIdToData(data), [data])

    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title={'공지사항'} icon={LocalLibraryOutlinedIcon} />
            <Box sx={{ height: 370, padding: "0px 50px" }}>
                <DataGrid
                    rows={result}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Box>
        </Box>
    )

}

export default NoticePage