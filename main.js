'use strict';
{
    const msgArray = [
        'ボタンを押して戦闘を開始してください。',
        '〇〇の攻撃。',
        '〇〇からの攻撃！',
        'ターン目',
        '勝ち!',
        'ゲームオーバー',
    ]
    let fitness = 100;
    let enemyFitness = 150;
    let count = 0;
    const countMessage = document.getElementById('count');
    const fitnessResult = document.getElementById('fitness');
    const enemyFitnessResult = document.getElementById('enemy-fitness');
    const message = document.querySelector('span');
    message.textContent = msgArray[0];
    update();

    function update() {
        fitnessResult.textContent = `体力:${fitness}`;
        enemyFitnessResult.textContent = `敵の体力:${enemyFitness}`;
        countMessage.textContent = `${count}${msgArray[3]}`;
        if ( enemyFitness <= 0 ) {
            console.log(`${msgArray[4]}`);
        }
        if ( fitness <= 50) {
            fitnessResult.classList.add('fiftyofless');
        } else if ( fitness <= 20 ) {
            fitnessResult.classList.add('twentyofless');
        } else if ( fitness <= 0 ) {
            console.log(`${msgArray[5]}`);
        }
    }
    function enemyAttack() {
        const r_enemyAttack = Math.floor(Math.random()*30);
        fitness = fitness - r_enemyAttack;
        message.textContent = `${msgArray[2]}${r_enemyAttack}のダメージを受けた`;
        update();
    }
    const attackButton = document.getElementById('attack-button');

    attackButton.addEventListener('click', ()=> {
        ++count;
        const r_attack = Math.floor(Math.random()*40);
        enemyFitness = enemyFitness - r_attack;
        update();
        message.textContent = `${msgArray[1]}${r_attack}のダメージ`;
        setTimeout(()=>{
            enemyAttack();

        },1000);
        
    },false);
}