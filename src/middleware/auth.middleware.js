export const protectRoute = async (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};
