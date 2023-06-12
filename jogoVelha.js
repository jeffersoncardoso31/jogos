
let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let squares = document.querySelectorAll('.cardJogoVelha');
let player = [];
let simbolos = ['X','O']
let reiniciar = document.querySelector('#btn');

setTimeout(()=>{
    player[0] = prompt('Jogador 1: ')
player[1] = prompt('Jogador 2: ')
}, 20)


reiniciar.addEventListener('click',()=>{
    window.location.reload()
 })

squares.forEach((square)=>{
    square.addEventListener('click', ondeClicou)
})

function ondeClicou(event){
    let square = event.target
    let posicao = square.id
    
    if(movimento(posicao)){
        let resposta = document.querySelector('#respostaJS');
        resposta.setAttribute('id','resposta');
        resposta.innerHTML = `<p> O jogo acabou</p><p>${player[playerTime].toUpperCase()} VENCEU !!!</p>`;
    }
    updateSquares(posicao)
}

function movimento(posicao){
    if(gameOver){
        return;
    }
    if(board[posicao] == ''){
        board[posicao] = simbolos[playerTime]

        gameOver = vitoria()
        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }
    return gameOver
}
function updateSquares(posicao){
    let square = document.getElementById(posicao.toString());
    let simbolo = board[posicao]
    square.innerHTML = `<p>${simbolo}</p>`
}
function vitoria(){
    let posVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < posVitoria.length; i++){
        let seq = posVitoria[i];
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]
       
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            
            return true
        }
    }
    return false
}
