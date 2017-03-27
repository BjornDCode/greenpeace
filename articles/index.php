<?php
    include '../includes/header.php';
    include '../includes/db.php';

    $cat = $_GET['cat'];
 ?>

 <h1>articles</h1>

 <?php
     $sql = "SELECT * FROM articles WHERE category = '$cat'";
     $query = $db->query($sql);
     while ($article = $query->fetchObject()) { ?>
         <a href="article.php?id=<?= $article->id ?>"><?= $article->title ?></a>
     <?php }
  ?>

 <?php
    include '../includes/footer.php';
  ?>
