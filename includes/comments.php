<?php
    if (isset($_POST['comment'])) {
        $comment = $_POST['comment'];
        $article_id = $_POST['article_id'];
        $username = $_POST['username'];
        $sql = "INSERT INTO comments (article_id, username, published_at, content) VALUES($article_id, '$username', NOW(), '$comment')";
        $query = $db->query($sql);
    }
 ?>


<?php
    $article_id = $_GET['id'] ? $_GET['id'] : NULL;

    $sql = "SELECT * FROM comments WHERE article_id = $article_id";
    $query = $db->query($sql);

 ?>

<div class="comments">
    <h3>Comments</h3>
    <ul>
        <div class="comment">
            <?php while ($comment = $query->fetchObject()) { ?>
                <div class="comment">
                    <p><span class="author"><?= $comment->username ?>: </span><?= $comment->content ?></p>
                </div>
            <?php } ?>
        </div>
    </ul>
    <div class="auth">
        <h4>Post a Comment</h4>
        <button type="button" name="button" class="fb-auth visible">Sign in with Facebook</button>
        <form class="comment-form" action="" method="post">

            <label class="username">
                <span>Username</span>
                <input type="text" name="username" value="">
            </label>
            <label class="comment">
                <span>Comment</span>
                <textarea name="comment" rows="8" cols="80"></textarea>
            </label>
            <input type="hidden" name="article_id" value="<?= $article_id ?>">
            <input type="submit" name="submit" class="submit" value="SEND">
        </form>
    </div>
</div>
