
const { join } = require('path');
const klawSync = require('klaw-sync');
const markdownIt = require('markdown-it');
const { parse } = require('node-html-parser');
const { readFileSync } = require('fs-extra');

const markdown = markdownIt();

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
    return parse(markdown.render(readFileSync(path).toString()), {
        lowerCaseTagName: true,
        comment: false
    });
};

module.exports.getAllElements = function*(node, nodeTypes = []) {
    if (!nodeTypes.length || nodeTypes.includes(node.rawTagName)) {
        yield node;
    }

    for (const childNode of node.childNodes) {
        yield *module.exports.getAllElements(childNode, nodeTypes);
    }
};

module.exports.getAllLinks = (node) => {
    return Array.from(module.exports.getAllElements(node, [ 'a' ])).map(node => {
        const href = node.getAttribute('href');

        if (!href) {
            throw new Error(`Link node has no href`);
        }

        return href;
    });
}

module.exports.getAllHeaders = (node) => {
    return Array.from(module.exports.getAllElements(node, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ])).map(node => {
        const headerText = node.text;

        if (!headerText) {
            throw new Error(`Header node has no header text`);
        }

        return headerText;
    });
}
