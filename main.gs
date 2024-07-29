function myFunction() {
  const discordWebHookURL = "WebhookのURL"

  const now = new Date();
  const month = ("0" + (now.getMonth() + 1)).slice(-2); 
  const day = ("0" + now.getDate()).slice(-2); 

  const message = {
    "content": `<@ユーザーID>さん 今日の日記を記入しましたか？今日の日付は ${month}月${day}日です。`,
  };

  const param = {
    "method" : "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}
