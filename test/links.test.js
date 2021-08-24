
const { join, dirname } = require('path');
const { existsSync } = require('fs-extra');
const { findAllFiles, markdownParseFile, markdownGetAllLinks, markdownGetAllHeaders, dasherize } = require('./util');
const { SPEC_ROOT, SPEC_EXTENSION } = require('./constants');

for (const path of findAllFiles(SPEC_ROOT, SPEC_EXTENSION)) {
    test(`Valid links in ${ path }`, () => {
        const node = markdownParseFile(path);

        for (const href of markdownGetAllLinks(node)) {
            if (href.indexOf('.') === 0 || href.indexOf('/') === 0) {
                const fullPath = join(dirname(path), href);

                if (!existsSync(fullPath)) {
                    throw new Error(`File does not exist: ${ fullPath }`);
                }

                if (!fullPath.endsWith(`.${ SPEC_EXTENSION }`)) {
                    throw new Error(`Not a .${ SPEC_EXTENSION } file: ${ fullPath }`);
                }
            }

            if (href.indexOf('#') === 0) {
                let found = false;
                for (const header of markdownGetAllHeaders(node)) {
                    if (`#${ dasherize(header) }` === href) {
                        found = true;
                    }
                }

                if (!found) {
                    throw new Error(`Could not find header with id ${ href } in page`);
                }
            }
        }
    });
}
