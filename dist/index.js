export { test } from './core.js';
export { another } from './another/module.js';

function dynamic() {
    return import('./dynamic/index.js');
}

export { dynamic };
