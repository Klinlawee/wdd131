// Safety-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Populate Checklist
    function populateChecklist() {
        const checklistContainer = document.getElementById('checklist-items');
        if (!checklistContainer) return;
        
        checklistContainer.innerHTML = '';
        
        checklistItems.forEach((item, index) => {
            const checklistItem = document.createElement('div');
            checklistItem.className = 'checklist-item';
            checklistItem.innerHTML = `
                <input type="checkbox" id="item-${index}">
                <label for="item-${index}">${item}</label>
            `;
            checklistContainer.appendChild(checklistItem);
            
            // Add event listener to toggle checked class
            const checkbox = checklistItem.querySelector('input');
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    checklistItem.classList.add('checked');
                } else {
                    checklistItem.classList.remove('checked');
                }
            });
        });
    }

    // Checklist Actions
    const checkAllBtn = document.getElementById('check-all');
    const uncheckAllBtn = document.getElementById('uncheck-all');
    const printChecklistBtn = document.getElementById('print-checklist');

    if (checkAllBtn) {
        checkAllBtn.addEventListener('click', function() {
            document.querySelectorAll('#checklist-items input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = true;
                checkbox.parentElement.classList.add('checked');
            });
        });
    }

    if (uncheckAllBtn) {
        uncheckAllBtn.addEventListener('click', function() {
            document.querySelectorAll('#checklist-items input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
                checkbox.parentElement.classList.remove('checked');
            });
        });
    }

    if (printChecklistBtn) {
        printChecklistBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Initialize checklist
    populateChecklist();
});