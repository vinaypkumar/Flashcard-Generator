function ClozeCard(fullText, cloze){
	this.fullText=fullText;
	this.cloze=cloze;
	if(fullText.search(cloze)>-1){
		this.partial=fullText.replace(cloze, "...");
	}
	else{
		console.log("Cloze parameter not found within the full text.");
	}
}

module.exports=ClozeCard;