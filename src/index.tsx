import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

const root = ReactDOMClient.createRoot(document.getElementById('container'));

root.render(
	<FluentProvider theme={teamsLightTheme}>
		<div>Hello World</div>
	</FluentProvider>,
);
