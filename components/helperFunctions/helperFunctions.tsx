import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = MongoClient.connect(
    `mongodb+srv://morfelidev:kiEXh6MFft6a2EVH@cluster0.ieqbo8k.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}
