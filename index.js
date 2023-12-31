const server = require('./src/index.js')
const { conn } = require('./src/db.js')
const port = process.env.PORT || 3001


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
