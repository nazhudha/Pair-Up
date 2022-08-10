import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const columns = [
  { id: 'name', label: 'Date', minWidth: 100 },
  { id: 'code', label: 'Project Name', minWidth: 100 },
  {
    id: 'language',
    label: 'Language(s)',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'fork',
    label: 'Fork Count',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'visit',
    label: '',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, language, fork, visit) {
  return { name, code, language, fork, visit };
}

export default function StickyHeadTable({ repos }) {
  let rows = [];

  repos.forEach((element) => {
    rows.push(
      createData(
        new Date(element.created_at).toLocaleDateString('en-GB', {
          timeZone: 'UTC',
        }),
        element.name,
        element.language,
        element.forks_count,
        <a href={element.html_url}>
          <LaunchIcon />
        </a>
      )
    );
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card sx={{ width: '50%', overflow: 'hidden', margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Github Projects
        </Typography>
        <Divider />
        <Typography sx={{ mb: 5.5 }} color="text.secondary"></Typography>
        <Paper sx={{ width: '100%', overflow: 'hidden', margin: 'auto' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}
