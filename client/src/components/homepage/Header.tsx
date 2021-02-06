import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import './Header.scss';

export default function Header() {
	return (
		<>
			<div id='header'>
				<div id='bar' className='content'>
					<RedditIcon />
					<TwitterIcon />
					<ChatBubbleIcon />
					<FacebookIcon />
					<YouTubeIcon />
					<EmailIcon />
				</div>
			</div>
		</>
	);
}
