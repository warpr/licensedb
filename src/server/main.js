/*

server.js -- this file is part of the licensedb.org server.
copyright 2012,2013 Kuno Woudt

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License.  You may
obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied.  See the License for the specific language governing
permissions and limitations under the License.

*/

var http = require ('http');
var negotiate = require ('./negotiate');

exports.server = function (base_url) {

    negotiate.init (base_url);

    return function (request, response) {
        negotiate.content (request, response);
    };

};

exports.http = http.createServer (exports.server ('https://licensedb.org'));
