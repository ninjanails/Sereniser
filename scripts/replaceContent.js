// think about moving out to own file if this get's longer
const replacementWords = {
    "where": "were",
    "to": "too",
    // "google": "test",
};

function replaceText(node, replacementWords) {
    if (node.nodeType === Node.TEXT_NODE) {
        let content = node.textContent;
        Object.keys(replacementWords).forEach(search => {
            const replace = replacementWords[search];
            const regex = new RegExp(search, 'gi');
            content = content.replace(regex, replace);
        });
        node.textContent = content;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            replaceText(childNode, replacementWords);
        }
    }
}

replaceText(document.body, replacementWords);