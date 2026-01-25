const blogWindow = document.getElementById("blogWindow");
const blogBtn = document.getElementById("blogBtn");

function closeBlog() { blogWindow.style.display = "none"; }

function showPost(id) {
    document.querySelectorAll(".post").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";
}

blogBtn.addEventListener("click", () => {
    blogWindow.style.display = "block";
});
