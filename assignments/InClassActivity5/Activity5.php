<!DOCTYPE html>
<html lang="en">

<head>
  <title>Java Jam Coffee House</title>
  <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>

<body>
  <?php
  echo "Name: ";
  if (empty($_POST['name'])) {
    echo "Not provided";
  } else {
    echo $_POST['name'];
  }
  echo "<br/>";
  echo "Username: ";
  if (empty($_POST['username'])) {
    echo "Not provided";
  } else {
    echo $_POST['username'];
  }
  echo "<br/>";
  echo "Password: ";
  if (empty($_POST['password'])) {
    echo "Not provided";
  } else {
    echo $_POST['password'];
  }

  echo "<br/>";
  echo "Address: ";
  if (empty($_POST['address'])) {
    echo "Not provided";
  } else {
    echo $_POST['address'];
  }
  echo "<br/>";

  echo "Country: ";
  if (isset($_POST['country'])) {
    $country = $_POST['country'];
    echo $country;
  } else {
    echo "Not provided";
  }
  echo "<br/>";
  echo "Zip: ";
  if (empty($_POST['zip'])) {
    echo "Not provided";
  } else {
    echo $_POST['zip'];
  }

  echo "<br/>";
  echo "Email: ";
  if (empty($_POST['email'])) {
    echo "Not provided";
  } else {
    echo $_POST['email'];
  }
  echo '<br/>';
  if (isset($_POST['sex'])) {
    $sex = $_POST['sex'];
    echo "Sex: $sex";
  } else {
    echo "Sex: Not provided";
  }
  echo "<br/>";
  echo "Languages: ";
  if (isset($_POST['language'])) {
    $languages = $_POST['language'];
    echo "<br/>";
    foreach ($languages as $language) {
      echo $language;
      echo "<br/>";
    }
  } else {
    echo "Not provided";
  }
  echo "<br/>";
  echo "About: ";
  if (empty($_POST['about'])) {
    echo "Not provided";
  } else {
    echo $_POST['about'];
  }
  ?>
</body>
