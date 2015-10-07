(function(){
	var app=angular.module('store-products',[]);
	app.directive("productTitle",function(){
		return{
			restrict:'E',
			templateUrl:'product-title.snip.html'
		};
	});
	app.directive("productPanels",function(){
		return{
			restrict:'E',
			templateUrl:'product-panels.snip.html',
			controller:function(){
				this.tab=1;
				this.setActiveTab=function(tab){
					this.tab=tab;
				};
				this.isSelected=function(tab){
					return this.tab===tab;
				};

				this.specParse=function(product){
					var str='';
					str+="<div>Available Colors: "+product.specifications.availableColors+'</div>';
					str+="<div>Available Sizes: "+product.specifications.availableSizes+'</div>';
					return str;
				};
			},
			controllerAs:'panel'
		};
	});
})();