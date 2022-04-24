var pool = require('./connection.js')

module.exports.getAllCards = async function () {
    try {
      let sql = `Select * from card order by card_id asc`;
      let result = await pool.query(sql);
      let cards = result.rows;
      return { status: 200, result: cards };
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }