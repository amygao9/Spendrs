
export const displayMoney = (price) => {
  return (Math.round(price * 100) / 100).toFixed(2);
}

const URLRegexPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
export const URLRegex = new RegExp(URLRegexPattern);

