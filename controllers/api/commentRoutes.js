const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      userId: req.session.user_id,
      commentName: req.session.user_name,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const CommentData = await Comments.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!CommentData) {
      res.status(404).json({ message: "No Comment found with this id!" });
      return;
    }

    res.status(200).json(CommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
