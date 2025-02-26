function timeWord(time) {
  const hoursWords = [
      "twelve", "one", "two", "three", "four", "five", "six", 
      "seven", "eight", "nine", "ten", "eleven"
  ];
  
  let [hour, minute] = time.split(":").map(Number);
  let period = hour < 12 ? "am" : "pm";

  if (time === "00:00") return "midnight";
  if (time === "12:00") return "noon";

  let hourWord = hoursWords[hour % 12];
  let minuteWord = minute === 0 ? "o’clock" : (minute < 10 ? `oh ${minutesToWords(minute)}` : minutesToWords(minute));

  return `${hourWord} ${minuteWord} ${period}`;
}

// Helper function to convert minutes to words
function minutesToWords(minute) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty"];

  if (minute < 10) return ones[minute];
  if (minute < 20) return teens[minute - 10];
  return tens[Math.floor(minute / 10)] + (minute % 10 !== 0 ? ` ${ones[minute % 10]}` : "");
}

module.exports = timeWord;