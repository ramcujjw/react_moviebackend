import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
    const arr_obj =[{movieName:"Movie1",category:"Category1",director:"Director1",releaseYear:2000,language:"Malayalam"},
        {movieName:"Movie2",category:"Category2",director:"Director2",releaseYear:2000,language:"Tamil"},
        {movieName:"Movie3",category:"Category3",director:"Director3",releaseYear:2003,language:"Malayalam"}
    ]
  return (
   
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>MovieName</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Director</TableCell>
          <TableCell align="right">ReleaseYear</TableCell>
          <TableCell align="right">Language</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {arr_obj.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <TableCell align="right">{row.language}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home