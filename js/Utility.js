//Display date in proper format(UC21)
const stringifyDate = (date) => {
    const option = { day: 'numeric', month: 'short', year: 'numeric' };
    let newDate = !date ? "undefined" : date.toLocaleDateString('en-GB', option);
    return newDate;
}

//Check name is in correct format or not(UC21)
const checkName = (name) => {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (!nameRegex.test(name)) throw "Name is incorrect!";
}

//Check date is in correct format or not(UC21)
const checkStartDate = (date) => {
    let now = new Date();
    //Givendate should not exceed todays date
    if (date > now) throw "The Given Date Is Greater Than Current Date";
    //Validating the start date should note be older than 30 days(UC22)
    var diff = Math.abs(now.getTime() - date.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        throw "Start Date Is Beyond 30 Days";
}