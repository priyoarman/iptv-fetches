const baseUrl = "http://s.rocketdns.info:8080/live/monstercable/Dq6jjknxCr/";
let links = "";

for (let i = 2400; i <= 2700; i++) {
    links += `${baseUrl}${i}.ts\n`;
}

// Option 1: Log to console
console.log(links);