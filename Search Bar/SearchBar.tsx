import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const SearchContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: theme.palette.grey[700], // Adjust background color as needed
    '&:hover': {
      //backgroundColor: theme.palette.grey[600], // Adjust hover background color as needed
    },
    marginLeft: 'auto', // Adjust margin to center
    marginRight: 'auto', // Adjust margin to center
    width: '100%',
    maxWidth: '400px', // Adjust maximum width as needed
    [theme.breakpoints.up('md')]: {
      marginLeft: '16px',
      width: 'auto',
    },
  }));

 const SearchIconContainer = styled('div')({
  padding: '8px',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
  
const SearchInput = styled(InputBase)(({ theme }) => ({
    padding: '8px 8px 8px 40px', // Adjust padding for icon spacing
    transition: 'width 300ms',
    width: '100%',
    color: theme.palette.common.white, // Text color
    '&::placeholder': {
      color: theme.palette.grey[300], // Placeholder text color
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
    },
     cursor: 'pointer', // Add cursor pointer style
  }));

  export default function SearchBar(){

    return(
        <SearchContainer>
                        <SearchIconContainer>
                            <SearchIcon />
                        </SearchIconContainer>
                        <SearchInput placeholder="Search..." />
        </SearchContainer>
    );
  }