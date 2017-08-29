
<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">

	  <title>Ma Boutique</title>

    <!-- Bootstrap Core CSS -->
   <link rel="stylesheet" href="<?php echo 'css/bootstrap.min.css'; ?>" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="<?php echo 'css/shop-homepage.css'; ?>" rel="stylesheet">

	<!-- AJOUTER LE LIEN CSS SUIVANT POUR LE DETAIL PRODUIT-->
    <link rel="stylesheet" href="<?php echo 'css/portfolio-item.css'; ?>" rel="stylesheet">

	<!-- jQuery -->
    <script src="<?php echo 'js/jquery.js'; ?>"> </script>


    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo 'js/bootstrap.min.js'; ?>"> </script>

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">

			<!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">

				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<!-- La marque -->
        <a class="navbar-brand" href="index.php"> MA BOUTIQUE </a>


		   </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                 	<!-- le menu de navigation -->
                  <li><a href="#">Boutique</a></li>
                  <li><a href="#">Inscription</a></li>
                  <li><a href="#">Connexion</a></li>
                  <li><a href="#">Panier</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div> <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container" style="min-height: 80vh;">



 <div class="row">

   <div class="col-md-3">
     <p class="lead">Vetements</p>
     <div class="list-group">
       <a class="list-group-item" href="">Tous</a>
       <?php foreach($categories as $cat) : ?>
         <a  class="list-group-item" href=""><?= $cat['categorie'] ?></a>
       <?php endforeach; ?>

     </div>
   </div>



   <div class="col_md_9">
     <div class="row">
       <?php foreach($produits as $produit) : ?>
         <div class="col-sm-4">
           <div class="thumbnail">
             <a href=""><img src="photo/<?= $produit['photo'] ?>" width="130" height="100"></a>
             <div class="caption">
               <h4 class="pull-right"><?= $produit['prix'] ?>€</h4><br>
               <h4><?= $produit['description'] ?></h4>
               <p></p>

             </div>
           </div>
         </div>
       <?php endforeach; ?>
     </div>
   </div>




 </div>


</div>
<!-- /.container -->

<div class="container">

    <hr>

    <!-- Footer -->
    <footer>
        <div class="row">
            <div class="col-lg-12">
                <p>Copyright &copy; Ma Boutique - 2017</p>
            </div>
        </div>
    </footer>

</div>
<!-- /.container -->


</body>

</html>
