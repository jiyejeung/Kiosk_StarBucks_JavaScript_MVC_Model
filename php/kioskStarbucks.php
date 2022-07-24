<?php
  require './dbConnect.php';

  if ($_GET['allProductsInfo'] === 'setupAllProductsInfo') {
    $sqlQuery = 'SELECT * FROM `allProductsInfo`';
    
    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...")</script>';
      exit;
    }
    if (!mysqli_num_rows($records)) {
      echo '<script>console.log("There is no any data...")</script>';
      exit;
    }

    $allProductsInfo = [];

    while($record = mysqli_fetch_array($records)) {
      $productInfo = [
        'id' => $record['id'],
        'productName' => $record['productName'],
        'productCount' => $record['productCount'],
        'productPrice' => $record['productPrice'],
        'productAdditionalFee' => $record['productAdditionalFee'],
        'productCategory' => $record['productCategory'],
        'productImageUrl' => $record['productImageUrl'],
        'productSize' => $record['productSize'],
        'productEspressoRoast' => $record['productEspressoRoast'],
        'productEspressoShot' => $record['productEspressoShot'],
        'productSyrup' => $record['productSyrup'],
        'productSyrupCount' => $record['productSyrupCount'],
        'productIce' => $record['productIce'],
      ];

      array_push($allProductsInfo, $productInfo);
    }

    echo json_encode($allProductsInfo);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  };
  if ($_GET['allIntroImagesInfo'] === 'setupAllIntroImagesInfo') {
    $sqlQuery = 'SELECT * FROM `allIntroImagesInfo`';

    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...")</script>';
      exit;
    }
    if (!mysqli_num_rows($records)) {
      echo '<script>console.log("There is no any data...")</script>';
      exit;
    }

    $allIntroImagesInfo = [];

    while($record = mysqli_fetch_all($records)) {
      array_push($allIntroImagesInfo, $record);
    }

    echo json_encode($allIntroImagesInfo);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  };
  if ($_GET['allUsersInfo'] === 'setupAllUsersInfo') {
    $phoneNumber = $_GET['phoneNumber'];
    $sqlQuery = 'SELECT * FROM `allUsersInfo` WHERE phoneNumber = "'.$phoneNumber.'"';
    
    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...")</script>';
      exit;
    }
    if (!mysqli_num_rows($records)) {
      echo '<script>console.log("There is no any data...")</script>';
      exit;
    }

    $userInfo = [
      'phoneNumber' => $records['phoneNumber'],
      'point' => $records['point'],
    ];

    echo json_encode($userInfo);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  };
?>