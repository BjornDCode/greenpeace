<?php
    include '../includes/header.php';
    include '../includes/db.php';

    $id = $_GET['id'];
 ?>

 <h1>article</h1>

 <?php
     $sql = "SELECT * FROM articles WHERE id = '$id'";
     $query = $db->query($sql);
     while ($article = $query->fetchObject()) { ?>
         <h1><?= $article->title ?></h1>
     <?php }
     include '../includes/comments.php';
  ?>

  <script type="text/javascript" src="../assets/js/comments.js"></script>

 <?php
    include '../includes/footer.php';
  ?>
