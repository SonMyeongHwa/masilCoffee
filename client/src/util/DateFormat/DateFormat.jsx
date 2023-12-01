//type: 날짜 타입 (date->YY-MM-DD / dateTime->YY-MM-DD HH:mm)
//dateInfo : 날짜

function DateFormat(type, dateInfo) {
  let date = new Date(dateInfo);
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);

  if (type === "dateTime") {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } else if (type === "date") {
    return `${year}-${month}-${day}`;
  } else if (type === "time") {
    return `${hours}:${minutes}`;
  }
}

export default DateFormat;
