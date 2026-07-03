const baseUrl = "http://91.208.115.26:80/play/live.php?mac=00:1B:79:44:18:49&stream=";
let links = "";

for (let i = 1745080; i <= 1745124; i++) {
    links += `${baseUrl}${i}.&extension=m3u8\n`;
}

// Option 1: Log to console
console.log(links);