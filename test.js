async function updateStatus() {
    try {
        const res = await fetch("status.json?_=" + Date.now());
        const data = await res.json();

        const now = Date.now();
        const lastUpdate = new Date(data.last_update).getTime();
        const onlineSince = new Date(data.online_since).getTime();

        const diffLastMs = now - lastUpdate;

        let diffMs;
        let label;
        let color;

        if (diffLastMs <= 60_000) {
            diffMs = now - onlineSince;
            label = "Online for";
            color = "#047826";
        } else {
            diffMs = diffLastMs;
            label = "Offline for";
            color = "#b00202";
        }

        const diffMin = Math.floor(diffMs / 60000);
        const h = Math.floor(diffMin / 60);
        const m = diffMin % 60;

        let timeText = "";
        if (h > 0) timeText += `${h}h `;
        timeText += `${m}min`;

        const statusEl = document.getElementById("pcStatus");
        statusEl.style.color = color;
        statusEl.textContent = `${label} ${timeText.trim()}`;

        // --- ПК ресурсы ---
        const stats = data.pc_stats;
        document.getElementById("cpu").textContent = `CPU: ${stats.cpu_percent}% ${stats.cpu_temp ? `(${stats.cpu_temp}°C)` : ''}`;
        document.getElementById("gpu").textContent = `GPU: ${stats.gpu_percent}%`;
        document.getElementById("ram").textContent = `RAM: ${stats.ram}`;
        document.getElementById("disks").textContent = Object.entries(stats.disks).map(([d, v]) => `${d}: ${v}`).join(' | ');

    } catch (e) {
        const statusEl = document.getElementById("pcStatus");
        statusEl.textContent = "Status error";
        statusEl.style.color = "orange";
        console.error("Status fetch error:", e);
    }
}

updateStatus();
setInterval(updateStatus, 30000);
