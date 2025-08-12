terminalDesc = document.querySelector('.terminal-text');
terminalHeader = document.querySelector('.terminal-header');
// Adjust the font size based on the screen width

function updateFontSize() {
    if (window.innerWidth >= 2000) {
        terminalDesc.classList.remove('fs-sm-1');
        terminalDesc.classList.remove('fs-md-4');
        terminalDesc.classList.remove('fs-lg-1');
        terminalDesc.classList.remove('fs-5');
        terminalHeader.classList.remove('fs-sm-1');
        terminalHeader.classList.remove('display-md-4');
        terminalHeader.classList.remove('display-5');
    } else {
        terminalDesc.classList.add('fs-5');
        terminalDesc.classList.add('fs-sm-1');
        terminalDesc.classList.add('fs-md-4');
        terminalDesc.classList.add('fs-lg-1');
    }
}

// Run on load
updateFontSize();

// Run on resize
window.addEventListener('resize', updateFontSize);