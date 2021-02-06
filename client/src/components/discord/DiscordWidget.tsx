import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CloseIcon from '@material-ui/icons/Close';
import './DiscordWidget.scss';

export default function DiscordWidget() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div id='discord-widget'>
			{isOpen ? (
				<>
					<IconButton className='discord-x' onClick={() => setIsOpen(false)}>
						<CloseIcon />
					</IconButton>
					<iframe
						src='https://discord.com/widget?id=186223975959887872&theme=dark'
						width='350'
						height='500'
						frameBorder='0'
						sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
					></iframe>
				</>
			) : (
				<IconButton onClick={() => setIsOpen(true)}>
					<AccountBalanceIcon />
				</IconButton>
			)}
		</div>
	);
}
