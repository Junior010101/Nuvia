import { Component } from '@angular/core';

@Component({
  selector: 'app-wordwall',
  imports: [],
  templateUrl: './wordwall.html',
  styleUrl: './wordwall.css',
})
export class Wordwall {
  //   const words = [
  //   "SUBSTANTIVO",
  //   "ADJETIVO",
  //   "PREDICADO",
  //   "SUJEITO",
  //   "VERBO",
  //   "OBJETO",
  //   "PRONOME",
  //   "FRASE",
  //   "ORAÇÃO",
  //   "ARTIGO"
  // ];
  // const ROWS = 12;
  // const COLS = 12;
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÃÕÇ";
  // board:any[] = [];
  // placed:any[] = [];
  // foundWords = new Set();
  // boardEl = document.getElementById("board");
  // wordListEl = document.getElementById("wordList");
  // clearBtn = document.getElementById("clearBtn");
  // revealBtn = document.getElementById("revealBtn");
  // createEmptyBoard(){
  //   return Array.from({length: ROWS}, () => Array(COLS).fill(""));
  // }
  // function randomInt(n){ return Math.floor(Math.random()*n); }
  // const directions = [
  //   {dx:1, dy:0}, {dx:-1, dy:0}, {dx:0, dy:1}, {dx:0, dy:-1},
  //   {dx:1, dy:1}, {dx:1, dy:-1}, {dx:-1, dy:1}, {dx:-1, dy:-1}
  // ];
  // function canPlace(word, r, c, dir){
  //   const L = word.length;
  //   const endR = r + dir.dy * (L-1);
  //   const endC = c + dir.dx * (L-1);
  //   if(endR < 0 || endR >= ROWS || endC < 0 || endC >= COLS) return false;
  //   for(let i=0;i<L;i++){
  //     const rr = r + dir.dy * i;
  //     const cc = c + dir.dx * i;
  //     if(board[rr][cc] !== "" && board[rr][cc] !== word[i]) return false;
  //   }
  //   return true;
  // }
  // function placeWord(word){
  //   for(let t=0;t<100;t++){
  //     const dir = directions[randomInt(directions.length)];
  //     const r = randomInt(ROWS);
  //     const c = randomInt(COLS);
  //     if(canPlace(word, r, c, dir)){
  //       for(let i=0;i<word.length;i++){
  //         board[r + dir.dy * i][c + dir.dx * i] = word[i];
  //       }
  //       placed.push({word, r, c, dir});
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // function fillRandom(){
  //   for(let r=0;r<ROWS;r++){
  //     for(let c=0;c<COLS;c++){
  //       if(board[r][c] === ""){
  //         board[r][c] = alphabet[randomInt(alphabet.length)];
  //       }
  //     }
  //   }
  // }
  // function buildBoardUI(){
  //   boardEl.innerHTML = "";
  //   for(let r=0;r<ROWS;r++){
  //     for(let c=0;c<COLS;c++){
  //       const tile = document.createElement("div");
  //       tile.className = "tile";
  //       tile.dataset.r = r;
  //       tile.dataset.c = c;
  //       tile.textContent = board[r][c];
  //       boardEl.appendChild(tile);
  //     }
  //   }
  // }
  // function buildWordListUI(){
  //   wordListEl.innerHTML = "";
  //   words.forEach(w=>{
  //     const li = document.createElement("li");
  //     li.id = `w-${w}`;
  //     li.textContent = w;
  //     wordListEl.appendChild(li);
  //   });
  // }
  // let selecting = false;
  // let selectedTiles = [];
  // let selectionSet = new Set();
  // function tileKey(r,c){ return `${r},${c}`; }
  // function clearSelection(){
  //   selectedTiles.forEach(t=>t.classList.remove("selected"));
  //   selectedTiles = [];
  //   selectionSet.clear();
  // }
  // function onStart(e){
  //   selecting = true;
  //   clearSelection();
  //   const tile = e.target.closest(".tile");
  //   if(tile) selectTile(tile);
  // }
  // function selectTile(tile){
  //   const k = tileKey(tile.dataset.r, tile.dataset.c);
  //   if(selectionSet.has(k)) return;
  //   selectionSet.add(k);
  //   selectedTiles.push(tile);
  //   tile.classList.add("selected");
  // }
  // function onMove(e){
  //   if(!selecting) return;
  //   const p = (e.touches && e.touches[0]) || e;
  //   const el = document.elementFromPoint(p.clientX, p.clientY);
  //   if(el && el.classList.contains("tile")) selectTile(el);
  // }
  // function onEnd(){
  //   selecting = false;
  //   if(selectedTiles.length){
  //     const chars = selectedTiles.map(t=>t.textContent).join("");
  //     const rev = chars.split("").reverse().join("");
  //     const normalize = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();
  //     const found = words.find(w => normalize(w) === normalize(chars) || normalize(w) === normalize(rev));
  //     if(found && !foundWords.has(found)){
  //       foundWords.add(found);
  //       selectedTiles.forEach(t=>t.classList.add("found"));
  //       document.getElementById(`w-${found}`).classList.add("found");
  //     } else {
  //       clearSelection();
  //     }
  //   }
  //   selectedTiles = [];
  //   selectionSet.clear();
  // }
  // function revealAll(){
  //   placed.forEach(p=>{
  //     if(!foundWords.has(p.word)){
  //       foundWords.add(p.word);
  //       for(let i=0;i<p.word.length;i++){
  //         const rr = p.r + p.dir.dy * i;
  //         const cc = p.c + p.dir.dx * i;
  //         document.querySelector(`.tile[data-r='${rr}'][data-c='${cc}']`).classList.add("found");
  //       }
  //       document.getElementById(`w-${p.word}`).classList.add("found");
  //     }
  //   });
  // }
  // function init(){
  //   board = createEmptyBoard();
  //   placed = [];
  //   foundWords.clear();
  //   words.forEach(w=>placeWord(w));
  //   fillRandom();
  //   buildBoardUI();
  //   buildWordListUI();
  // }
  // boardEl.addEventListener("mousedown", onStart);
  // window.addEventListener("mousemove", onMove);
  // window.addEventListener("mouseup", onEnd);
  // boardEl.addEventListener("touchstart", e=>{ e.preventDefault(); onStart(e); }, {passive:false});
  // window.addEventListener("touchmove", e=>{ onMove(e); }, {passive:false});
  // window.addEventListener("touchend", onEnd);
  // clearBtn.addEventListener("click", clearSelection);
  // revealBtn.addEventListener("click", revealAll);
  // init();
}
