import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getMovies, getTopMovies } from '../utils/tmdb'
import { Result } from './Result'
import { NavLink } from 'react-router-dom'

let qs = null
/**
 *  async result loading/listing using getMovies or getTopMovies
 **/ 
export const Results = ({ queryString }) => {
	const [listItems, setListItems] = useState([]);
	const [page, setPage] = useState(1);
	const [isFetching, setIsFetching] = useState(true);
	
	const loadMovies = (page) => {
		return queryString ? getMovies(queryString, page) : getTopMovies(page)
	}
	const fetchMore = () => {
		loadMovies(page).then(data => {
			setListItems(prevState => ([...prevState, ...data.results]));
			setIsFetching(false);
		})
	}

	if(qs !== queryString){
		// clear the list if a search query was made
		qs = queryString;
		setListItems([]);
		setPage(1);
		fetchMore();
	}
	
	useEffect(() => {
		if (!isFetching) return;
		fetchMore();
	  });

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const handleScroll = (e) => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
			setPage(page + 1);
			setIsFetching(true);
		}
	}
	
	return (
		<StyledResultList>
		{
			listItems.map((result, index) => (
				<NavLink key={index} exact to={`/id/${result.id}`}>
					<Result
						key={result.id}
						poster={result.poster_path}
						title={result.original_title}
					/>
				</NavLink>
			))
		}
		</StyledResultList>
	)
}

// flex grid
const StyledResultList = styled.div`
	max-width: 1920px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-gap: 2em 1em;
	padding: 2em;
`