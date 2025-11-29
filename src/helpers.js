export { collect };

function collect(container, ...elements) {
    elements.forEach(e => container.appendChild(e));
}