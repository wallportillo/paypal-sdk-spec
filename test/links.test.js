
const { join, dirname } = require('path');
const { existsSync } = require('fs-extra');
const { findAllFiles, markdownParseFile, markdownGetAllLinks } = require('./util');
const { SPEC_ROOT, SPEC_EXTENSION } = require('./constants');

for (const path of findAllFiles(SPEC_ROOT, SPEC_EXTENSION)) {
    test(`Valid links in ${ path }`, () => {
        for (const href of markdownGetAllLinks(markdownParseFile(path))) {
            if (href.indexOf('.') !== 0 && href.indexOf('/') !== 0) {
                continue;
            }

            const fullPath = join(dirname(path), href);

            if (!existsSync(fullPath)) {
                throw new Error(`File does not exist: ${ fullPath }`);
            }

            if (!fullPath.endsWith(`.${ SPEC_EXTENSION }`)) {
                throw new Error(`Not a .${ SPEC_EXTENSION } file: ${ fullPath }`);
            }
        }
    });
}
