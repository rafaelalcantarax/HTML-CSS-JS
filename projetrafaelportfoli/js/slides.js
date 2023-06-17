$(function(){
	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: true,
		slidesToShow:5,
		arrows: false,
		responsive:[
		{
               breakpoint:768,
               settings:{
               	arrows:false,
               	centerMode:true,
               	slidesToShow:3
               }

		},
		{

			breakpoint: 580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2

			}
		},
		{

			breakpoint:380,
			settings:
			{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		}

		

			]
	});

	$('.tratamentos .container').slick({
		centerMode:false,
		slidesToShow:2,
		arrows:false,
		dots:true,
		infinite:false,
		responsive:[
           
           {
           	breakpoint:768,
           	settings:{
           		arrows:false,
           		dots:true,
           		infinite:false,
           		centerMode:false,
           		slidesToShow:2
           	}
           }
            
			]

	});
})
