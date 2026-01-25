const copyBtn = document.getElementById("copy-btn");
const buttonCode = document.getElementById("button-code");

copyBtn.addEventListener("click", () => {
    buttonCode.select();
    buttonCode.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Click to copy!";
    }, 3000); 
});
