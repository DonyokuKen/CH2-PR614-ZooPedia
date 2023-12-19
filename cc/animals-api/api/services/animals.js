const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, class, habitat, lifespan, height, weight, food_class, backbone, description, sound 
      FROM animal_list LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);

    // Menambahkan status backbone
    const modifiedData = helper.addBackboneStatus(data);

    const meta = { page };

    return {
        data: modifiedData,
        meta
    };
}

module.exports = {
    getMultiple
};
