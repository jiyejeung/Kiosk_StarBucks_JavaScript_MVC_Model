<?php
  require './dbConnect.php';

  $page = $_REQUEST['page'];

  if ($page === 'slideImageInfo') {
    $sqlQuery = 'SELECT * FROM `slideImageInfo`';

    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...");</script>';
      exit;
    }

    if (mysqli_num_rows($records) === 0) {
      echo '<script>console.log("There is no data in slideImageInfo TABLE...");</script>';
    }

    $slideImageUrl = [];

    while ($record = mysqli_fetch_array($records)) {
      array_push($slideImageUrl, $record['slideImageUrl']);
    }

    echo json_encode($slideImageUrl);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  }

  if ($page === 'userInfo') {
    $mobilePhoneNumber = $_REQUEST['mobilePhoneNumber'];
    $sqlQuery = 'SELECT * FROM `userInfo` WHERE `mobilePhoneNumber`="'.$mobilePhoneNumber.'"';

    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...");</script>';
      exit;
    }

    if (mysqli_num_rows($records) === 0) {
      echo '<script>console.log("There is no data in slideImageInfo TABLE...");</script>';
      exit;
    }

    while ($record = mysqli_fetch_array($records)) {
      $userInfo = [
        'id' => $record['id'],
        'userName' => $record['userName'],
        'mobilePhoneNumber' => $record['mobilePhoneNumber'],
        'points' => $record['points']
      ];
    }

    echo json_encode($userInfo);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  }

  if ($page === 'productInfo') {
    $sqlQuery = 'SELECT * FROM `productInfo`';

    if (!$records = mysqli_query($dbHandler, $sqlQuery)) {
      echo '<script>console.log("SQL Syntax Error...");</script>';
      exit;
    }

    if (mysqli_num_rows($records) === 0) {
      echo '<script>console.log("There is no data in slideImageInfo TABLE...");</script>';
      exit;
    }

    $productInfoList = [];

    while ($record = mysqli_fetch_array($records)) {
      $productInfoItem = [
        'id' => $record['id'],
        'productName' => $record['productName'],
        'productCategory' => $record['productCategory'],
        'productType' => $record['productType'],
        'productPrice' => $record['productPrice'],
        'productAdditionalFee' => $record['productAdditionalFee'],
        'productCount' => $record['productCount'],
        'productImageUrl' => $record['productImageUrl'],
        'productSize' => $record['productSize'],
        'productIce' => $record['productIce'],
        'productTemperature' => $record['productTemperature'],
        'productEspressoRoast' => $record['productEspressoRoast'],
        'productEspressoShot' => $record['productEspressoShot'],
        'productSyrup' => $record['productSyrup'],
        'productSyrupCount' => $record['productSyrupCount'],
      ];

      array_push($productInfoList, $productInfoItem);
    }

    echo json_encode($productInfoList);
    mysqli_free_result($records);
    mysqli_close($dbHandler);
  }

  if ($page === 'updatePoints') {
    $id = $_REQUEST['id'];
    $points = $_REQUEST['points'];
    $sql = 'UPDATE `userInfo` SET points`='.$points.' WHERE `id`='.$id;
    
    if (!$records = mysqli_query($dbHandler, $sql)) {
      echo 'SQL Syntax Error';
      exit;
    } else {
      echo 'SUCCESS';
      exit;
    }
  }
?>