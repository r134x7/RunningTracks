const router = require("express").Router();
const { Posts } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.update(
      {
        runName: req.body.runName,
        body: req.body.body,
        time: req.body.time + 1000,
        distance: req.body.distance,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const PostData = await Posts.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
