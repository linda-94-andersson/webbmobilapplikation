// express
// const express = require("express");
// const cors = require("cors");
// const PORT = process.env.PORT || 5000;
// const app = express();
// app.use(cors());
// app.all('*', (req, res) =>
//     res.status(404).json({ error: `Route '${req.url}' does not exist` })
// );
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: "Something went wrong" });
// });
// app.listen(PORT, () => {
//     console.log(`The server runs now at ${PORT}`);
// });

//lowdb
// import { join, path, dirname } from "path"
// import { Low, JSONFile } from 'lowdb'
// import { fileURLToPath } from 'url'

// export const addPerson = async () => {
//     const __dirname = dirname(fileURLToPath(import.meta.url));
//     // Use JSON file for storage
//     const file = join('db.json')
//     const adapter = new JSONFile(file)
//     const db = new Low(adapter)
//     // Read data from JSON file, this will set db.data content
//     await db.read()
//     // If file.json doesn't exist, db.data will be null
//     db.data ||= { posts: [] }             // Node >= 15.x
//     // Alternatively, you can also use this syntax if you prefer
//     db.data.people.push([]);
//     // Finally write db.data content to file
//     await db.write()
// }
