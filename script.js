let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

console.log(alphas);
console.log(nums);

let chessTable = document.createElement("div");

for (let i = 0; i < 8; i++) {
    let divRow = document.createElement("div");
    divRow.setAttribute("class", "div-row");

    for (let j = 0; j < 8; j++) {
        let divData = document.createElement("div");
        let boxId = alphas[j] + nums[i];

        if ((i + j) % 2 == 0) {
            divData.setAttribute("class", "piece-box white-box");
            divData.setAttribute("id", boxId);
            divRow.appendChild(divData);
        } else {
            divData.setAttribute("class", "piece-box black-box");
            divData.setAttribute("id", boxId);
            divRow.appendChild(divData);
        }
    }
    parentDiv.appendChild(divRow);
}

parentDiv.setAttribute("cellspacing", "0");
document.body.appendChild(parentDiv);