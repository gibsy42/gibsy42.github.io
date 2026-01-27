function displayMoonPhase() {
    const astanaTimezone = 'Asia/Almaty';
    const now = new Date();
    const astanaNow = new Date(
        now.toLocaleString("en-US", { timeZone: astanaTimezone })
    );

    const currentDate = astanaNow.getDate();
    const currentMonth = astanaNow.getMonth() + 1;

    const ageOfMoon = Math.floor(
        (currentDate + 11 * currentMonth + 3) % 30.6
    );

    let moonPhase;
    let file;

    if (ageOfMoon < 1.5) {
        moonPhase = "New Moon";
        file = "newMoon.png";
    } else if (ageOfMoon < 7.5) {
        moonPhase = "Waxing Crescent";
        file = "waxingCrescent.png";
    } else if (ageOfMoon < 8.5) {
        moonPhase = "First Quarter";
        file = "firstQuarter.png";
    } else if (ageOfMoon < 12.5) {
        moonPhase = "Waxing Gibbous";
        file = "waxingGibbous.png";
    } else if (ageOfMoon < 15.5) {
        moonPhase = "Full Moon";
        file = "fullMoon.png";
    } else if (ageOfMoon < 21) {
        moonPhase = "Waning Gibbous";
        file = "waningGibbous.png";
    } else if (ageOfMoon < 23) {
        moonPhase = "Last Quarter";
        file = "thirdQuarter.png";
    } else {
        moonPhase = "Waning Crescent";
        file = "waningCrescent.png";
    }

    document.querySelector("#moonPhaseWindow .window-content").innerHTML = `
        <img src="moons/${file}" style="width:64px; display:block; margin:20px auto;">
        <p style="color:black; text-align:center; font-size:18px;">
            ${moonPhase}
        </p>
    `;
}
