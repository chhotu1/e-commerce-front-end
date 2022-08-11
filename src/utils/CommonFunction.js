import { Spinner } from "react-bootstrap";
import Constant from "./Constant";
function formateDate(date) {
    var event = new Date(date);
    const fullmonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = fullmonth[event.getMonth()];
    let day = event.getDate();
    // var dayName = event.toString().split(' ')[0];

    let year = event.getFullYear();
    return `${month} ${day} ${year}`;
}

function timerDateFormate(date) {
    var event = new Date(date);
    const fullmonth = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    let month = fullmonth[event.getMonth()];
    let day = event.getDate();
    // var dayName = event.toString().split(' ')[0];
    let year = event.getFullYear();
    return `${year}-${month}-${day}`;
}

function dateFormateWithTime() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var day = days[d.getDay()];
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "am";
    if (hr > 12) {
        hr -= 12;
        ampm = "pm";
    }
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return hr + ":" + min + ampm + " " + date + " " + month + " " + year;
}

function isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode < 48 || charCode > 57) {
        evt.preventDefault();
    } else {
        return true;
    }
}

function buttonSpinner(show) {
    return (
        <>
            {show ? (
                <div className="spinner-button">
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                </div>
            ) : null}
        </>
    );
}

function spinner(show) {
    return (
        <>
            {show ? (
                <div className="text-center pt-4">
                    <Spinner animation="border" role="status" variant="primary" />
                </div>
            ) : null}
        </>
    );
}

function CustomLoader() {
    return (
        <div className="loader-spinner-wrap">
            <div className="spinner-border-wrap">
                <div className="spinner-border"></div>
            </div>
        </div>
    );
}

function getRoleName(role) {
    let index = Constant.ROLE.findIndex((item) => item.value === role);
    if (index !== -1) {
        return Constant.ROLE[index].name;
    } else {
        return 0
    }
}

function getLeaveType(type) {
    let index = Constant.LEAVETYPE.findIndex((item) => item.value === parseInt(type));
    if (index !== -1) {
        return Constant.LEAVETYPE[index].name;
    } else {
        return ''
    }
}

export { formateDate, isNumber, buttonSpinner, spinner, CustomLoader, getRoleName, getLeaveType, timerDateFormate,dateFormateWithTime };

// export default Common;
