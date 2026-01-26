function displayMoonPhase() {
    const phases = [
        {name:"New Moon", file:"newMoon.png"},
        {name:"Waxing Crescent", file:"waxingCrescent.png"},
        {name:"First Quarter", file:"firstQuarter.png"},
        {name:"Waxing Gibbous", file:"waxingGibbous.png"},
        {name:"Full Moon", file:"fullMoon.png"},
        {name:"Waning Gibbous", file:"waningGibbous.png"},
        {name:"Last Quarter", file:"thirdQuarter.png"},
        {name:"Waning Crescent", file:"waningCrescent.png"}
    ];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const c = (year % 100) - Math.floor((year % 100) / 19) * 19;
    const age = (day + Math.floor((month + 1) * 26 / 10) + c) % 30;
    const index = Math.floor(age / 3.69) % 8;

    const phase = phases[index];

    const contentDiv = document.querySelector("#moonPhaseWindow .window-content");
    contentDiv.innerHTML = `
        <img src="moons/${phase.file}" style="width:64px; display:block; margin:20px auto;">
        <p style="color:black; text-align:center; font-size:18px;">${phase.name}</p>
    `;
}
