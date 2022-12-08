// We decided to choose One piece universe to create our cliker game.
// The berry is the money used in this manga.


let berries = 0;
let bps = 10; // Here, bps stands for "Berry per second"

var minions = [
    { id: 1, name: "Nami", cost: 100, bps: 100, owned: 0 },
    { id: 2, name: "Zoro", cost: 1000, bps: 2500, owned: 0 },
    { id: 3, name: "Luffy", cost: 5000, bps: 9500, owned: 0 },
    { id: 4, name: "Shanks", cost: 100000, bps: 1000000, owned: 0 }
];

function buyMinion(id) {
    if (berries >= minions[id].cost) {
    berries = berries - minions[id].cost;
    minions[id].owned++;
    bps = bps + minions[id].bps;
    // console.log (minions[id].owned)
    }
}
const bpsInterval = setInterval(function() {
    increment(bps);
    displayBPS();
}, 1000)

function increment(value) {
    addBerries(value);
    displayBerries();
}

function addBps(num) {
    gps += num;
    displayBPS();
}

function getGPS() {
    gps = 0;
    minions.forEach(element => gps+=(element.gps * element.owned));
}

minions.forEach(function (minion) {
console.log(minion.name)
console.log(minion.cost)
console.log(minion.bps)
bps += minion.bps * minion.owned;
})
console.log(bps);

function displayBPS() {
    document.querySelector("#bps").innerHTML = concate("You have", bps.toFixed(1), " bps")
}

function addBerries(x) {
    berries += x;
}

function displayBerries() {
    // console.log(berries);
    document.querySelector("#berries").innerHTML = concate("You have", berries.toFixed(1), "berries");
}

function concate(txt1, txt2, txt3) {
    const concate_txt = txt1 + " " + txt2 + " " + txt3;
    // console.log(concate_txt);
    return (concate_txt);
}

function displayMinion() {
    // console.log(minion);
    document.querySelector("#minion").innerHTML = minions;
}


