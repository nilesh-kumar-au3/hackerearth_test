export default function TimeStampToDate(ts){
    var ts_ms = ts * 1000;
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
     let fulldate =date+"-"+month+"-"+year;
     return fulldate;
    
      }