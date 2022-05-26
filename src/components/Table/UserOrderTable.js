import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Typography,Button} from '@mui/material'

export default function UserOrderTable(props) {

    const calculateTotal = (order) => {
		let total = 0;
		Array.from(order.products).forEach((product)=>{
			total = total + (product.price * product.cant)
		})
		return <Typography fontSize={{md:20,sm:15,xs:10}}>$&nbsp;{total}</Typography>
	}

  return (
    <TableContainer sx={{m:5,mb:0.5,width:"70vw"}} component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Orden Nº</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Fecha</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Estado</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography fontWeight={600} fontSize={{md:20,sm:15,xs:10}}>Total</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Array.from(props.list).map((order,index) => (
                    <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Button
                                variant="circle"
                                onClick={props.handleClick({
                                    id:order._id,
                                    action:"order",
                                })}
                                >
                                <Typography fontSize={{md:20,sm:15,xs:10}}>{index}</Typography>
                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            <Typography fontSize={{md:20,sm:15,xs:10}}>{new Date(order.date).toLocaleString()}</Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography fontSize={{md:20,sm:15,xs:10}}>{order.status}</Typography>
                        </TableCell>
                        <TableCell align="right">
                            {calculateTotal(order)}
                        </TableCell>
                    </TableRow>          
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}