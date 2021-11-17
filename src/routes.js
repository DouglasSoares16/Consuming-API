const { Router } = require("express");

const api = require("./services/api");

const routes = Router();

routes.get("/users", async (request, response) => {
  try {
    const { data } = await api.get("users");

    return response.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;