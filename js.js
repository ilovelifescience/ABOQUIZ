let i = 0;


const quiz = [
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554978436390973/0.PNG?ex=65597746&is=65470246&hm=15c672112735f3740c5d99b4a8f1d9edd97485f332e9d8c7a3a3516caa16f371&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554978658684928/1.PNG?ex=65597746&is=65470246&hm=b5414089ce563dde25377f29046b8431de7e893bc4a58230bcfdf1e6f4adfbe5&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554978906153000/2.PNG?ex=65597746&is=65470246&hm=f2abc340af3e7b90e9603a167ce4d396eca649718dbbc2496345fb21b29580dd&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554979145224323/3.PNG?ex=65597746&is=65470246&hm=e1ab5342aa12bb0a8e1b2f1581ca648955f478a84059e67619f1c7379a0ec459&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554979413667982/4.PNG?ex=65597746&is=65470246&hm=ff55951d2598208aa49d791e5d5635566afefb6d17eb71535be17645ebcc2f66&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554979828899911/5.PNG?ex=65597747&is=65470247&hm=e8a86ce184f4caca12f96990bee51bd79f0762d27f932f39e8415ac2f38c1d08&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554980143468595/6.PNG?ex=65597747&is=65470247&hm=77cb79f5def7bac1b57207db9a432ab4cfe38f8d63adc44392f1b38f96c3a257&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554980554518559/7.PNG?ex=65597747&is=65470247&hm=59f239b0ca6f38af05502640757534b641b281ac18e0fa7f6f698da27f8d49b2&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554980810367136/8.PNG?ex=65597747&is=65470247&hm=62d23f7a69333545fa5e34cf34ac1896d9e99c0121cbd6c04708ec6563d09779&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554981078798356/9.PNG?ex=65597747&is=65470247&hm=1138bce91dca183c24db37dac848aa2eacb244960433b7d46e28d6443ad71092&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565145651580999/10.PNG?ex=655980be&is=65470bbe&hm=2686966ad02e9808a3ad1fab95b46d1e858f27e61df776980e2b3a4bb886233d&",    
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565145932603402/11.PNG?ex=655980be&is=65470bbe&hm=f0b644475373a1859abd1ba8cba47e8b845ca77907372d3281809d53dd658b04&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146159104020/12.PNG?ex=655980be&is=65470bbe&hm=7069b98f9ae1eca44adafcb0590cd7238e34b2f12a2423df1e891002d9a068a0&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146398167200/13.PNG?ex=655980be&is=65470bbe&hm=d9da2beafb1eb42a2b1a0113eb064ca2f9a05cb1733a2defe0b9388c3254f348&",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146591109140/14.PNG?ex=655980be&is=65470bbe&hm=19fed3747f1ebf2a6c9da153d08939944e6c24e8457e4fa82e4e123a657fb685&"
];

const ans = [
    "BO", "BO", "AB", "BO", "BO", "AB", "AO", "AO", "AO", "BO", "AO", "AB", "AO", "AO", "AB"
]


function startDisabled()  {
    const target = document.getElementById('start');
    target.disabled = true;
}

function Disabled()  {
    const target = document.getElementById('설명');
    target.disabled = true;
}

function wrong(){
    document.getElementsByClassName('wrong')[0].style.display = 'none';
}

function right(){
    document.getElementsByClassName('right')[0].style.display = 'none';
}

function no(){
    document.getElementsById('설명')[0].style.display = 'none';
}


function yes(){
    document.getElementsByClassName('yes')[0].style.display = 'none';
    document.getElementById('img').src = "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg";
}

document.getElementById('start').addEventListener('click', function(){
    document.getElementById('img').src = quiz[i];
    console.log(img)
    startDisabled();
})

document.getElementById('설명').addEventListener('click', function(){
    Disabled()
    document.getElementById('img').src = "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146855358484/2986a8b51a706d9f.PNG?ex=655980bf&is=65470bbf&hm=1c9f79c9a3b73bc73d9c536282889e419164f75d2e6fae841d0dc4c3cfb06982&";
})

document.getElementById('start').addEventListener('click', function(){
    document.getElementById('img').src = quiz[i];
})

document.getElementById('AA').addEventListener('click', function(){
    if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
        document.getElementsByClassName('right')[0].style.display = 'block';
        i++;
        document.getElementById('img').src = quiz[i];
    }
    else{
        document.getElementsByClassName('wrong')[0].style.display = 'block';
    }
if(i == 15){
    document.getElementsByClassName('yes')[0].style.display = 'block';  
}

})

document.getElementById('BB').addEventListener('click', function(){
    if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
        document.getElementsByClassName('right')[0].style.display = 'block';
        i++;
        document.getElementById('img').src = quiz[i];
    }
    else{
        document.getElementsByClassName('wrong')[0].style.display = 'block';
    }
if(i == 15){
    document.getElementsByClassName('yes')[0].style.display = 'block';  
}

})

document.getElementById('AO').addEventListener('click', function(){
    if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
        document.getElementsByClassName('right')[0].style.display = 'block';
        i++;
        document.getElementById('img').src = quiz[i];
    }
    else{
        document.getElementsByClassName('wrong')[0].style.display = 'block';
    }
if(i == 15){
    document.getElementsByClassName('yes')[0].style.display = 'block';  
}

})

document.getElementById('BO').addEventListener('click', function(){
    if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
        document.getElementsByClassName('right')[0].style.display = 'block';
        i++;
        document.getElementById('img').src = quiz[i];
    }
    else{
        document.getElementsByClassName('wrong')[0].style.display = 'block';
    }
if(i == 15){
    document.getElementsByClassName('yes')[0].style.display = 'block';  
}

})

document.getElementById('OO').addEventListener('click', function(){
    if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
        document.getElementsByClassName('right')[0].style.display = 'block';
        i++;
        document.getElementById('img').src = quiz[i];
    }
    else{
        document.getElementsByClassName('wrong')[0].style.display = 'block';
    }
if(i == 15){
    document.getElementsByClassName('yes')[0].style.display = 'block';  
}

})

document.getElementById('AB').addEventListener('click', function(){
    if(i != 14)
        if(document.getElementById(this.getAttribute('id')).getAttribute('id')==ans[i]){
            document.getElementsByClassName('right')[0].style.display = 'block';
            i++;
            document.getElementById('img').src = quiz[i];
        }
        else{
            document.getElementsByClassName('wrong')[0].style.display = 'block';
        }
    else{
        document.getElementsByClassName('yes')[0].style.display = 'block';  
    }

})
