let hasLogged = false;
function displayMoonPhase() {
    const astanaTimezone = 'Asia/Almaty';
    const now = new Date();
    const astanaNow = new Date(
        now.toLocaleString("en-US", { timeZone: astanaTimezone })
    );

    const moonIllumination = SunCalc.getMoonIllumination(astanaNow);
    const phase = moonIllumination.phase;
    
    let moonPhase;
    let file;

    if (phase >= 0 && phase < 0.03) {
        moonPhase = "New Moon";
        file = "newMoon.png";
    } else if (phase >= 0.03 && phase < 0.22) {
        moonPhase = "Waxing Crescent";
        file = "waxingCrescent.png";
    } else if (phase >= 0.22 && phase < 0.28) {
        moonPhase = "First Quarter";
        file = "firstQuarter.png";
    } else if (phase >= 0.28 && phase < 0.48) {
        moonPhase = "Waxing Gibbous";
        file = "waxingGibbous.png";
    } else if (phase >= 0.48 && phase < 0.52) {
        moonPhase = "Full Moon";
        file = "fullMoon.png";
    } else if (phase >= 0.52 && phase < 0.72) {
        moonPhase = "Waning Gibbous";
        file = "waningGibbous.png";
    } else if (phase >= 0.72 && phase < 0.78) {
        moonPhase = "Last Quarter";
        file = "thirdQuarter.png";
    } else if (phase >= 0.78 && phase < 0.97) {
        moonPhase = "Waning Crescent";
        file = "waningCrescent.png";
    } else {
        moonPhase = "New Moon";
        file = "newMoon.png";
    }

    const illumination = (moonIllumination.fraction * 100).toFixed(1);

    document.querySelector("#moonPhaseWindow .window-content").innerHTML = `
        <img src="moons/${file}" style="width:64px; display:block; margin:20px auto;">
        <p style="color:black; text-align:center; font-size:18px; position:relative; bottom:10px; ">
            ${moonPhase}
        </p>
        <p style="color:gray; text-align:center; font-size:14px; position:relative; bottom:18px; margin:0;">
            Illumination: ${illumination}%
        </p>
    `;
    
if (!hasLogged) {
        console.log(`moon phase - ${moonPhase}`);
        console.log(`Illumination - ${illumination}%`);
        hasLogged = true; // Устанавливаем в true, чтобы больше не заходить сюда
    }
}
displayMoonPhase();
