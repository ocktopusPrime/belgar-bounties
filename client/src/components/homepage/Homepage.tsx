import Header from 'components/navBar/NavBar';
import Banner from 'components/homepage/Banner';
import Content from 'components/homepage/Content';
import DiscordWidget from 'components/discord/DiscordWidget';

export default function Homepage() {
	return (
		<>
			<Banner />
			<Content />
			<DiscordWidget />
		</>
	);
}
