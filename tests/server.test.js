const request = require("supertest");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD is working!");
});

test("GET / should return success", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("CI/CD is broken!");
});