function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  try {
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.title, data.url]);
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data.reverse()))
    .setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // 最初のシート
  
  try {
    // 画面から送られてきたデータ（JSON形式）を解析
    var data = JSON.parse(e.postData.contents);
    
    // スプレッドシートに追記 (日付, タイトル, URL)
    sheet.appendRow([new Date(), data.title, data.url]);
    
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data.reverse()))
    .setMimeType(ContentService.MimeType.JSON);
}