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
    document.getElementsById('설명')[0].style.display = 'none';
}

function ps(){
    document.getElementById('img').src = "https://cdn.discordapp.com/attachments/1038804641644814459/1170569522617524305/KakaoTalk_20231105_124403479.jpg";
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
