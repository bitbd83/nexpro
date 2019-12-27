import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import serviceIcon from '../../Assets/icons/icon4.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: '400px',
    height: '200px',
    borderRadius: '10px',
    boxShadow: '5px 5px 20px 5px rgb(3, 4, 6)',
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor: 'rgb(14, 19, 29)',
    color: '#fff'
    },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: '18px',
    marginTop: '10px',
    fontFamily: 'Rajdhani',
    display: 'block',
    width: '400px',
    fontWeight: 'bold',
    color: 'rgb(0, 117, 249)'
  },
  pos: {
    marginBottom: 12
  }
});

function ServiceCard(props) {
  const { classes } = props;

  return (
    <Card className={`${classes.card} 'card-root' `}>
      <CardContent>
        <img src={serviceIcon} alt="props-icons" />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <Typography component="p" style={{ fontFamily: 'Rajdhani', fontSize: '16px' }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceCard);
