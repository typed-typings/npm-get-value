/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import get = require('get-value');
import assert = require('assert');

assert.equal(get({ a: 10 }, 'a'), 10);
