
function pop_up (texte,txtButton,urlButton,croix,grandeModal){
    $(".modal").remove();
    $(".modalGrande").remove();
//    console.log ($(".modal"));
    if(croix){
        
       $("body").append( '<div class="modal" style="display:none"><div class="onglet"><img class="close" src="img/icon/close.png" alt="fermer la fenêtre" title="fermer"></div><p class="padding">'+texte+'</p>');
        $(".modal").fadeIn(200);
        
    }
    else if(grandeModal){
        $("body").append( '<div class="modalGrande"  style="display:none"><div class="onglet"><img class="close" src="img/icon/close.png" alt="fermer la fenêtre" title="fermer"></div><div class="padding1">'+texte+'</div>');
        $(".modalGrande").fadeIn(200);
    }
    else{
    $("body").append('<div class="modal"  style="display:none"><div>'+texte+'<a class="buto" href="'+urlButton+'">'+txtButton+'</a></div></div>');
    $(".modal").fadeIn(200);
    }
    
    
}

function close(){
    

$(document).on("click",".close",function() {
                $(this).parent().parent().remove();
                

            })
}
function check (){
    var testQuizz1=true;
    if ($("#rep1").attr("data-reponse1")=="0"){
        testQuizz1=false;
    }
    console.log(testQuizz1);
    console.log($("#rep1").attr("data-reponse1"));
    
    if (testQuizz1==$("#rep1").prop("checked")){
//        $('#rep1').addClass('checked');
//      $('#rep1').remove();
//        
        console.log("yeeees");
    }
//    else{
//      $('#rep1').addclass('');  
//    }
//    
//    if (data-reponse2==true){
//      $('#rep2').addclass('');  
//    }
//    else{
//      $('#rep2').addclass('');  
//    }
//    
//    if (data-reponse3==true){
//      $('#rep3').addclass('');  
//    }
//    else{
//      $('#rep3').addclass('');  
//    }
//    
}

$(document).on("click",".butSol",function() {
    console.log ("verification");
check ();
})
