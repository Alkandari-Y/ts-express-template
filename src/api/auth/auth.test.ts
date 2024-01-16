import app from "../../app";
import request from "supertest";

describe("POST /api/authlogin", function () {
  it("responds with json", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "hello", password: "hola" })
      .set("Accept", "application/json")
    console.log(res.headers)
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body["message"]).toBe('login api');
    expect(res.status).toEqual(200);
  });
});