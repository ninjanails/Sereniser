// Replace with code that does some more bits and read up on better eways to reace DOM elements 
function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/pie/gi, 'apple');
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            replaceText(childNode);
        }
    }
}
replaceText(document.body);