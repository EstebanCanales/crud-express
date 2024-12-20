import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import itemsRoutes from "./routes/items.routes.js";
import companyRoutes from "./routes/company.routes.js";
import greenProdctsRoutes from "./routes/greenProduct.routes.js";
import morgan from "morgan";
const app = express();

app.get("/", (req, res) => {
	res.json({ message: "Hello, World" });
});

app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);
app.use(itemsRoutes);
app.use(companyRoutes);
app.use(greenProdctsRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
