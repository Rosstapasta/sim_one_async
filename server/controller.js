

module.exports = {
    getshelf: (req, res, next) => {

        const db = req.app.get('db');
        const { shelfletter } = req.params;

        db.get_shelf([shelfletter]).then( shelf => res.status(200).send(shelf))
    }
}