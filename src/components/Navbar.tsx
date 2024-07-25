import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '16px',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#007bff',
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src="/logo.png" alt="Logo" height="40" />
          <Typography variant="h6" className={classes.title}>
            АРТЁЛЬ ПРОЕКТ
          </Typography>
          <Typography variant="h6">
            +7 (912) 999-99-99
          </Typography>
          <IconButton edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton edge="end" color="inherit" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
