let zIndexCounter = 20000;

// start
const startBtn = document.getElementById("start-btn");
if (startBtn) {
    startBtn.addEventListener("click", () => {
        console.log("Start pressed");
        // здесь потом будет меню Пуск
    });
}

// clock
function updateClock() {
    const now = new Date();
    const utcH = now.getUTCHours();
    const utcM = now.getUTCMinutes();

    const h = ((utcH + 5) % 24).toString().padStart(2, "0");
    const m = utcM.toString().padStart(2, "0");

    const clock = document.getElementById("win98-clock");
    if (clock) clock.textContent = `${h}:${m}`;
}
setInterval(updateClock, 60000);
updateClock();

//taskbar
function clearActiveTaskButtons() {
    document.querySelectorAll('.task-button').forEach(btn => btn.classList.remove('active'));
}

function activateTaskButtonByWindow(windowId) {
    clearActiveTaskButtons();
    const btn = document.getElementById('task-' + windowId);
    if (btn) btn.classList.add('active');
}

function addTaskbarButton(windowId, icon, title) {
    const taskbar = document.getElementById('task-buttons');
    if (!taskbar) return;
    if (document.getElementById('task-' + windowId)) return;

    const btn = document.createElement('div');
    btn.className = 'task-button';
    btn.id = 'task-' + windowId;

    btn.innerHTML = `
        <img src="${icon}" width="16" height="16">
        <span>${title}</span>
    `;

    btn.addEventListener('click', () => {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.style.display = 'block';
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;
        activateTaskButtonByWindow(windowId);
    });

    taskbar.appendChild(btn);
}

function removeTaskbarButton(windowId) {
    const btn = document.getElementById('task-' + windowId);
    if (btn) btn.remove();
}

function openWindow(windowId, icon, title) {
    const win = document.getElementById(windowId);
    if (!win) return;

    win.style.display = 'block';
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;

    addTaskbarButton(windowId, icon, title);
    activateTaskButtonByWindow(windowId);
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;

    win.style.display = 'none';
    removeTaskbarButton(windowId);
}

function makeWindowFocusable(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;

    win.addEventListener('mousedown', () => {
        activateTaskButtonByWindow(windowId);
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;
    });
}

// apps
function openUpdates() {
    openWindow('updatesWindow', 'MainResources/calendar.png', 'updates.exe');
}
function closeUpdates() { closeWindow('updatesWindow'); }

function openMoonPhase() {
    openWindow('moonPhaseWindow', 'MainResources/moonPhase.png', 'moon phase.exe');
    displayMoonPhase();
}
function closeMoonPhase() { closeWindow('moonPhaseWindow'); }

function openComputer() {
    openWindow('computerWindow', 'MainResources/computer.png', 'my Computer.exe');
}
function closeComputer() { closeWindow('computerWindow'); }

function openBlog() {
    openWindow('blogWindow', 'MainResources/microblog.png', 'microblog.exe');
}
function closeBlog() { closeWindow('blogWindow'); }

function openMinesweeper() {
    const win = document.getElementById('minesweeperWindow');
    if (!win) return;

    win.style.display = 'flex';
    win.style.width = '350px';
    win.style.height = '420px';
    win.style.top = '200px';
    win.style.left = '50%';
    win.style.transform = 'translateX(-50%)';

    zIndexCounter++;
    win.style.zIndex = zIndexCounter;

    addTaskbarButton('minesweeperWindow', 'MainResources/games.png', 'Minesweeper.exe');
    activateTaskButtonByWindow('minesweeperWindow');
}
function closeMinesweeper() { closeWindow('minesweeperWindow'); }

// BLOG 
function showPost(id) {
    document.querySelectorAll(".post").forEach(p => p.style.display = "none");
    const post = document.getElementById(id);
    if (post) post.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    addTaskbarButton('mainWindow', 'MainResources/browser.png', 'Internet Explorer.exe');

    ['mainWindow','blogWindow','updatesWindow','computerWindow','minesweeperWindow','moonPhaseWindow'].forEach(makeWindowFocusable);


    const blogBtn = document.getElementById("blogBtn");
    const blogWindow = document.getElementById("blogWindow");
    if (blogBtn && blogWindow) {
        blogBtn.addEventListener("click", () => {
            openBlog();
        });
    }
});





