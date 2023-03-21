const bolgeler={
    messi:{
        soru:"Messi Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["800","790"],
        cevap:"790"
    },
    ronaldo:{
        soru:"Ronaldo Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["807","837"],
        cevap:"807"
    },
    quaresma:{
        soru:"Quaresma Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["73","150"],
        cevap:"73"
    }
};


let bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,alanlar,secilenBolge;

//3.adım:imagemap içindeki alanların herbirini for döngüsüyle dolaşarak olay yakalama
alanlar=document.getElementsByTagName("img");
[...alanlar].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilenBolge=alan.getAttribute("title");
    soruyuGoster(secilenBolge);
  });
});

function soruyuGoster(secilenBolge){
    bilgiler=bolgeler[secilenBolge];
    soru=bilgiler['soru'];
    secenekler=bilgiler['secenekler'];
    dogruCevap=bilgiler.cevap;
    console.log(dogruCevap);
    
    document.getElementById("seceneklerListesi").innerHTML = "";
    document.getElementById("soruBaslik").textContent = soru;


    secenekler.forEach((secenek)=>{
      
      const yeniSecenek=document.createElement("li");
      const yeniRadio=document.createElement("input");

      yeniSecenek.innerHTML=secenek;
      yeniRadio.type="radio";
      yeniRadio.name="yeniSecenek";
      yeniRadio.value=secenek;

      yeniSecenek.appendChild(yeniRadio);
      document.getElementById("seceneklerListesi").appendChild(yeniSecenek);
      
    });   
}


function cevabiKontrolEt(){
    kullaniciCevap=document.querySelector('input[name="yeniSecenek"]:checked').value;
    let sayı=0;
    console.log(kullaniciCevap);

    if(kullaniciCevap===dogruCevap){
      alert("Tebrikler. Doğru cevap.");
      document.getElementsByTagName("img").style.background="green";
    }
    else{
      alert("Yanlış cevap!!!");
    }
  }
