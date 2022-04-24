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

module.exports.getCardById = async function (id) {
  try {
    let sql = `Select * from card where card_id = $1`;
    let result = await pool.query(sql, [id]);
    if (result.rows.length > 0) {
      let room = result.rows[0];
      return { status: 200, result: room };
    } else {
      return { status: 404, result: { msg: "No card with that id" } };
    }
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
}

