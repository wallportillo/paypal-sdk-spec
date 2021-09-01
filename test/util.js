
const { join } = require('path');
const klawSync = require('klaw-sync');
const markdownIt = require('markdown-it');
const { parse } = require('node-html-parser');
const { readFileSync } = require('fs-extra');
const babel = require('@babel/parser');

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

module.exports.htmlParse = (html) => {
    return parse(html, {
        lowerCaseTagName: true,
        comment: false
    });
};

module.exports.markdownParseFile = (path) => {
    return module.exports.htmlParse(markdown.render(readFileSync(path).toString()));
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

module.exports.getAllCodeBlocks = (node, language) => {
    return Array.from(module.exports.getAllElements(node, [ 'pre' ])).map((node) => {
        return module.exports.htmlParse(node.text).childNodes[0];
    }).filter(node => {
        return node.classList.contains(`language-${ language }`);
    }).map(node => {
        const code = node.innerHTML;

        if (!code) {
            throw new Error(`Code block has no code`);
        }

        return code;
    });
}

module.exports.parseJavaScript = (code) => {
    return babel.parse(code, {
        allowAwaitOutsideFunction: true,
        allowReturnOutsideFunction: true,
          plugins: [
            'jsx',
            'typescript'
        ],
    });
};
