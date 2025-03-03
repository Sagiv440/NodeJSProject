const actionsRepos = require("../repositories/UserActionRepos")
const { parse, isAfter, format, startOfDay } = require('date-fns');

const logUserAction = async (id, action) => {
    let user = await actionsRepos.getById(id);
    const today = startOfDay(new Date());
    console.log(`Loaded user is :${user}`)
    if (user == null) {
        user = { id: id, maxActions: 10, date: format(today, "dd-MM-yyyy"), actionsAllowd: 10 };
        await actionsRepos.add(user);
    }

    // Convert user date (from "dd-MM-yyyy" format) into a Date object
    const d_user = parse(user.date, "dd-MM-yyyy", new Date());

    if (isAfter(today, d_user)) {
        user.date = format(today, "dd-MM-yyyy"); // Update user date
        user.actionsAllowd = user.maxActions; // Reset actions
        await actionsRepos.update(id, user);
        return true;
    } else if (user.actionsAllowd > 0) {
        console.log("subtracton acctionsActions")
        user.actionsAllowd -= action;
        await actionsRepos.update(id, user);
        return true;
    } else {
        console.log("no more actions")
        return false;
    }
}

module.exports = {
    logUserAction
}

