
const { join, dirname } = require('path');
const { existsSync } = require('fs-extra');
const { findAllFiles, markdownParseFile, markdownWalk } = require('./util');

const ROOT = join(__dirname, '..');

for (const path of findAllFiles(ROOT, 'md')) {
    test(`Valid links in ${ path }`, () => {
        for (const [ , { href } ] of markdownWalk(markdownParseFile(path), 'link')) {
            if (href.indexOf('.') !== 0 && href.indexOf('/') !== 0) {
                continue;
            }

            const fullPath = join(dirname(path), href);

            if (!existsSync(fullPath)) {
                throw new Error(`File does not exist: ${ fullPath }`);
            }

            if (!fullPath.match(/.md$/)) {
                throw new Error(`Not a markdown file: ${ fullPath }`);
            }
        }
    });
}
