let feedbackArray = [];
let nextId = 1;

function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
  };

  feedbackArray.push(newFeedback);

  return newFeedback;
}

function getAll() {
  return feedbackArray;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);

  if (feedback) {
    return feedback;
  }

  return false;
}

function update(id, updatedData) {
  const feedback = findById(id);

  if (feedback) {
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }

    if (updatedData.message) {
      feedback.message = updatedData.message;
    }

    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }

    if (updatedData.platform) {
      feedback.platform = updatedData.platform;
    }

    return feedback;
  }

  return false;
}

if (require.main === module) {
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile",
  );
  addOne("Anna Brqown", "Very useful examples.", 4, "desktop");

  console.log(result);
  console.log(getAll());
}
module.exports = {
  addOne,
  getAll,
  findById,
  update,
};
