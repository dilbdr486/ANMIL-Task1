import mongoose from "mongoose";

export const connectdb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dc55gaming:tododil@cluster0.9hljz.mongodb.net"
    )
    .then(() => console.log("DB Connected"));
};