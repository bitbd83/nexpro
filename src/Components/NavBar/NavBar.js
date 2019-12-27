import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Quantaex from '../../Assets/quantaex.svg';
import Product from '.././Product/Product';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  Link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  mobile: {
    padding: '0px',
    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  navbar: {
    background: 'rgb(14, 19, 29);',
    [theme.breakpoints.down('sm')]: {
    color: 'rgb(18, 17, 40)'
    }
  },
  root: {
    flexGrow: 2,
  },
  grow: {
    flexGrow: 2,
    color: 'rgb(157, 165, 180)'
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    marginTop: '100px',
    bottom: 20,
    zIndex: '99',
    background: '#303f4d',
    padding: '20px',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  Logo: {
    background: 'transparent',
    [theme.breakpoints.down('md')]: {
      marginTop: '5px'
    }
  }
});

class ButtonAppBar extends React.Component {
  state = {
    LastPrice: []
  };
  componentDidMount() {
    axios
      .get(`https://pro.quantaex.com/api/v2/peatio/public/markets/tickers`)
      .then(res => {
        const LastPrice = res.data;
        this.setState({ LastPrice });
      });
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.LastPrice);
    return (
      <div>
        <AppBar
          position="static"
          style={{
            position: 'fixed',
            paddingTop: '5px',
            paddingBottom: '5px',
            boxShadow: '4px #0ff',
            minHeight: '50px'
          }}
          className={classes.navbar}
        >
          <Toolbar>
            <Typography variant="h4">
              <Link
                to="/"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <img
                  src={Quantaex}
                  height="50px"
                  width="180px"
                  alt="QuantaEx"
                  className={classes.Logo}
                />{' '}
              </Link>
            </Typography>
            <Typography variant="h4" className={classes.mobile} style={{ width: '100%'}}>
              <a href="https://pro.quantaex.com/"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}>
                <Button style={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#fff',
                    opacity: '0.8',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    padding: '10px 5px',
                    fontFamily: 'Rajdhani',
                    backgroundColor:'transition',
                    transition:  '0.3'
                  }}>
                  Exchange 
                </Button>
              </a>
              <a href="https://pro.quantaex.com/ieo"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}>
                <Button style={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#fff',
                    opacity: '0.8',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    padding: '10px 5px',
                    fontFamily: 'Rajdhani',
                    backgroundColor:'transition',
                    transition:  '0.3'
                  }}>
                  IEO 
                </Button>
              </a>
              <a href="https://pro.quantaex.com/leaderborad"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}>
                <Button style={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#fff',
                    opacity: '0.8',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    padding: '10px 5px',
                    fontFamily: 'Rajdhani',
                    backgroundColor:'transition',
                    transition:  '0.3'
                  }}>
                  Leaderboard 
                </Button>
              </a>
            </Typography>
           <Typography variant="h4" className={classes.mobile} style={{ paddingLeft: '400px', width: '100%'}}>
            <a
              href="https://pro.quantaex.com/dsr"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}
            >
              <Button style={{
                  marginRight: '5px',
                  marginLeft: '5px',
                  color: '#fff',
                  opacity: '0.8',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  padding: '5px',
                  fontFamily: 'Rajdhani',
                  backgroundColor:'transition',
                  transition:  '0.8'


                }}
              >
                DSR
                </Button>
            </a>
            <a
              href="https://pro.quantaex.com/signup"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}
            >
              <Button style={{
                  marginRight: '5px',
                  marginLeft: '5px',
                  color: '#fff',
                  opacity: '0.8',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  padding: '5px',
                  fontFamily: 'Rajdhani',
                  backgroundColor:'transition',
                  transition:  '0.8'


                }}
              >
                Signup
                </Button>
            </a>
            <a
              href="https://pro.quantaex.com/signin"
              style={{ textDecoration: 'none', cursor: 'pointer', borderradius: '45' }}
            >
            <Button style={{
                marginRight: '5px',
                marginLeft: '5px',
                color: '#fff',
                opacity: '0.8',
                fontWeight: 'bold',
                fontSize: '15px',
                padding: '5px',
                fontFamily: 'Rajdhani',
                backgroundColor:'transition',
                transition:  '0.8'

                           }}
            >
            Login
            </Button>
            </a>
            <a
            href="https://pro.quantaex.com/trade/btcusdt"
            style={{  textDecoration: 'none', cursor: 'pointer', borderradius: '45' }}
            >

              <Button variant="contained"
                style={{
                  marginRight: '5px',
                  marginLeft: '5px',
                  color: '#fff',
                  opacity: '0.8',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  padding: '5px',
                  fontFamily: 'Rajdhani',
                  backgroundColor: 'rgb(255, 57, 34)',
                  transition:  '0.8'
                }}
              >
                QuantaEx Pro
              </Button>
            </a>
           </Typography>
            <Menu />
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
