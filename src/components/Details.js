import React from 'react'
import Async from 'react-async'
import styled from 'styled-components'
import { getMovieDetails } from '../utils/tmdb'
import { MovieDetails } from './MovieDetails'

/**
 *  async movie details loading
 **/ 
export const Details = (props) => {
	let playerEnabled = props.match.params.trailer === "trailer"
	return (
		<StyledDetails>
			<Async promiseFn={() => { return getMovieDetails(props.match.params.id) }}>
				<Async.Loading>Loading...</Async.Loading>
				<Async.Fulfilled>
					{data => {
						return (
								<MovieDetails player={playerEnabled} 
											  props={props} 
											  data={data}
								/>
	                    )
					}}
				</Async.Fulfilled>
				<Async.Rejected>
					{error => `Failed to load the movie details: ${error.message}`}
				</Async.Rejected>
			</Async>
		</StyledDetails>
	)
}

const StyledDetails = styled.div`
	display: block;	
	max-width: 1920px;
	padding: 2em;
`
