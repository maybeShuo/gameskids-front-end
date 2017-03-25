
import React from 'react';
import { render } from 'react-dom';

import { adapt } from '../base/util/Adapter';
import App from './components/App';

adapt();

function run()
{
    render(
        <App />,
        document.getElementById("root")
    );
}

run();
