import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Typography,Button} from '@mui/material'

export default function CheckoutTable(props) {

  return (
    <TableContainer sx={{m:5,mb:0.5,width:"70vw"}} component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Producto</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Cantidad</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Color</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Precio&nbsp;($)</Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Eliminar</Typography>
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
                                    action:"item",
                                })}
                                >
                                <Typography fontSize={{md:20,sm:15,xs:10}}>{cartItem.name}</Typography>
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <Typography fontSize={{md:20,sm:15,xs:10}}>{cartItem.cant}</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography fontSize={{md:20,sm:15,xs:10}}>Rojo</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography fontSize={{md:20,sm:15,xs:10}}>$&nbsp;{cartItem.price}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Button
                                variant="filter"
                                onClick={props.handleClick({
                                    id:cartItem.id,
                                    action:"delete",
                                })}
                                >
                            <Typography fontWeight={700} fontSize={{md:20,sm:15,xs:10}}>X</Typography>
                            </Button>
                        </TableCell>
                    </TableRow>          
                ))}
                <TableRow>
                    <TableCell rowSpan={3} colSpan={3} />
                    <TableCell colSpan={1}>
                        <Typography fontSize={{md:20,sm:15,xs:10}}>Subtotal</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontSize={{md:20,sm:15,xs:10}}>${props.total}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow colSpan={1}>
                    <TableCell>
                        <Typography fontSize={{md:20,sm:15,xs:10}}>Envío</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontSize={{md:20,sm:15,xs:10}}>$600</Typography>
                    </TableCell>
                </TableRow>
                <TableRow sx={{backgroundColor:"#FFB6C1"}}>
                    <TableCell colSpan={1}>
                        <Typography fontSize={{md:20,sm:15,xs:10}}>Total</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontSize={{md:20,sm:15,xs:10}}>${props.total + 600}</Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  );
}