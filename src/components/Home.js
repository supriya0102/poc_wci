import Header from './Header';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';

const commonMapper = (id, firstName, lastName, email) => { return  { id, firstName, lastName, email } }
 
const rows = [
    commonMapper('1', 'Virat', 'Kohli', 'virat@mailinator.com'),
    commonMapper('2', 'Rohit', 'Sharma', 'rohit@mailinator.com'),
    commonMapper('3', 'Surya', 'Yadav', 'surya@mailinator.com'),
    commonMapper('4', 'KL', 'Rahul', 'rahul@mailinator.com'),
    commonMapper('5', 'Rishab', 'Pant', 'rishab@mailinator.com'),
];

function Home() {
    return (
        <div>
        <Header/>
        <Container maxWidth = "xl" sx={{mt: 5}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">FirstName</TableCell>
                        <TableCell align="right">LastName</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right"><IconButton><Edit></Edit></IconButton></TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
        </div>
    );
  }
  
  export default Home;