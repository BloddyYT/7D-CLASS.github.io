info = ['Շնորհավոր Ամանօր և Սուրբ Ծնունդ']
var random = Math.floor(Math.random() * info.length);
$('#hi').text((info[random]));
if(info[random] == 'Շնորհավոր Ամանօր և Սուրբ Ծնունդ'){
	$('.preloader__item').remove()
	$('#pr').removeClass('preloader')
	$('#preloader-item').addClass('prli')
	$('#pr').addClass('preloader2')
	
}

  window.onload = (function () {
  	setTimeout(function(){
  		$('.preloader').fadeOut();
  		$('.preloader2').fadeOut();
  	},1800);
  });