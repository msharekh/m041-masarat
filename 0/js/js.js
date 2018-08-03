 $(document).ready(function() {

 	$('.ankor1').click(function(){
                     $('#map').slideToggle();      

                 });

    $('.ankor2').click(function(){
                     $('#map').slideToggle();      

  });
 	var pointS;

 	var pointE;
 	$('#path1').click(function(){
            // $('.map').toggle(); 
 




//  var start = new google.maps.LatLng(21.4225814,39.8263825
// );

//  var end = new google.maps.LatLng(21.3569224,39.9294846);


            pointS={
            	lat:21.4225014,
            	lng:39.8263825
            };

            pointE={
            	lat:21.3569024,
            	lng:39.9204846
            };
            initMap('green',pointS,pointE) ; 
        }); 




		 	
 		$('#path2').click(function(){


 			pointS={
		 		lat:21.3569024,
            	lng:39.9204846
		 	};

		 	pointE={
		 		lat:21.4225814,
            	lng:39.8263825
		 		
		 	};
            // $('.map').toggle(); 
            initMap('red',pointS,pointE) ; 
        }); 
 });