// Working on Functionality

let output = document.querySelector('.output');
let btns = document.querySelectorAll('.button');

btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        let target = event.target.innerText;

        switch(target){
            case 'RESET':
                output.innerText = '';
                break;
            case 'DEL':
                if(output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    output.innerText = eval(output.innerText);
                } catch (error) {
                    output.innerText = 'Error!';
                }
                break;
            default:
                output.innerText += target;
                output.innerText = output.innerText.toLocaleString("en-US")
        }
        
    })
})

const balls = document.querySelectorAll('.ball');

balls.forEach(function(ball){
    ball.addEventListener('click', function(){
        for(let i = 0; i < balls.length; i++){
            balls[i].classList.remove('show-ball');
            document.body.classList.remove('first-theme', 'second-theme', 'third-theme')
        }

        ball.classList.add('show-ball');
        let theme = ball.dataset.theme;
        document.body.classList.add(theme);
    })
})