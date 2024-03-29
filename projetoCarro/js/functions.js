$(function(){  
	/*sistema de pesquisa */

	var valorAtual = 0;
	var pressionadomouse = false;
	var preco_maximo = 70000;
	var preco_atual = 0; 

	$('.pointer-barra').mousedown( function(){
		pressionadomouse = true;
	})

	$(document).mouseup(function(){
		pressionadomouse = false;
		enableTextSelection();
	})

	$('.barra-preco').mousemove(function(e){
		if(pressionadomouse){
			disableTextSelection();
			var elBase = $(this);
			var mouseX = e.pageX - elBase.offset().left;
			if(mouseX < 0)
				 mouseX = 0;
			if(mouseX > elBase.width())
			        mouseX = elBase.width();

			    $('.pointer-barra').css('left',(mouseX-13)+'px');

			 var valorAtual = (mouseX / elBase.width()) * 100;
			     $('.barra-preco-fill').css('width', valorAtual+'%');
                  

                  preco_atual= valorAtual/100 * preco_maximo;
                  preco_atual= formatarPreco(preco_atual);
			     $('.preco_pesquisa').html('R$'+preco_atual);
			          	

		}
	})


	function formatarPreco(preco_atual){
		preco_atual = preco_atual.toFixed(2);
		preco_arr = preco_atual.split('.');

		var novo_preco = formatarTotal(preco_arr);

		return novo_preco;

	}

	function formatarTotal(preco_arr){
		
		if(preco_arr[0] < 1000){
			return preco_arr[0]+','+preco_arr[1];
		}else if (preco_arr[0] < 10000){
		return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1];

		}else{
			return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1];

		}
	}


	function disableTextSelection(){
		$("body").css("-webkit-user-select","none");
	    $("body").css("-moz-user-select","none");
	    $("body").css("-ms-user-select","none");
	    $("body").css("-o-user-select","none");
	    $("body").css("user-select","none");
	}

   function enableTextSelection(){
	          $("body").css("-webkit-user-select","auto");
	          $("body").css("-moz-user-select","auto");
	          $("body").css("-ms-user-select","auto");
	          $("body").css("-o-user-select","auto");
	         $("body").css("user-select","auto");
        }

 /*Sistema Slider individual cada carro */ 

        var imgShow = 3;
        
        var maxIndex = Math.ceil($('.mini-img-wraper').length/3) -1;
        var curIndex = 0;
          

        navigateSlider();
        initSlider();   

        function initSlider(){
              var quantidadeimg = $('.mini-img-wraper').length * 33.3;
              var elScroll = $('.nav-galeria-wraper');
              var elSingle = $('.mini-img-wraper');
               elScroll.css('width',quantidadeimg+'%');
              elSingle.css('width',33.3*(100/quantidadeimg)+'%');
        }

        function navigateSlider(){
        	$('.arrow-right-nav').click(function(){
                if(curIndex < maxIndex){
                	curIndex++;
                	 var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                	$('.nav-galeria').animate({'scrollLeft':elOff+'px'}); 

       

                       
                }else{
                	console.log('chegamos ate o final')
                }
        	});

        	$('.arrow-left-nav').click(function(){
        		   if(curIndex > 0){
                	curIndex--;
                	 var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                	$('.nav-galeria').animate({'scrollLeft':elOff+'px'}); 

       

                       
                }else{
                	console.log('chegamos ate o final')
                }


        	})
        
        }
           
           clickSlider();


            function clickSlider(){
                $('.mini-img-wraper').click(function(){
                   $('.mini-img-wraper').css('background-color','transparent');
                   $(this).css('background-color','rgb(210,210,210)');
                   var img = $(this).children().css('background-image');
                   $('.foto-destaque').css('background-image',img);
                })

                $('.mini-img-wraper').eq(0).click();

        }
       

       /*clicar e ir para div de contato com base no atributo goto*/

        $('[goto=contato]').click(function(){
        	$('html,body').animate({'scrollTop':$('#contato').offset().top});
        	return false;
        })
        

       

})

		