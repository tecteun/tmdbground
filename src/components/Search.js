import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'


export const StateHook = initialValue => {
	const [value, setValue] = useState(initialValue)

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: event => {
				setValue(event.target.value)
			}
		}
	}
}

export const Search = (props) => {
	const { value, bind } = StateHook('')

	const submitHandler = e => {
		e.preventDefault();
		props.setValue(value);
		props.history.push('/');
		return false;
	}

	return(
		<SearchForm onSubmit={submitHandler}>
			<TextField {...bind} label="Search themoviedb.org" id="searchfield" autoFocus={true} autoComplete="true" disableunderline="false" placeholder="..." />
		</SearchForm>
	)
}

const SearchForm = styled.form`
	div {
		width: 100%;
		max-width: 300px;
	}
	display: flex;
	justify-content: center;
	padding: 1em;
	
`
