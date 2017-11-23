import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import AppSkinned from './AppSkinned';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppSkinned />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
