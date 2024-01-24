'use strict';
{
    const msgArray = [
        'まもののけはいがたちこめている',
        'ゆうしゃの　こうげき！',
        'ゆうしゃは　スライムから',
        'ターン目',
        'スライムをたおした！',
        'ゲームオーバー',
        'やくそうを飲んだ',
        'やくそう',
        'スライムがあわられた！',
        'かいしんの　いちげき！　スライムに',
        'ミス！　スライムにダメージを　あたえられない！',
        'つうこんの　いちげき！　ゆうしゃはスライムの　ダメージをうけた！',
        'ミス！　ゆうしゃはダメージを　うけない！',

    ]
    let fitness = 100;
    let enemyFitness = 300;
    let count = 0;
    let remainHerbs = 3;
    const countMessage = document.getElementById('count');
    const fitnessResult = document.getElementById('fitness');
    const enemyFitnessResult = document.getElementById('enemy-fitness');
    const recoveryButton = document.getElementById('recovery-button');
    const attackButton = document.getElementById('attack-button');
    const restHerbs = document.getElementById('rest-herbs');
    const message = document.querySelector('span');
    message.textContent = msgArray[0];
    update();

    function update() {
        fitnessResult.textContent = `体力:${fitness}`;
        enemyFitnessResult.textContent = `敵の体力:${enemyFitness}`;
        restHerbs.textContent = `${msgArray[7]}×${remainHerbs}`;
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
        } else {
            fitnessResult.classList.add('fitness');
        }

        
    }
    function enemyAttack() {
        const r_enemyAttack = Math.floor(Math.random()*30);
        fitness = fitness - r_enemyAttack;
        message.textContent = `${msgArray[2]}${r_enemyAttack}のダメージを受けた`;
        update();
    }

        attackButton.disabled = true;
        recoveryButton.disabled = true;

    const btnDisabled = () => {
        
        attackButton.disabled = true;
        recoveryButton.disabled = true;
        setTimeout(()=> {
            
            attackButton.disabled = false;
            recoveryButton.disabled = false;
            if ( remainHerbs === 0 ) {
                recoveryButton.disabled = 'none';
            }
        },1500);
    }

   
    attackButton.addEventListener('click', (e)=> {
        ++count;
        const r_attack = Math.floor(Math.random()*40);
        enemyFitness = enemyFitness - r_attack;
        btnDisabled();
        update();
        message.textContent = `${msgArray[1]}${r_attack}のダメージ！！`;
        setTimeout(()=>{
            enemyAttack();
        },1000);
    },false);

    function recoveryFunc() {
        ++count;
        --remainHerbs;
        const recovery = 20;
        fitness = fitness + recovery;
        btnDisabled();
        update();
        message.textContent = `${msgArray[6]}を飲んだ！${recovery}回復した！`;
        setTimeout(()=>{
            enemyAttack();
            
        },1000);
    }
    recoveryButton.addEventListener('click', (e)=> {
        recoveryFunc();
    },false);

    document.getElementById('start-game').addEventListener('click',(e)=> {
        e.target.classList.add('deleteButton');
        message.textContent = msgArray[8];
        attackButton.disabled = false;
        recoveryButton.disabled = false;
    },false);
}