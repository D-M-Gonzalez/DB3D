import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                    {
                        props: { variant: 'db3d' },
                        style: {
                            height:'5vw',
                            maxHeight:'45px',
                            borderRadius:'0px',
                            borderTop: '3px solid #FFFFFF',
                            borderBottom: '3px solid #FFFFFF',
                            "&:focus": {
                                color: "#FFB6C1"
                            },
                            "&:hover": {
                                backgroundColor: 'white',
                                borderTop: '3px solid #FFB6C1',
                                borderBottom: '3px solid #FFB6C1',
                            }
                            
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
                            "&:focus": {
                                color: "#FFB6C1"
                            },
                            "&:hover": {
                                backgroundColor: 'white',
                                borderTop: '1px solid #FFB6C1',
                                borderBottom: '1px solid #FFB6C1',
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