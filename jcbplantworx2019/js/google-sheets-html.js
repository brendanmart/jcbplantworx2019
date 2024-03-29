/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
	packages: ['table']
});
var visualization;

function drawVisualization() {
	var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1RkpdTBAu8sGyt6kVC_Md-8gKpkc8DUcfWYNhSEww8RA&output=html&usp=sharing');
	query.setQuery('SELECT A, B, D, I label A "Position", B "Day", D "Name", I "Time taken"');
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
	if (response.isError()) {
		alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}
	var data = response.getDataTable();
	visualization = new google.visualization.Table(document.getElementById('table'));
	visualization.draw(data, {
		allowHtml: true,
		legend: 'bottom'
	});
}
google.setOnLoadCallback(drawVisualization);
