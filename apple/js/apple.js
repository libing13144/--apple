$(function(){
 
$('.search').on('click',function(e){
	
		$('.header-inner .nav .daohang').addClass('nav0');
		$('.shousuo').addClass('shousuo0')
		$('.fanhui').addClass('fanhui1');
		e.preventDefault();
	
})
$('.fanhui').on('click',function(){
	$('.header-inner .nav .daohang').removeClass('nav0');
		$('.shousuo').removeClass('shousuo0');
		$('.fanhui').removeClass('fanhui1');
})
$('.box').on('click',function(){
	$('.xialakuang').toggleClass('xialakuang1');
	$('.box1').toggleClass('box1-1');
		$('.box2').toggleClass('box2-1');
})
$('.banner .banner-center ul li').eq(0).addClass('banner-left');
$('.banner .anniu ul li').eq(0).addClass('anniu0');
var num=0;
var next=0;
var t=setInterval(function(){
			move("r");
		},3000);
function move(type){
	
	if(type=="r"){
			next++;
			if(next>=$('.banner .banner-center ul li').length){
				
				next=0;
				
			}
			
		}else if(type=="l"){
			next--;
			if(next<=-1){
				next=$('.banner .banner-center ul li').length-1;
			}
		}
	$('.banner .banner-center ul li').eq(num).removeClass('banner-left').addClass('banner-right')
	$('.banner .banner-center ul li').eq(next)
	.addClass('banner-left');
	num=next;
}














})