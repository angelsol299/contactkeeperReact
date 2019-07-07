import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: '#1DD1B3',
    position: 'relative',
    marginBottom: '20px'
  },

  menuButton: {
    float: 'right',
    top: '8px',
    right: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  drawerColorText: {
    color: '#117E77',
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      fontWeight: 'bold'
    }
  },
  spanMarginLeft: {
    marginLeft: '20px'
  },
  hidenNav: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
      float: 'right',
      position: 'relative',
      textAling: 'right',
      alignItems: 'right'
    }
  },
  hiddenHamFlex: {
    [theme.breakpoints.down('lg')]: {
      float: 'left',
      flex: 'auto'
    }
  },
  navbarLinks: {
    color: 'white',
    marginRight: '40px',
    marginTop: '20px',
    float: 'right'
  }
}));

const ResponsiveDrawer = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = props => {
    logout();
    clearContacts();
  };

  const authLinksDraw = (
    <Fragment>
      <ListItem
        button
        style={{
          color: 'black',
          fontSize: '16px',
          marginBottom: '20px'
        }}
      >
        {' '}
        <span style={{ fontWeight: 'bold', marginLeft: '20px' }}>
          Welcome&nbsp;{' '}
        </span>{' '}
        {user && user.name}
      </ListItem>
      <Divider />
      <Link to="/">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Home</span>
        </ListItem>
      </Link>
      <Link to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>About</span>
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem button onClick={onLogout}>
          <a href="#!" className={classes.drawerColorText}>
            <span className={classes.spanMarginLeft}>
              Logout <i className="fas fa-sign-out-alt" />
            </span>
          </a>
        </ListItem>
      </Link>
    </Fragment>
  );

  const guestLinksDraw = (
    <Fragment>
      <ListItem
        button
        style={{
          color: 'black',
          fontSize: '18px',
          marginTop: '-40px',
          marginBottom: '20px'
        }}
      >
        {' '}
        <span style={{ fontWeight: 'bold', marginLeft: '20px' }}>
          Menu&nbsp;{' '}
        </span>{' '}
      </ListItem>
      <Divider />
      <Link to="/register">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Register</span>
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Login</span>
        </ListItem>
      </Link>
      <Link to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>About</span>
        </ListItem>
      </Link>
    </Fragment>
  );
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>{isAuthenticated ? authLinksDraw : guestLinksDraw}</List>
    </div>
  );

  const guestLinks = (
    <Fragment>
      <div style={{ paddingTop: '4px' }}>
        <li className={classes.hidenNav}>
          <Link
            to="/login"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '20px',
              float: 'right'
            }}
          >
            Login
          </Link>
        </li>
        <li className={classes.hidenNav}>
          <Link
            to="/register"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '20px',
              float: 'right'
            }}
          >
            Register
          </Link>
        </li>
        <li className={classes.hidenNav}>
          <Link
            to="/about"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '20px',
              float: 'right'
            }}
          >
            About
          </Link>
        </li>
      </div>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <div style={{ paddingTop: '4px' }}>
        <li onClick={onLogout}>
          <a href="#!" className={classes.hidenNav}>
            <span
              style={{
                color: 'white',
                marginRight: '40px',
                marginTop: '20px',
                float: 'right'
              }}
            >
              Logout <i className="fas fa-sign-out-alt" />
            </span>
          </a>
        </li>
        <li>
          <Link
            className={classes.hidenNav}
            to="/about"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '20px',
              float: 'right'
            }}
          >
            <span className={classes.spanMarginLeft}>About</span>
          </Link>
        </li>
        <p
          className={classes.hidenNav}
          style={{
            color: 'white',
            marginRight: '40px',
            marginTop: '20px',
            float: 'right'
          }}
        >
          {' '}
          <span style={{ fontWeight: 'bold', marginLeft: '20px' }}>
            Welcome&nbsp;{' '}
          </span>{' '}
          {user && user.name}
        </p>
      </div>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <div
          style={{ backgroundColor: '#1DD1B3', borderBottomColor: '#1DD1B3' }}
        >
          {' '}
          <ul>
            <li
              style={{
                marginLeft: '20px',
                margin: '15px 0px 15px 20px'
              }}
              className={classes.hiddenHamFlex}
            >
              <h2>Contact Manager</h2>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
            <li>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{ float: 'right' }} />
              </IconButton>
            </li>
          </ul>
        </div>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default ResponsiveDrawer;
