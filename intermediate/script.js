var storeData = JSON.parse(data)

for (var i=0; i < storeData.length; i++) {
	document.getElementById("content").innerHTML += `<div class=${storeData[i].type}> <img src=${storeData[i].img}> 
	  <br> ${storeData[i].name} <br> <p id="${i}"> <span class="btnMinus">${storeData[i].quantity}</span><button class="minus">Add to cart</button></p> 
	  </div> `;
};

$(document).ready(function(){
	$(".minus").on("click", function(){
		var index = $(this).parent().attr("id");
		storeData[index].quantity -=1;
		$(this).parent().find(".btnMinus").html(storeData[index].quantity);
	})
})
