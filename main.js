'use strict';
{
    const battleObj = {
        userName: 'ゆうしゃ',
        hitpoint: 100,
        magic: 20,
        herbs:3,
        count:0,
        tools:[
            ['やくそう',3,20]
        ],
        enemy: [
            ['スライム',300],
            [],
            [],
        ],
        commands : [
            ['こうげき'],
            ['かいふく'],
            ['まほう'],
        ],
        message : [
            ['モンスターが あらわれた！'],
            [`ゆうしゃの こうげき!モンスターに`],
            ['かいしんの いちげき！'],
            ['ミス！'],
            ['ゆうしゃに'],
            []
        ],
        update: function() {
            let hitpoint = document.getElementById('hitpoint');
            let enemyHitpoint = document.getElementById('enemyHitpoint');
            let magic = document.getElementById('magic');
            let count = document.getElementById('count');
            let herbs = document.getElementById('herbs');
            herbs.textContent = `やくそう×${this.herbs}個`;
            hitpoint.textContent = `体力：${this.hitpoint}`;
            enemyHitpoint.textContent = `敵の体力：${this.enemy[0][1]}`;
            magic.textContent = `魔力：${this.magic}`;
            count.textContent = `${this.count}ターン目`;
            let result = this.hitpoint;
            const recoverButton = document.getElementById('recoverButton');

            if ( this.herbs === 0 ) {
                recoverButton.classList.add('passive-button');
                herbs.style.color = 'red';
            }
            if ( result <=  0 ) {
                console.log('ゲームオーバー');
            }

        },
        attack: function() {
            const r_math = Math.floor(Math.random()*40);
            ++this.count;
            
            if ( r_math === 40 ) {
                message.textContent = `かいしんの いちげき！まものに ${r_math}のダメージ！`;
            } else if ( r_math === 0 ) {
                const r_message = Math.floor(Math.random()*3)+1;
                switch ( r_message ) {
                    case 1:
                        message.textContent =`ミス! まものに ダメージを あたえられない！`;
                    break;
                    case 2:
                        message.textContent =`まものは みをまもっている!`;
                    break;
                    case 3:
                        message.textContent =`まものは ひらりと みをかわした!`;
                    break;
                    case 4:
                        message.textContent = `まものは すばやく みをかわした！`
                    break;
                }
            } else {
                message.textContent = `ゆうしゃの こうげき! まものに ${r_math}のダメージ！`;
            }
            this.enemy[0][1] = this.enemy[0][1] - r_math;
            this.update();
            this.changeButton();
            setTimeout(()=> {
                this.enemyAttack();
                this.update();
            },1000);
        },
        recovery: function() {
            ++this.count;
            this.herbs = this.herbs - 1;
            this.hitpoint = this.hitpoint + this.tools[0][2];
            message.textContent = `${this.tools[0][0]}をのんだ！ \n ${this.tools[0][2]}かいふくした!`;
            this.update();
            this.changeButton();
            setTimeout(()=> {
                this.enemyAttack();
                this.update();
            },2000);
        },
        enemyAttack: function() {
            const r_math = Math.floor(Math.random()*30);
            this.hitpoint = this.hitpoint - r_math;
           if ( r_math === 30 ) {
            message.textContent = `つうこんの いちげき！ ゆうしゃは${r_math}のダメージを うけた！`;
           } else if ( r_math === 0 ) {
            message.textContent = `ミス！ ゆうしゃはダメージを うけない！`;
           } else {
            message.textContent = `まものの こうげき！ ゆうしゃは ${r_math}のダメージをうけた！`;
           }
            this.update();
        },
        init: function() {
            const userName = document.getElementById('userName');
            const enemyName = document.getElementById('enemyName');
            const attackButton = document.getElementById('attackButton');
            const recoverButton = document.getElementById('recoverButton');
            const magicButton = document.getElementById('magicButton');
            const message = document.getElementById('message');
            const enemyImage = document.getElementById('enemyImage');
            enemyImage.src = './1.png';
            enemyImage.classList.add('enemy-image');
            message.textContent = battleObj.message[0];
            userName.textContent = `名前：${this.userName}`;
            enemyName.textContent = `${this.enemy[0][0]}`;
            attackButton.textContent = this.commands[0];
            recoverButton.textContent = this.commands[1];
            magicButton.textContent = this.commands[2];
        },

        changeButton: function() {
            attackButton.disabled = true;
            recoverButton.disabled = true;
            magicButton.disabled = true;

            setTimeout(()=> {
                attackButton.disabled = false;
                recoverButton.disabled = false;
                magicButton.disabled = false; 
            },2000);
        },
  
    
    }
            const p = document.createElement('p');
            const div = document.getElementById('startButtonContainer');
            const startButton = document.getElementById('startButtonContainer');
            const commandsWrapper = document.getElementById('commandsWrapper');
            const statusWrapper = document.getElementById('statusWrapper');
            const container = document.getElementById('container');
            commandsWrapper.style.visibility = 'hidden';
            container.style.visibility = 'hidden';
        
            div.appendChild(p);
            p.textContent = 'まわりをたんけんする';
            p.classList.add('start-button');
            startButton.addEventListener('click', (e)=> {
                battleObj.init();
                battleObj.update();
                commandsWrapper.style.visibility = 'visible';
                container.style.visibility = 'visible';
                commandsWrapper.style.border = 'solid 1px #ddd';
                statusWrapper.style.border = 'solid 1px #ddd';
                
                div.classList.add('delete-button');
            },false);
            


            // battleObj.init();
            // battleObj.update();

    attackButton.addEventListener('click', () => {
        battleObj.attack();
    },false);

    recoverButton.addEventListener('click',()=> {
        battleObj.recovery();
    },false);


    magicButton.addEventListener('click',()=> {
        console.log('clicked');
    },false);


}
            