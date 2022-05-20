import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Typography,Button} from '@mui/material'

export default function CheckoutTable(props) {

  return (
    <TableContainer sx={{m:5,mb:0.5}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography fontWeight={600}>Producto</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600}>Cantidad</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600}>Color</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600}>Precio&nbsp;($)</Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography fontWeight={600}>Eliminar</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Array.from(props.list.cartList).map((cartItem) => (
                    <TableRow
                        key={cartItem.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Button
                                variant="filter"
                                onClick={props.handleClick({
                                    id:cartItem.id,
                                    action:"navigate",
                                })}
                                >
                                <Typography>{cartItem.name}</Typography>
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>{cartItem.cant}</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Rojo</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>$&nbsp;{cartItem.price}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Button
                                variant="filter"
                                onClick={props.handleClick({
                                    id:cartItem.id,
                                    action:"delete",
                                })}
                                >
                            <Typography fontWeight={700} fontSize={16}>X</Typography>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}