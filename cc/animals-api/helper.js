function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * listPerPage;
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function addBackboneStatus(data) {
    return data.map(item => ({
        id: item.id,
        name: item.name,
        class: item.class,
        habitat: item.habitat,
        lifespan: item.lifespan,
        height: item.height,
        weight: item.weight,
        food_class: item.food_class,
        backbone: item.backbone === 1 ? true : false,
        description: item.description,
        sound: item.sound
    }));
}

module.exports = {
    getOffset,
    emptyOrRows,
    addBackboneStatus
};
