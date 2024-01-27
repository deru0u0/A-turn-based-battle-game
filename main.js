'use strict';
{
    const battleObj = {
        userName: 'ゆうしゃ',
        hitpoint: 100,
        magic: 20,
        enemyHitpoint: 300,
        count:0,
        tools:[
            ['やくそう', 3, 20],
        ],
        enemy: [
            ['スライム'],
            [],
            [],
        ],
        commands : [
            ['こうげき'],
            ['かいふく'],
            ['まほう'],
        ],
        message : [
            ['まもののけはいがたちこめている'],
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
            let result = this.hitpoint;
            hitpoint.textContent = `体力：${this.hitpoint}`;
            enemyHitpoint.textContent = `敵の体力：${this.enemyHitpoint}`;
            magic.textContent = `魔力：${this.magic}`;
            count.textContent = `${this.count}ターン目`;
            if ( result >= 50 ) {
                hitpoint.classList.add('hitpoint');
            } else if ( result >= 20 ) {
                hitpoint.classList.add('fiftyofless');
            } else if ( result >= 1) {
                hitpoint.classList.add('twentyofless');
            } else {
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
            this.enemyHitpoint = this.enemyHitpoint - r_math;
            this.update();
            setTimeout(()=> {
                this.enemyAttack();
            },1000);
        },
        recovery: function() {
            ++this.count;
            this.hitpoint = this.hitpoint + this.tools[0][2];
            message.textContent = `${this.tools[0][0]}をのんだ！ \n ${this.tools[0][2]}かいふくした!`;
            this.update();
            setTimeout(()=> {
                this.enemyAttack();
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
            message.textContent = battleObj.message[0];
            userName.textContent = `名前：${this.userName}`;
            enemyName.textContent = `${this.enemy[0]}`;
            
            attackButton.disabled = true;
            recoverButton.disabled = true;
            magicButton.disabled = true;

            
        },
        disabled: function() {
            attackButton.disabled = true;
            recoverButton.disabled = true;
            magicButton.disabled = true;

            setTimeout(()=> {
                attackButton.disabled = false;
                recoverButton.disabled = false;
                magicButton.disabled = false;   
            },2000);
        }

    }
}
