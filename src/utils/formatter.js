export const formatHTMLImages = (html) => {
  const addValue = '<img class="formatted-img" referrerpolicy="no-referrer" ';
  const splitted = html.split("<img");
  let formatted = "";
  for (let i = 0; i < splitted.length; i++) {
    formatted += splitted[i].slice(0, splitted[i].length) + addValue;
  }
  formatted = formatted.slice(0, formatted.length - addValue.length);
  return formatted;
};
