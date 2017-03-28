<?php
    include '../includes/header.php';
    include '../includes/db.php';

    $cat = $_GET['cat'];
 ?>

<section class="articlesContainer" >
 <?php
     $sql = "SELECT * FROM articles WHERE category = '$cat'";
     $query = $db->query($sql);
     while ($article = $query->fetchObject()) { ?>

    <article class="article">
         <a class="articleTitle" href="article.php?id=<?= $article->id ?>"><?= $article->title ?></a>
        <img class="articleImage" src="../assets/images/articles/<?= $article->image ?>">
        <p><?= $article->content ?></p>
        </article>

     <?php }
  ?>
    </section>

 <?php
    include '../includes/footer.php';
  ?>
