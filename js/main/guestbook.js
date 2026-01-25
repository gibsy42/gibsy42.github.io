const guestbookWindow = document.getElementById("guestbookWindow");
const guestbookBtn = document.getElementById("guestbookBtn");

function closeGuestbook() { guestbookWindow.style.display = "none"; }

guestbookBtn.addEventListener("click", () => {
    guestbookWindow.style.display = "block";
    guestbookWindow.style.zIndex = 10000;
});
