const Feedback = require("./feedbackLib.js");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating, platform } = req.body;

  const newFeedback = Feedback.addOne(sender, message, rating, platform);

  res.status(201).json(newFeedback);
};

const getFeedbackById = (req, res) => {
  res.json({ message: "Hello from getFeedbackById" });
};

const updateFeedback = (req, res) => {
  res.json({ message: "Hello from updateFeedback" });
};

const deleteFeedback = (req, res) => {
  res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};
