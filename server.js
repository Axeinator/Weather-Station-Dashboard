//get rid of mongodb embeds in public repo
const app = require('./index');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  process.stdout.write(`server started on port ${PORT}`);
});
