<?php
    include '../includes/header.php';
    include '../includes/db.php';

    $id = $_GET['id'];
 ?>

<?php include '../includes/back-button.php'; ?>
<div class="social article-share">
    <a href="#0" class="facebook"></a>
    <a href="#0" class="twitter"></a>
</div>
<section class="singleArticleContainer">
 <?php
     $sql = "SELECT * FROM articles WHERE id = '$id'";
     $query = $db->query($sql);
     while ($article = $query->fetchObject()) { ?>
        <article class="singleArticle">
             <h1><?= $article->title ?></h1>
            <img class="singleArticleImage" src="../assets/images/articles/<?= $article->image ?>">
            <p><?= $article->content ?></p>
        </article>
     <?php }
     include '../includes/comments.php';
  ?>
</section>
  <script type="text/javascript" src="../assets/js/comments.js"></script>
  <script type="text/javascript" src="../assets/js/back.js"></script>

 <?php
    include '../includes/footer.php';
  ?>
