import request from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import sinon from "sinon";

import app from "../src/app.js";

dotenv.config();

describe("Adoption Router", function () {
  this.timeout(10000);

  before(async function () {
    await mongoose.connect(process.env.MONGO_URL);
  });

  after(async function () {
    await mongoose.connection.close();
  });

  it("Debe responder GET /api/adoptions", async function () {
    const response = await request(app).get("/api/adoptions");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("Debe crear una nueva adopción", async function () {
    const adoption = {
      petName: faker.person.firstName(),
      owner: faker.person.fullName(),
      species: "Perro",
      adopted: false,
    };
    const response = await request(app).post("/api/adoptions").send(adoption);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
  });

  it("Debe obtener una adopción por ID", async function () {
    const created = await request(app).post("/api/adoptions").send({
      petName: "Luna",
      owner: "Ana",
      species: "Gato",
      adopted: true,
    });

    const id = created.body._id;

    const response = await request(app).get(`/api/adoptions/${id}`);

    expect(response.status).to.equal(200);
    expect(response.body._id).to.equal(id);
  });

  it("Debe actualizar una adopción", async function () {
    const created = await request(app).post("/api/adoptions").send({
      petName: "Toby",
      owner: "Juan",
      species: "Perro",
      adopted: false,
    });

    const response = await request(app)
      .put(`/api/adoptions/${created.body._id}`)
      .send({
        owner: "Pedro",
      });

    expect(response.status).to.equal(200);
    expect(response.body.owner).to.equal("Pedro");
  });

 it("Debe eliminar una adopción", async function () {

    const created = await request(app).post("/api/adoptions").send({
        petName: "Mora",
        owner: "Luis",
        species: "Perro",
        adopted: false,
    });

    const response = await request(app).delete(
        `/api/adoptions/${created.body._id}`
    );

    expect(response.status).to.equal(200);

});

it("Debe usar un stub con Sinon", function () {

    const stub = sinon.stub().returns("OK");

    expect(stub()).to.equal("OK");

});
});