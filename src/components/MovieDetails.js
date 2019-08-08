import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { YoutubeModal } from './YoutubeModal'

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      padding: 0,
      margin: 0,
      "&:last-child": {
        paddingBottom: 0
      }
    },
    pos: {
      marginBottom: 12,
    }
  });

export const MovieDetails = ({ data, props, player }) => {
    const classes = useStyles();

    let date = new Date(data.release_date + 'T00:00:00.000Z')
    let trailer = data.videos.results.length > 0 ? data.videos.results[0].key : null;
    let items = [
        ["Title", data.original_title],
        ["Genre", data.genres.map(result => ( result.name )).join(" / ") ],
        ["Release date", new Intl.DateTimeFormat('nl-NL').format(date) ],
        ["Overview", data.overview ],
    ]
    return(
        <Card>
            <CardContent className={classes.card}>
                <StyledBanner>
                    <img alt="" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}></img>
                    <h1>{data.original_title}</h1>
                </StyledBanner>
                <StyledCardInfo>
                    {   
                        items.map((item, index) => (
                            <div key={index}>
                                <Typography color="textSecondary" gutterBottom>
                                    {item[0]}
                                </Typography>
                                <Typography className={classes.pos}  variant="body2" component="p">
                                    {item[1]}
                                </Typography>
                            </div>
                        ))
                    }
                </StyledCardInfo>
                <CardActions>
                    <YoutubeModal trailer={trailer} id={data.id} player={player} props={props} />
                </CardActions>
            </CardContent>
        </Card>
	)
}

const StyledCardInfo = styled.div`
    padding: 10px;
`

const StyledBanner = styled.div`
    background: url(${({ bg = 'none' }) => bg});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    color:white;
    text-align: center;
    font-size: 2vw;
    font-weight: bold;
    text-shadow: 1px 1px black;
    position: relative;
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        width: 100%;
    }
`
