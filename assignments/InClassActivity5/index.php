<!DOCTYPE html>
<html lang="en">

<head>
  <title>Java Jam Coffee House</title>
  <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>

<body>
  <form action="Activity5.php" method="POST">
    <table>
      <tr>
        <td><label for="name">Name:</label></td>
        <td><input type="text" id="name" name="name"></td>
      </tr>
      <tr>
        <td><label for="username">Username:</label></td>
        <td><input type="text" id="username" name="username"></td>
      </tr>
      <tr>
        <td><label for="password">Password:</label></td>
        <td><input type="password" id="password" name="password"></td>
      </tr>
      <tr>
        <td><label for="address">Address:</label></td>
        <td><input id="address" name="address"></td>
      </tr>
      <tr>
        <td><label for="country">Country:</label></td>
        <td>
          <select name="country" id="country">
            <option value="Turkey">Turkey</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><label for="zip">ZIP Code:</label></td>
        <td><input id="zip" name="zip"></td>
      </tr>
      <tr>
        <td><label for="email">Email:</label></td>
        <td><input id="email" name="email"></td>
      </tr>
      <tr>
        <td><label>Sex:</label></td>
        <td>
          <input type="radio" id="male" name="sex" value="male">
          <label for="male">Male</label>
          <input type="radio" id="female" name="sex" value="female">
          <label for="female">Female</label>
        </td>
      </tr>
      <tr>
        <td><label>Language:</label></td>
        <td>
          <input type="checkbox" name="language[]" value="English">
          <label>English</label>
          <input type="checkbox" name="language[]" value="French">
          <label>French</label>
          <input type="checkbox" name="language[]" value="German">
          <label>German</label>
        </td>
      </tr>
      <tr>
        <td><label for="about">About:</label></td>
        <td><textarea name="about"></textarea></td>
      </tr>
      <tr>
        <td colspan="2"><input type="submit" value="Submit"></td>
      </tr>
    </table>
  </form>
</body>
