import type { NextPage } from 'next'
import { Box } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PageTitleBar from '../../components/common/PageTitleBar'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { data } from '../../data/community/reference';
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
        flex: 0.8
    },
    {
        field: 'path',
        headerName: '다운로드',
        headerAlign: 'center',
        align: 'center',
        flex: 0.1,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <a href={params.value} download><FileDownloadIcon /></a>
        )
    }
];
const addIdToData = (input: {
    title: string;
    content: string;
}[]) => {
    return input.map((obj, index) => ({ ...obj, id: index + 1 }))
}

const ReferencePage: NextPage = () => {

    const result = useMemo(() => addIdToData(data), [data])

    return (
        <Box style={{ padding: '50px 10% 50px 10%' }}>
            <PageTitleBar title={'자료실'} icon={LocalLibraryOutlinedIcon} />
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

export default ReferencePage