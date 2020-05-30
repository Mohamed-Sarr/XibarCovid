$(document).ready(function(){
    
    getGlobalInfo();
    getCountriesInfo();
    getSenegalInfo();

    
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#liste_pays tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".menu_toggle").on("click",function(){
        $(".nav").toggleClass("showing");
    });
    $("section, div, li, #topBtn").on("click",function(){
        $(".nav").removeClass("showing");
    });

    $(window).scroll(function(){

        if ($(this).scrollTop() > 0){
        $('#header').addClass("sticky color");
        }
        else{
        $('#header').removeClass("sticky color");
        }

        if($(this).scrollTop() > 1000){
            $('#topBtn').fadeIn();
          } else{
            $('#topBtn').fadeOut();
          }
        });

        $("#topBtn").click(function(){
            $('html ,body').animate({scrollTop : 0},600);
          });


});




function getGlobalInfo(){
   $.ajax({
        url:'https://coronavirus-19-api.herokuapp.com/all',
        success:function(data){

            try{
                var json = data;
               // setInterval(() => {
                // json;
               //  console.log("Les données du Monde" +json);
               // }, 100000);
                var cas = json.cases;
                var deaths = json.deaths;
                var recovered = json.recovered;
                //Calcul % des guéris
                var calcul = recovered / cas ;
                var brute = calcul * 100;
                var Gueris_pourcent_monde = Math.round(brute);

                $("#cas_global").html(cas);
                $("#cas_deces").html(deaths);
                $("#cas_guerris").html(recovered);
                $("#taux_cas_guerris").html(Gueris_pourcent_monde + " % ");
                

            }catch(e){
                alert('Erreur');
            }
        },error:function(e){

        }
    });
}
function getSenegalInfo(){
    $.ajax({
         url:'https://coronavirus-19-api.herokuapp.com/countries/senegal',
         success:function(data){
 
             try{
                 var json = data;
                 console.log(data);
                 setInterval(() => {
                    json;
                    console.log("les données de senegal" + json);
                 }, 190000);
                 var cas = json.cases ;
                 var deaths = json.deaths;
                 var todayDeaths = json.todayDeaths;
                 var sous_traitement = json.active -1;
                 var todayCases = json.todayCases;
                 var recovered = json.recovered;

                 // Calcul du pourcentage des gueris
                 var Gueris_sur_total = recovered / cas;
                 var Gueris_pourcent = Gueris_sur_total * 100;
                 var GuerisEnPourcent = Math.round(Gueris_pourcent);
                 
                
                 $("#cas_global_sn").html(cas);
                 $("#cas_actuel_sn").html(todayCases);
                 $("#cas_deces_sn").html(deaths);
                 $("#cas_guerris_sn").html(recovered);
              //   $("#cas_traitement_sn").html(sous_traitement);
                 $("#cas_mort_actuel_sn").html(deaths);
                 $("#cas_deces_n").html(todayDeaths);
                 $("#GuerisEnPourcent").html(GuerisEnPourcent + " % ");


 
             }catch(e){
                 alert('Erreur countrie');
             }
         },error:function(e){
 
         }
     });
 }

function getCountriesInfo(){
    $.ajax({
         url:'https://coronavirus-19-api.herokuapp.com/countries',
         success:function(data){
 
             try{
                var json =data;
               
                setInterval(()=>{
                    json;
                    console.log("Données de tout les pays"+json);
                },180000)
             

                if(json.length > 0){
                    var i;
                    for(i = 0;i<json.length;i++){

                        var html = [];

                       var data_countries = json[i];

                       var no = i+1;
                       var nom_pays = data_countries.country;
                       var cas_global = data_countries.cases;
                       var todayCases = data_countries.todayCases;
                       var active = data_countries.active;
                       var deaths = data_countries.deaths;
                       var todayDeaths = data_countries.todayDeaths;
                       var recovered = data_countries.recovered;

                       html.push("<tr>");
                       html.push("<td class='cas_global'>"+ no + "</td>");
                       html.push("<td class='cas_global'>"+ nom_pays + "</td>");
                       html.push("<td class='cas_global'>"+ cas_global + "</td>");
                       html.push("<td class='todayCases'>"+ todayCases + "</td>");
                       html.push("<td class='active'>"+ active + "</td>");
                       html.push("<td class='death'>"+ deaths + "</td>");
                       html.push("<td class='todayDeath'>"+ todayDeaths + "</td>");
                       html.push("<td class='recovered'>"+ recovered + "</td>");
                       html.push("<tr>");

                       $("#liste_pays").append(html.join(""));
                    }
                }

             }catch(e){
                 alert('Erreur');
             }
         },error:function(e){
            
         }
     });
 }
