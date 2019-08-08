import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button';


export const YoutubeModal = ({ trailer, id, player, props, children }) => {
	const [open, setOpen] = useState(player)
	
	if(trailer === null)
		return <Fragment/>;
	
	const handleOpen = () => {
		props.history.replace(`${id}/trailer`);
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
		props.history.replace(`/id/${id}`);
	}
	const handleRendered = () => {
		new window.YT.Player('ytplayer', {
			events: {
				'onStateChange': (args) => {
					if(args.data === 0) //onStateChange 0 == ended
						handleClose();
				}
			}
		});
	}
	
	return(
		<Fragment>
			<Button size="small" onClick={handleOpen}>show trailer</Button>
			<Modal open={open} onRendered={handleRendered} onClose={handleClose}>
				<StyledModal>
					<iframe id="ytplayer" title={`trailer/${id}`} width="100%" height="500px" src={`https://www.youtube.com/embed/${trailer}?autoplay=1&enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</StyledModal>
			</Modal>
		</Fragment>
	)
}

const StyledModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
`

YoutubeModal.propTypes = {
	children: PropTypes.node,
}