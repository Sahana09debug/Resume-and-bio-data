function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Find the specific content container inside the section
        const content = section.querySelector('.collapsible-content');
        if (content) {
            // Add or remove the 'hidden' class to trigger the CSS animation
            content.classList.toggle('hidden');
        }
    }
}
