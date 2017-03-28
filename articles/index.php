<?php
    include '../includes/header.php';
    include '../includes/db.php';

    $cat = $_GET['cat'];

    include '../includes/back-button.php';
 ?>

<section class="articlesContainer" >
 <?php
     $sql = "SELECT id, title, category, published_at, image, SUBSTR(content, 1, 250) as excerpt FROM articles WHERE category = '$cat'";
    //  $sql = "SELECT * FROM articles WHERE category = '$cat'";
     $query = $db->query($sql);
     while ($article = $query->fetchObject()) { ?>

    <article class="article">
         <h3><a class="articleTitle" href="article.php?id=<?= $article->id ?>"><?= $article->title ?></a></h3>
        <img class="articleImage" src="../assets/images/articles/<?= $article->image ?>">
        <p class="excerpt"><?= $article->excerpt ?></p>
        <a class="read-more" href="article.php?id=<?= $article->id ?>">Read More</a>
        </article>
     <?php }
  ?>
    </section>
    <script type="text/javascript" src="../assets/js/back.js"></script>

 <?php
    include '../includes/footer.php';
  ?>
