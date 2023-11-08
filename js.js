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
    "https://imagedelivery.net/ISo6CJNY0e5_7mxZ2B_Wzg/b940f822-5863-4f4e-8439-e64985f16901/public?exp=1699444746&sig=de162f758c8456c6f4ba0b9c3fd6abcb75208a3eed937a39ff8222355149194e",
    "https://blog.kakaocdn.net/dn/cYQTO1/btrznbnIxxf/e4NAgjst8TiHKJkS700GLK/img.gif",
    "https://i.namu.wiki/i/bHS1YaCRBGt4wPywBhIFXAuTXaUTGR5PJB3OHlGm0xOzTGRRWZLMKHyZBDp1-XtEE1k2kNdDOtPG2WJOmaN2bw.gif",
    "https://blog.kakaocdn.net/dn/tXoBH/btroxBbGh8M/kgi8KkKrZmF5InM7GBy1GK/img.gif",
    "https://d2x8kymwjom7h7.cloudfront.net/live/application_no/96001/default/COMMUNITY/a250352f24574344841ea4138c37d293/4390e9ff7379469eac5bd141dc4dcfa1.gif",
    "https://i.imgur.com/5Sh6RsF.gif",
    "https://file.instiz.net/data/file/20131016/3/f/7/3f73b22f11bcec9d1588007dba6f7772",
    "https://media.tenor.com/L_wc4wdG0x4AAAAC/%ED%95%B4%EB%A6%B0-%EA%B3%A0%EC%96%91%EC%9D%B4.gif",
    "https://file3.instiz.net/data/cached_img/upload/2023/06/22/13/2e15e1059dd38116b699eba2f2599887.gif",
    "https://pbs.twimg.com/media/DkWKEl0UYAA7O7U.jpg",
    "https://file3.instiz.net/data/file3/2023/05/15/9/6/e/96e294ee4d0e937cd612006a0d3830e7.gif",
    "https://media.tenor.com/vEq4kviU9nIAAAAC/%ED%95%B4%EB%A6%B0-%EA%B9%A8%EB%AC%BC%ED%95%98%ED%8A%B8.gif",
    "https://1.bp.blogspot.com/-rjEB1lXAYGg/YKKfXritErI/AAAAAAAAbRE/LJ9LTpcWkNc_BoYvRYIn8D435kKq9oMKgCEwYBhgLKtMDAL1OcqzVMD-fG_58GdDJOHwP7Il_3I-p_weED5YzGhimLd2Tjp9-pNi_HeFUfnM6zoTHJmBrE2G-tHbiOR89q7zlM_Fq5gUlKhqxD-MBHgL8KnS47bMWElubyrtz_NuFTyrsxjTEPGcQ7d1DDDunGd6r75Lfonj0i-H5wZDY1AwuS4WUQOfo6eG3v9Jw0Kkil082EqBinNzp6gGngJPqrZF2HBGfS4CS61x-HtpWi3OGepWi8B9lPc5AfswtwFQp2wavB-K6I2jgmRLPtLdTLSYiaP_YFp498Hx1pcjHbOR0xFJGCE20qVfAYupswU4vjahiHbot9w_mQoUdIvwomdOlh4eN3ETrkSI2mdkqROZFc7KbMOBoVwDoVY1nPK_I7ClKolx6dKNftSwS6XXThHTKPahbeWsYuZmau8kg2LMP00i9nTt6DOlYYQSIKNpbV4CITiZkyJ2x8A3zKjKBrGY7kLnWLwiekxg-4ndazhaih_B58SxG862y2kmtq0Y-4QYx4_rvC-q-Wi5vUHmEWQFatis_VaA5cRKLJyiP_2khbJ3P_Ety7fMTnKCrEiaRroKe-GN-lDCvag4x5t3hN65f6dfpxA1dtz7y1Gt0KqOmCHwwxMOKhQY/s500/RelievedWelldocumentedBobcat-size_restricted.gif",
    "https://t1.daumcdn.net/cafeattach/aVeZ/f55fb4048cf5d0467706820fb3455ed4679165e3",
    "https://storage.blip.kr/collection/5b8f2b32cda7313eb9fc0dc7974a9e76.gif",
    "",
    "",
    "",
    "",
    ""
    
]

let ran = Math.floor(Math.random() * 20);

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
