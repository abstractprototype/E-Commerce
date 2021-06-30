import React from 'react'
import {Card, CardMedia, CardContest, CardActions, Typography, IconBotton} from '@material-ui/core';
import {AddShoppingCard} from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage';

const Product = () => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div classNAme={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5" >
                        {product.name}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product

