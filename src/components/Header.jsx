import styled from "@emotion/styled";
import {Typography, AppBar} from '@mui/material'

const Header = styled(AppBar)`
  padding: 10px;
  background-color: #fff;
  color: #000;
  box-shadow: none;
  border: 1px solid rgb(239, 243, 244);
`

export default function AppHeader() {
 return (
     <Header position="sticky">
         <Typography variant="h5" >
             Home
         </Typography>
     </Header>
 )
}