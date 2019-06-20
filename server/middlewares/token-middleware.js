import jwt from "jsonwebtoken";
export default async (req, res, next) => {
  const { token = null } = req.cookies;

  let userData = null;

  if (token) {
    try {
      userData = await jwt.verify(token, process.env.APP_SECRET);
    } catch (e) {}
  }

  req.user = userData;

  next();
};
