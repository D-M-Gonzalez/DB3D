import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                    {
                        props: { variant: 'db3d' },
                        style: {
                            borderRadius:'0px',
                            fontFamily: 'Chakra Petch',
                            padding:'4px',
                            "&:focus": {
                                color: "black"
                            },
                            "&:hover": {
                                backgroundColor: 'white',
                            },
                            
                        },
                    },
                    {
                        props: { variant: 'db3d', size: 'small' },
                        style: {
                            height:'3.5vw',
                            minHeight:'20px',
                            maxHeight:'25px',
                            borderTop: '2px solid #FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            color: 'black',
                            "&:hover": {
                                borderTop: '1.5px solid #FFB6C1',
                                borderBottom: '1.5px solid #FFB6C1',
                            },
                            
                        },
                    },
                    {
                        props: { variant: 'db3d', size: 'medium' },
                        style: {
                            height:'4vw',
                            maxHeight:'38px',
                            borderTop: '2.5px solid #FFFFFF',
                            borderBottom: '2.5px solid #FFFFFF',
                            fontWeight: '700',
                            fontSize: '1.2rem',
                            color: 'black',
                            "&:hover": {
                                borderTop: '2.5px solid #FFB6C1',
                                borderBottom: '2.5px solid #FFB6C1',
                            },
                            
                        },
                    },
                    {
                        props: { variant: 'db3d', size: 'large' },
                        style: {
                            height:'5vw',
                            maxHeight:'45px',
                            borderTop: '3px solid #FFFFFF',
                            borderBottom: '3px solid #FFFFFF',
                            fontWeight: '700',
                            fontSize: '1.5rem',
                            color: 'black',
                            "&:hover": {
                                borderTop: '3px solid #FFB6C1',
                                borderBottom: '3px solid #FFB6C1',
                            },
                            
                        },
                    },
                    {
                        props: { variant: 'filter' },
                        style: {
                            height:'5vw',
                            maxHeight:'45px',
                            borderRadius:'0px',
                            borderTop: '1px solid #FFFFFF',
                            borderBottom: '1px solid #FFFFFF',
                            "&:hover": {
                                backgroundColor: 'white',
                                borderTop: '1px solid #FFB6C1',
                                borderBottom: '1px solid #FFB6C1',
                            }
                            
                        },
                    },
                    {
                        props: { variant: 'circle' },
                        style: {
                            height:'5vw',
                            maxHeight:'45px',
                            borderRadius:'50px',
                            "&:hover": {
                                backgroundColor: '#FFB6C1',
                            }
                            
                        },
                    },
                ],
            },
        MuiTypography:{
            defaultProps:{
                fontFamily: "Chakra Petch"
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    "&:hover": {
                        backgroundColor: 'rgb(255, 182, 193, 0.5)',
                    }                    
                }
            }
        }
    },
});