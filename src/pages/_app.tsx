import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>one doctor</title>
				<link
					rel='icon'
					type='image/x-icon'
					href='/public/images/favicon.ico'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}