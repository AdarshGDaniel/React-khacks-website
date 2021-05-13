import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

function Cards(props) {
    return (
        <div>
            <Card className="card-holder">
                <CardMedia
                        className = "card-imageo"
                        image={props.image}
                        title={props.title}
                />
                <div>
                    <CardContent>
                    <Typography component="h5" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.description}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}

export default Cards;