```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>sortable demo</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//sTable.js"></script>
</head>
<body>

<table id="sortable">
  <thead>
      <tr>
          <th id="col1">Col 1</th>
          <th id="col2">Col 2</th>         
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1 1</td>
      <td>16 000 000</td>
    </tr>
    <tr>
      <td>Item 1 1</td>
      <td>17 000 000</td>
    </tr>
    <tr>
      <td>Item 1 1</td>
      <td>16 500 000</td>
    </tr>
    <tr>
      <td>Item 1 1</td>
      <td>17 500 000</td>
    </tr>
  </tbody>
</table>

<script>$("#col2").sTable();</script>

</body>
</html>
```
