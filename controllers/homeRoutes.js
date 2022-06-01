const router = require("express").Router();
const { Posts, User, Comments } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const PostsData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = PostsData.map((Posts) => Posts.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
        {
          model: Comments,
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log(post);
    res.render("post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("editpost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Posts }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newpost", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Posts }],
    });

    const user = userData.get({ plain: true });

    res.render("newpost", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("signup");
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
