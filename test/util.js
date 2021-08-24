
const { join } = require('path');
const klawSync = require('klaw-sync');
const { markdown } = require('markdown');
const { readFileSync } = require('fs-extra');

module.exports.findAllFiles = (dir, extension) => {
    return klawSync(dir, {
        nodir: true,
        traverseAll: true,
        filter: ({ path }) => {
            if (extension && !path.match(new RegExp(`.${ extension }$`))) {
                return false;
            }

            return true;
        }
    }).map(({ path }) => {
        return path;
    });
};

module.exports.findAllDirectories = (dir) => {
    return [
        dir,
        ...klawSync(dir, {
            nofile: true,
            traverseAll: true
        }).map(({ path }) => {
            return path;
        })
    ];
};

module.exports.dasherize = (str) => {
    return str.toLowerCase().replace(/[\s+_]+/g, '-');
};

module.exports.markdownParseFile = (path) => {
    return markdown.parse(readFileSync(path).toString());
};

module.exports.markdownGetAllElements = function*(tree, nodeType) {
    const [ type, ...nodes ] = tree;

    for (const item of nodes) {
        if (!nodeType || item[0] === nodeType) {
            yield item;
        }

        if (Array.isArray(item)) {
            yield *module.exports.markdownGetAllElements(item, nodeType);
        }
    }
};

module.exports.markdownGetAllLinks = (node) => {
    return Array.from(module.exports.markdownGetAllElements(node, 'link')).map(([ , { href } ]) => {
        if (!href) {
            throw new Error(`Link node has no href`);
        }

        return href;
    });
}

module.exports.markdownGetAllHeaders = (node) => {
    return Array.from(module.exports.markdownGetAllElements(node, 'header')).map(([ ,, headerText ]) => {
        if (!headerText) {
            throw new Error(`Header node has no header text`);
        }

        return headerText;
    });
}