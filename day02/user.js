export const users = (req, res) => {
  try {
    res.send("<h1>This is Users </h1>");
  } catch (error) {
    res.send(error);
  }
};
