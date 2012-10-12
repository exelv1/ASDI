function (doc) {
	if(doc._id.substr(0,7) === "league:") {
		emit(doc._id.substr(7), {
			"title": doc.title,
			"acronym": doc.acronym,
			"url": doc.url
		});
	}
}