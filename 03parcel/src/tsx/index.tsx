import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../sass/mystyles.scss';
import { HelloWorldComponent } from './hello';

ReactDOM.render(<HelloWorldComponent />, document.getElementById('logoContainer'));