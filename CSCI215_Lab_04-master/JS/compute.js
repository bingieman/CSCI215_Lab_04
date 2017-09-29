var I = ["<img>CSCI215_Lab_04-master\images\canadian.jpeg</img>", "<img>CSCI215_Lab_04-master\images\euro.jpeg</img>", "<img>CSCI215_Lab_04-master\images\kroon.jpeg</img>", "<img>CSCI215_Lab_04-master\images\pound.jpeg</img>", "<img>CSCI215_Lab_04-master\images\yuan.jpeg</img>"];

console.log(I.convert);
//5

function convert {
	var dollar = document.getElementsByName("dollars")[0].value;
	var selectElement = document.getElementById('currency');
	var exchangerate = selectElement.value;
	var index = selectElement.selectedIndex;
	var currency = selectElement.options[index].text;
	updateExchange ( dollar, exchangeRate, currency, index )
}

function calculate (dollar, exchangeRate) {
	return dollar * exchangeRate;
}
function updateImage( index ) { 
    
    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;
    
}

function updateExchange( dollar, exchangeRate, currency, index ) {
    
    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;
    
    updateImage( index );
    
}