$('#pr').css('background', '#858585');
info = ['Շնորհավոր Ամանօր և Սուրբ Ծնունդ']
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