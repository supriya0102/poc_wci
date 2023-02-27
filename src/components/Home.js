import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { users } from '../store/home/HomeAction';


function Home() {
    const dispatch = useDispatch();
    const reduxStore = useSelector(state => state.usersReducer.users)

    useEffect(() => {
        dispatch(users());
    }, [])

    return (
        <div>
        <Header/>
        <Container maxWidth = "xl" sx={{mt: 5}}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                    reduxStore.map((row) => (
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