import frub_logo from "../frub_logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import {menuItems} from "../infoMenus";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {Link as Link2} from "@mui/material";

import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function Cabecalho() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,   
        marginLeft: 100,
        width: '20%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '18ch',
          },
        },
      }));      

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({[index]: event.currentTarget});
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    const registrar = () => {
        navigate("/register");
    }

    return (
        <div className="cabecalho">

            <Toolbar className="toolbar">

                <a href="/login">
                    <img src={frub_logo} alt="Logo" className="logo"/>
                </a>

                <div className="div-logo">
                    <h2 className="titulo-logo">FRUB</h2>
                    <br/>
                    <h3 className="logo complemento-area-estudante">Área do Estudante</h3>
                </div>

                {Object.keys(menuItems).map((item, index) => (
                    <div className="navButton" key={index}>
                        <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                            {item}
                        </Button>
                        <Menu
                            anchorEl={anchorEl && anchorEl[index]}
                            keepMounted
                            open={anchorEl && Boolean(anchorEl[index])}
                            onClose={handleClose}
                            getContentAnchorEl={null}
                            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                            transformOrigin={{vertical: "top", horizontal: "center"}}
                        >
                            {menuItems[item].map((menuitems, menuindex) => (
                                <MenuItem
                                    key={menuindex}
                                    selected={menuitems === item}
                                    component={Link} to={menuitems.path}
                                >
                                    {menuitems.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                ))}
            </Toolbar>

            <div className="barra-pesquisa">
            <Toolbar>
                <Search sx={{background: 'white'}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Pesquisar página…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
            </div>
            
        </div>
)

}

export default Cabecalho;