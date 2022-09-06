import {Avatar, Divider, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";

function Login() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="cabecalho">
        <h2 className="logo">FRUB</h2>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </div>

    )
}
export default Login;