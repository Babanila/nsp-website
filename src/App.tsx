import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { Locale, getMessages } from './locale/getMessages';
import { errorMessages, generalMessages } from './locale/messages';
import logo from './logo.svg';
import './App.css';

function App({ onLocaleChange }: { onLocaleChange: React.Dispatch<React.SetStateAction<string>> }) {
	const { formatMessage, locale } = useIntl();
	const baba = 'baba';
	const baba2 = 'baba2';

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>{formatMessage(errorMessages.bug)}</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div>{formatMessage(generalMessages.greetings, { name: 'React' })}</div>
				</a>
				<button
					onClick={() => {
						onLocaleChange('de');
					}}
					disabled={locale === 'de'}
				>
					<span aria-label='de-flag' role='img'>
						🇩🇪
					</span>
					DE
				</button>
				<button
					onClick={() => {
						onLocaleChange('en');
					}}
					disabled={locale === 'en'}
				>
					<span aria-label='usa-flag' role='img'>
						🇺🇸
					</span>
					EN
				</button>
			</header>
		</div>
	);
}





function LocalizationWrapper() {
	const defaultLocale = navigator.language ?? 'en';
	const [locale, setLocale] = React.useState(defaultLocale);
	const [messages, setMessages] = React.useState({});

	React.useEffect(() => {
		const msg = getMessages(locale as Locale);
		setMessages(msg);
	}, [locale]);

	return messages ? (
		<IntlProvider locale={locale} messages={messages}>
			<App onLocaleChange={(lang) => setLocale(lang)} />
		</IntlProvider>
	) : null;
}

export default LocalizationWrapper;



