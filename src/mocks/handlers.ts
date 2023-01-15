import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL;

const handlers = [
  rest.get(
    `${apiUrl}/climbingWalls/loadAllClimbingWalls`,
    async (request, response, context) => {
      return response.once(
        context.status(200),
        context.json({
          privateClimbingWalls: [],
          climbingWalls: [
            {
              owner: "63bc33e6b4193dbdf0f95246",
              name: "Drac de Pedra",
              city: "Rubí",
              address: "Can rosés",
              email: "dracdepedra@gmail.com",
              telephone: 934775900,
              description: "Rocódromo en Rubí",
              prices: "42€ mensuales",
              installations: ["Cafeteria", "Campus"],
              schedule: "Lunes - Sábado de 10:00 a 22:00",
              activities: ["Grupos", "Escuela de escalada"],
              website: "www.dracdepedra.com",
              picture1: "dracdepedra.jpg",
              picture2: "dracdepedra.jpg",
              picture3: "dracdepedra.jpg",
              picture4: "dracdepedra.jpg",
              id: "1234",
            },
          ],
          climbingWall: {
            name: "",
            city: "",
            address: "",
            email: "",
            telephone: 34,
            description: "",
            prices: "",
            installations: [],
            schedule: "",
            activities: [],
            website: "",
            id: "",
            picture1: "",
            picture2: "",
            picture3: "",
            picture4: "",
          },
        })
      );
    }
  ),
  rest.get(
    `${apiUrl}/climbingWalls/loadAllClimbingWalls`,
    async (request, response, context) => {
      return response.once(
        context.status(200),
        context.json({
          privateClimbingWalls: [],
          climbingWalls: [],
          climbingWall: {
            name: "",
            city: "",
            address: "",
            email: "",
            telephone: 34,
            description: "",
            prices: "",
            installations: [],
            schedule: "",
            activities: [],
            website: "",
            id: "",
            picture1: "",
            picture2: "",
            picture3: "",
            picture4: "",
          },
        })
      );
    }
  ),
  rest.post(`${apiUrl}/users/login`, async (request, response, context) => {
    return response.once(context.status(200));
  }),
  rest.post(`${apiUrl}/users/login`, async (request, response, context) => {
    return response.once(context.status(500));
  }),
  rest.post(`${apiUrl}/users/register`, async (request, response, context) => {
    return response.once(context.status(201), context.json({}));
  }),
  rest.post(`${apiUrl}/users/register`, async (request, response, context) => {
    return response.once(context.status(500), context.json({}));
  }),
];

export default handlers;
