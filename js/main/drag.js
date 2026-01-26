let topZ = 10;

function bringToFront(win) {
    if (!win) return;
    topZ++;
    win.style.zIndex = topZ;
}

function drag(win, bar, canRaise = true) {
    let x = 0, y = 0, mx = 0, my = 0;

    bar.onmousedown = e => {
        e.preventDefault();

        if (canRaise) bringToFront(win);

        mx = e.clientX;
        my = e.clientY;

        document.onmousemove = ev => {
            x = mx - ev.clientX;
            y = my - ev.clientY;
            mx = ev.clientX;
            my = ev.clientY;

            win.style.top = (win.offsetTop - y) + "px";
            win.style.left = (win.offsetLeft - x) + "px";
        };

        document.onmouseup = () => {
            document.onmousemove = null;
        };
    };

    if (canRaise) {
        win.addEventListener("mousedown", () => bringToFront(win));
    }
}

drag(document.getElementById("mainWindow"), document.getElementById("mainWindowBar"), false);
drag(document.getElementById("blogWindow"), document.getElementById("blogBar"));
drag(document.getElementById("guestbookWindow"), document.getElementById("guestbookBar"));
drag(document.getElementById("computerWindow"), document.getElementById("computerBar"));
drag(document.getElementById("updatesWindow"), document.getElementById("updatesBar"));
drag(document.getElementById("moonPhaseWindow"), document.getElementById("moonPhaseBar"));
drag(document.getElementById("minesweeperWindow"), document.getElementById("minesweeperBar"));




