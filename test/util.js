
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

module.exports.markdownParseFile = (path) => {
    return markdown.parse(readFileSync(path).toString());
};

module.exports.markdownWalk = function*(tree, nodeType) {
    const [ type, ...nodes ] = tree;

    for (const item of nodes) {
        if (!nodeType || item[0] === nodeType) {
            yield item;
        }

        if (Array.isArray(item)) {
            yield *module.exports.markdownWalk(item, nodeType);
        }
    }
};

module.exports.markdownGetAllLinks = (node) => {
    const result = [];

    for (const [ , { href } ] of module.exports.markdownWalk(node, 'link')) {
        result.push(href);
    }

    return result;
}