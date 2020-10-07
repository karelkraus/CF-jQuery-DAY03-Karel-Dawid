var storeData = JSON.parse(data)

for (var i=0; i < storeData.length; i++) {
	document.getElementById("content").innerHTML += `<div id="box" class=${storeData[i].type}> <img src=${storeData[i].img}> 
	  <div class="box"><p class="text">${storeData[i].name}</p> <br> <p id="${i}" class="text2" ><button class="minus">Add to cart</button> <br> <span class="btnMinus">${storeData[i].quantity}</span></p></div> 
	  </div> `;
};

$(document).ready(function(){
	$(".minus").on("click", function(){
		var index = $(this).parent().attr("id");
		storeData[index].quantity -=1;
		$(this).parent().find(".btnMinus").html(storeData[index].quantity);
	})
})
