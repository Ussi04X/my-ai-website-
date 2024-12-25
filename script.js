// Update clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}

// Theme switcher
function initializeThemeSwitch() {
    const themeButton = document.getElementById('themeSwitch');
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);

    // Initialize theme switcher
    initializeThemeSwitch();
});
// Update date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Create greeting
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';
    
    greetingElement.textContent = `${greeting}, Ussi04X!`;
}

// Notes functionality
function initializeNotes() {
    const noteInput = document.getElementById('quickNote');
    const saveButton = document.getElementById('saveNote');
    const notesContainer = document.getElementById('savedNotes');

    // Load saved notes
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    savedNotes.forEach(note => {
        const noteElement = document.createElement('p');
        noteElement.textContent = note;
        notesContainer.appendChild(noteElement);
    });

    // Save new note
    saveButton.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const noteElement = document.createElement('p');
            noteElement.textContent = noteText;
            notesContainer.appendChild(noteElement);
            
            // Save to localStorage
            const notes = JSON.parse(localStorage.getItem('notes') || '[]');
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            
            noteInput.value = '';
        }
    });
}

// Update the initialization code
document.addEventListener('DOMContentLoaded', () => {
    // Previous initializations
    updateClock();
    setInterval(updateClock, 1000);
    initializeThemeSwitch();

    // New initializations
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setGreeting();
    initializeNotes();
});