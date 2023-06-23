function translate() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Full Data');

  const originalRange = sheet.getRange('Q2:Q');
  const originalTweets = originalRange.getValues();

  for (let i = 0; i < originalTweets.length; ++i) {
    const translatedData = LanguageApp.translate(originalTweets[i], 'tl', 'en')
    sheet.getRange(`S${i + 2}`).setValue(translatedData);
  }
}

function clean() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Full Data');

  const range = sheet.getRange('S2:S');
  const tweets = range.getValues().map(x => x[0]);

  const mentionRegex = /@\w*(?:$|\s)/g;
  const hashtagRegex = /#\w*(?:$|\s)/g;
  const linkRegex = /https{0,1}:\/\/\S*/g;
  const possesiveRegex = /'s/g;
  const punctuationRegex = /[.,\/#\?!$%\^&\*;:{}=\-_`'"~()]/g;
  const whitespaceRegex = /\s+/g;
  const emojiRegex = /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g;

  for (let i = 0; i < tweets.length; ++i) {
    const cleanedData = tweets[i]
      .replace(mentionRegex, '')
      .replace(hashtagRegex, '')
      .replace(linkRegex, '')
      .replace(possesiveRegex, '')
      .replace(punctuationRegex, '')
      .replace(emojiRegex, '')
      .replace(whitespaceRegex, ' ')
      .toLowerCase();
    sheet.getRange(`T${i + 2}`).setValue(cleanedData);
  }
}