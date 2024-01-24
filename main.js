'use strict';
{
    const msgArray = [
        '〇〇の攻撃。',
        '〇〇からの攻撃！'

    ]
    let fitness = 200;
    let enemyFitness = 300;
    const fitnessResult = document.getElementById('fitness');
    const enemyFitnessResult = document.getElementById('enemy-fitness');
    const message = document.querySelector('span');
    update();

    function update() {
        fitnessResult.textContent = `体力:${fitness}`;
        enemyFitnessResult.textContent = `敵の体力:${enemyFitness}`;
    }
    function enemyAttack() {
        const r_enemyAttack = Math.floor(Math.random()*20);
        fitness = fitness - r_enemyAttack;
        message.textContent = `${msgArray[1]}${r_enemyAttack}のダメージを受けた`;
        update();
    }
    const attackButton = document.getElementById('attack-button');
    attackButton.addEventListener('click', ()=> {
        const r_attack = Math.floor(Math.random()*40);
        enemyFitness = enemyFitness - r_attack;
        update();
        message.textContent = `${msgArray[0]}${r_attack}のダメージ`;
        setTimeout(()=>{
            enemyAttack();

        },1000);

    },false);
}