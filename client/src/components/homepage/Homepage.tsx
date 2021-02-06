import Header from 'components/homepage/Header';
import Banner from 'components/homepage/Banner';
import Content from 'components/homepage/Content';
import DiscordWidget from 'components/discord/DiscordWidget';

export default function Homepage() {
	return (
		<>
			<Header />
			<Banner />
			<Content />
			<DiscordWidget />
		</>
	);
}
