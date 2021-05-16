
import { validateReport } from "./validateReport.js";

export function checkDate(item)
{
    let fromDate= document.querySelector("#fromDate").value;
    let toDate= document.querySelector("#toDate").value;
    let startDate = new Date(fromDate);
    let endDate = new Date(toDate);
    validateReport(startDate,endDate);
    let formDate=item.from;
    let unitDate = new Date(formDate);
    return unitDate >= startDate && unitDate <= endDate;
}
