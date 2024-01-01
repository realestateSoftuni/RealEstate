function toggleCurrent(element) {
    // Remove "current" class from all elements
    const elements = document.querySelectorAll('.current');
    elements.forEach(el => el.classList.remove('current'));

    // Add "current" class to the clicked element
    element.classList.add('current');
}

export default toggleCurrent
