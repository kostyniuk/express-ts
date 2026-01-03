import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + tsgo!" });
});

app.listen(3001, () => {
  const port = 3001;

  console.log(`Server running on http://localhost:${port}`);
});
