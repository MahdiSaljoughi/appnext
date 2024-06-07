import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // daryaft yek post
    const { id } = req.query;
    if (id) {
      const post = await prisma.post.findFirst({
        where: {
          id: Number(id),
        },
      });
      return res.json(post);
    }
     const adminPost = await prisma.user.findMany({
      where: {
        isAdmin: true,
      }
     })
     if (adminPost) {
      const posts = await prisma.post.findMany();
      return res.json(posts);
    } else {
      const posts = await prisma.post.findMany({
        where: {
          published: true,
        },
      });
      return res.json(posts);
    }
  }
  // add post method
  if (req.method === "POST") {
    const { title, content, authorId, published } = req.body;
    const add_post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        published,
      },
    });
    return res.json(add_post);
  }
  if (req.method === "PUT") {
    let postUpdate = await prisma.post.update({
      where: {
        id: req.body.id
      },
      data: {
        title: req.body.title,
        content: req.body.content,
        published: req.body.published
      },
    })
    return res.json(postUpdate)
  }
  if (req.method === "DELETE") {
    let postDelete = await prisma.post.delete({
      where: {
        id: req.body.id
      }
    })
    return res.json(postDelete)
  }
}
