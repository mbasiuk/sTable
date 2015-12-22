# sTable widget

Used for sorting rows in the table.   
By default this used for sorting as int numbers, but you may easy customize it.

# Dependencies:
[jQuery](https://github.com/jquery/jquery)

# Examples:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>sTable demo</title>
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

# License
Dual licensed [MIT](http://www.opensource.org/licenses/mit-license) & [GPL](http://www.opensource.org/licenses/gpl-license)
