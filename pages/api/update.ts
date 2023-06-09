import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // アイテムを取得
  const { id, title, content } = req.body;

  try {
    // 更新処理
    const newPost = await prisma.post.update({
      // 条件
      where: {
        id: id,
      },
      // 更新内容
      data: {
        title: title,
        content: content,
        updated_at: new Date(),
      },
    });

    // 更新結果を返却
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "サーバーエラーです。" });
  }
}
