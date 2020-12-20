info = ['Դասղեկն է Լուսինե Բաղդասարյանը','Դասարանում կա 21 տղա 9 աղջիկ','Կայքը ստեղծվել է 5 օրում','Շնորհավոր Ամանօր և Սուրբ Ծնունդ','Դասարանում կա 30 աշակերտ','Դասարանում կա 6/7 գերազանցիկ']
var random = Math.floor(Math.random() * info.length);
$('#hi').text((info[random]));
if(info[random] == 'Շնորհավոր Ամանօր և Սուրբ Ծնունդ'){
	$(".preloader__item").css('backgroundColor', '#fff');
	$('#pr').css("background", "url('file:///C:/Users/MM/Documents/7d/img/wlp.jpg')");
	
}//Hello World :)

  window.onload = (function () {
  	setTimeout(function(){
  		$('.preloader').fadeOut();
  		$('.preloader2').fadeOut();
  	},1750);
  });