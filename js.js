let i = 0;


const quiz = [
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171084862741041273/0.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554978658684928/1.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554978906153000/2.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554979145224323/3.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171091981670293605/4.jpg",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171097456755351582/5.png",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171097239893065809/6.png",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171092439050760213/7.png",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554980810367136/8.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170554981078798356/9.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565145651580999/10.PNG",    
    "https://cdn.discordapp.com/attachments/1038804641644814459/1171085948239487056/11.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146159104020/12.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146398167200/13.PNG",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170565146591109140/14.PNG"
];


    document.querySelectorAll(".button")[0].disabled = true;
    document.querySelectorAll(".button")[1].disabled = true;
    document.querySelectorAll(".button")[2].disabled = true;
    document.querySelectorAll(".button")[4].disabled = true;
    document.querySelectorAll(".button")[5].disabled = true;
    document.querySelectorAll(".button")[6].disabled = true;

function disabled() {
    document.querySelectorAll(".button")[0].disabled = true;
    document.querySelectorAll(".button")[1].disabled = true;
    document.querySelectorAll(".button")[2].disabled = true;
    document.querySelectorAll(".button")[4].disabled = true;
    document.querySelectorAll(".button")[5].disabled = true;
    document.querySelectorAll(".button")[6].disabled = true;

}

const ans = [
    "BO", "BO", "AB", "BO", "BO", "AO", "AB", "AB", "AO", "BO", "AO", "BO", "AO", "AO", "AB"
]

const pics = [
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg",
    "https://cdn.thetitlenews.net/news/photo/202308/2161_3803_3724.jpg",
    "https://storage.blip.kr/collection/75d52a4bd1df6447ea07e3a6e3d1c873.gif",
    "data:image/png;base64,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",
    "https://www.urbanbrush.net/web/wp-content/uploads/edd/2017/08/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-08-28-%EC%98%A4%ED%9B%84-1.51.47-1024x795.png",
    "https://media.tenor.com/L_wc4wdG0x4AAAAC/%ED%95%B4%EB%A6%B0-%EA%B3%A0%EC%96%91%EC%9D%B4.gif",
    "https://file3.instiz.net/data/cached_img/upload/2023/06/22/13/2e15e1059dd38116b699eba2f2599887.gif",
    "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg"
    
]

let ran = Math.floor(Math.random() * 10);

document.querySelectorAll(".button").disabled = true;

function startDisabled()  {
    const target = document.getElementById('start');
    target.disabled = true;
}

function AllDisabled()  {
    document.querySelectorAll(".button")[0].disabled = false;
    document.querySelectorAll(".button")[1].disabled = false;
    document.querySelectorAll(".button")[2].disabled = false;
    document.querySelectorAll(".button")[4].disabled = false;
    document.querySelectorAll(".button")[5].disabled = false;
    document.querySelectorAll(".button")[6].disabled = false;
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
    document.getElementsById('설명').style.display = 'none';
}

function ps(){
    console.log(ran);
    document.getElementById('img').src = pics[ran];
    document.getElementsByClassName('ps')[0].style.display = 'none';
}

function yes(){
    document.getElementsByClassName('yes')[0].style.display = 'none';
    document.getElementsByClassName('ps')[0].style.display = 'block';
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
    AllDisabled();
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
    disabled()
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
    disabled()
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
    disabled()
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
    disabled()
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
    disabled()
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
        disabled()
        document.getElementsByClassName('yes')[0].style.display = 'block';  
    }

})
