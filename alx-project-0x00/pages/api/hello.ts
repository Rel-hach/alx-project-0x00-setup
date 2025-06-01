import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data: {
    name: string;
    role: string;
    contact: {
      email: string;
      phone: string;
    };
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ 
    success: true,
    data: {
      name: "fname lastname",
      role: "Property Manager",
      contact: {
        email: "john@luxestays.com",
        phone: "+2126 123-45678"
      }
    }
  });
}