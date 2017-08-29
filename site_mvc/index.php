<?php

require('model.php');

$infos = afficheALL();

$produits = $infos['produits'];
$categories = $infos['categories'];

require('view.php');
