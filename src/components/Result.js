import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


export const Result = ({ poster, title, children }) => {
	return(
		<StyledResult>
			<Card className="thecard">
			<StyledPoster>
				<CardContent>
				<img src={`https://image.tmdb.org/t/p/w400${poster}`} alt={title}/>
				</CardContent>
			</StyledPoster>
			<StyledDetails>
			<CardActions>
			<div>
				<h2>{title}</h2>
				{ children }
			</div>
			</CardActions>
			</StyledDetails>
			</Card>
		</StyledResult>
	)
}

const StyledResult = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	height: 100%;
	.thecard {
		height: 100%;
	}
`

const StyledPoster = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 150%;
	overflow: hidden;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
`

const StyledDetails = styled.div`
	height: 100%;
	color: black;
	text-decoration: none ;
`
