export function feedURL(rawURL) {
	var matches = rawURL.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
	var domain = matches && matches[1];
	console.log(matches);
	return {
		url: rawURL,
		domain: domain,
	};
}
