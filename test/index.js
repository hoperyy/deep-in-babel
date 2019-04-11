const babel = require('babel-core');
const types = require('babel-types');

const plugin = require('./plugin/index.js');

const visitor = plugin({ types });

const code = `
    function square(n, t) {
        return n * n;
    }

    var n = 1;

    import { Select as MySelect, Pagination } from 'xxx-ui';
    // import * as UI from 'xxx-ui';
`;

const result = babel.transform(code, {
    plugins: [
        [
            visitor,
            {
                "libraryName": "xxx-ui",
                "camel2DashComponentName": true,
                "customSourceFunc": (componentName) => `./xxx-ui/src/components/ui-base/${componentName}/${componentName}`
            }
        ]
    ]
});

console.log(result.code);

