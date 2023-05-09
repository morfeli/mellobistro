// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../components/helperFunctions/helperFunctions";
import moment from "moment";

const isEmpty = (value: string) => value.trim() === "";
const emailValidation = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type Data = {
  name?: string;
  message?: string;
};

export default async function newsLetterHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;

  const data = req.body;

  const { name, email } = data;

  const nameIsValid = !isEmpty(name);

  const emailIsValid = emailValidation(email);

  let userDataIsValid = nameIsValid && emailIsValid;

  if (!userDataIsValid) {
    return;
  }

  const client = await connectToDatabase();

  const db = client.db("mellobistro");

  const existingUserEmail = await db
    .collection("newsletter")
    .findOne({ email: email });

  if (existingUserEmail) {
    client.close();
    res.status(201).json({ message: "This email already exists." });
    return;
  }

  const today = new Date("mm/dd/yy");

  const formatToday = moment().calendar(today);

  await db.collection("newsletter").insertOne({
    name: name,
    email: email,
    date: formatToday,
  });

  client.close();

  res.status(201).json({ message: "Success" });
}
