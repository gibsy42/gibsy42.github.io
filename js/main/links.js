// ==================== кнопки ссылки =================
document.querySelectorAll('.mainBtn').forEach(btn => {
    const link = btn.getAttribute('data-link');
    if(link) {function openWindow(windowId, icon, title) {
        const win = document.getElementById(windowId);

        // показываем окно
        win.style.display = 'block';

        // ставим самое большое значение z-index
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;

        // добавляем кнопку в таскбар, если её нет
        addTaskbarButton(windowId, icon, title);

        // делаем её активной
        activateTaskButtonByWindow(windowId);
    }

        btn.addEventListener('click', () => {
            // если ссылка существует, открываем её
            window.location.href = link;
        });
    }
});

window.openUpdates = function() {
    const win = document.getElementById("updatesWindow");
    if (!win) return;

    win.style.display = "block";
    bringToFront(win);
}

window.closeUpdates = function() {
    document.getElementById("updatesWindow").style.display = "none";
}

// ==================== WINDOW MANAGER ====================
window.topZ = window.topZ || 10;

function bringToFront(win) {
    if (!win) return;
    window.topZ++;
    win.style.zIndex = window.topZ;
}

