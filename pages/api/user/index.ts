// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     // daryaft yek user
//     const { id } = req.query;
//     if (id) {
//       const user = await prisma.user.findFirst({
//         where: {
//           id: Number(id),
//         },
//       });
//       return res.json(user);
//     } else {
//       const users = await prisma.user.findMany();
//       return res.json(users);
//     }
//   }
//   // add user method
//   if (req.method === "POST") {
//     const { email, name, password } = req.body;
//     const add_user = await prisma.user.create({
//       data: {
//         email,
//         name,
//         password,
//       },
//     });
//     return res.json(add_user);
//   }
//   if (req.method === "PUT") {
//     let userUpdate = await prisma.user.update({
//       where: {
//         id: req.body.id,
//       },
//       data: {
//         isAdmin: req.body.isAdmin,
//       },
//     });
//     return res.json(userUpdate);
//   }
//   if (req.method === "DELETE") {
//       const userDelete = await prisma.user.delete({
//         where: {
//           email: req.body.email,
//         },
//       });
//       return res.json(userDelete);
//   }
// }
