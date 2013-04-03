//-----------------------------------------------------------------------------
// Homemade pieces of javascript
//-----------------------------------------------------------------------------
// returns the synthetic domain name
// examples:
// google => google
// google.com => google.com
// www.google.com => google.com
// https://www.google.com => google.com
// http://prems.deuz.co.uk => deuz.co.uk
// http://bit.ly => bit.ly
// http://www.bit.ly => bit.ly
function getDomain(rawDomainString) {
	// TODO
    return rawDomainString;
};


// this function is called when we want to process the inputs and generate the password
function processInputData() {
	// get input fields values
	var rawDomainName = document.getElementsByName('inputDomain')[0].value;
	var phrase = document.getElementsByName('inputPhrase')[0].value;
	var phraseVerification = document.getElementsByName('inputPhraseVerification')[0].value;

	// get handle to output field
	var outputParagraph = document.getElementsByName('output')[0];
	
	// validate input
	var errorString  = "Error: "
		
	// 1. look for empty fields
	if (!rawDomainName) {
		errorString += "Please fill-up the domain name field";
		outputParagraph.innerHTML=errorString;
		return;		
	}
	if (!phrase) {
		errorString += "Please fill-up the pass phrase field";
		outputParagraph.innerHTML=errorString;
		return;		
	}
	if (!phraseVerification) {
		errorString += "Please fill-up the pass phrase verification field";
		outputParagraph.innerHTML=errorString;
		return;		
	}
	
	// 2. check that pass phrase and verification match
	if (phrase != phraseVerification) {
		errorString += "The phrases do not match - please check and edit";
		outputParagraph.innerHTML=errorString;
		return;		
	}
	
	// extract domain name
	var domainName = getDomain(rawDomainName);
	
	// compute password
	var shaObj = new jsSHA(domainName, "TEXT");
	var hmac = shaObj.getHMAC(phrase, "TEXT", "SHA-256", "B64", {"b64Pad":""});
	
	// print result
	var outputString = "domain="+domainName+'<br />phrase='+phrase+'<br />verif='+phraseVerification; // TODO
	outputString = "Your password for "+domainName+" is: "+hmac;
	outputParagraph.innerHTML=outputString	
}
