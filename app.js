(function(){
	var app=angular.module("store",['store-products']);
	app.controller("StoreController",function(){
		this.products=gems;
	});
	var gems=[
	          { 
	        	  name: 'Azurite',
	        	  price: 110.50,
	        	  images:["productassets/azurite.png"],
	        	  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis augue elit, vel tincidunt ante volutpat nec.",
	        	  specifications:{availableColors:"Red, Blue, Clear", availableSizes:".25ct, .4ct, .75ct"},
	        	  reviews:[
	        	           {
	        	            stars:5,
	        	            body:"Gorgeous! I love the cut!",
	        	            author:"geo@earth.com"
	        	           },
	        	            {stars:4,
	        	             body:"This was a great gift for my girlfriend.",
	        	             author:"kahlua@strip4me.xxx"
	        	            },
	        	            {stars:4,
	        	             body:"This is a cool and rare stone for my collection.",
	        	             author:"drmom@medstuff.net"
	        	            }
	        	          ]
	          },
	          { 
	        	  name: 'Bloodstone', 
	        	  price: 22.90,
	        	  images:["productassets/bloodstone.png"],
	        	  description:"Quisque ut massa sapien. Donec eu sodales egestas tellus, ac fermentum libero libero ipsum.",
	        	  specifications:{availableColors:"Aubergene", availableSizes:"1ct"},
	        	  reviews:[
	        	           {stars:4,
	        	        	   body:"I love the deep rich tones of this stone.",
	        	        	   author:"pablo@picasso.com"
	        	           },
	        	           {
	        	        	   stars:3,
	        	        	   body:"I made my mom a fantastic necklace with this stone as the centerpiece!",
	        	        	   author:"misscrafty@diy.org"
	        	           }
	          			]
	          },
	          { 
	        	  name: 'Zircon', 
	        	  price: 1100,
	        	  images:["productassets/zircon.png"],
	        	  description:"Morbi viverra, velit ac vestibulum lacinia, nibh leo egestas tellus, ac fermentum libero libero sit amet tellus.",
	        	  specifications:{availableColors:"Honey, Teal", availableSizes:".5ct, .8ct"},
	        	  reviews:[
	        	           {
	        	        	   stars:2,
	        	        	   body:"The honey was a little too yellow for my skin tone",
	        	        	   author:"oprah@harpo.com"
	        	           }
	        	           ]
	          },
	    ];
	
	app.controller("ReviewController",function(){
		this.review={};
		this.addReview=function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});

})();