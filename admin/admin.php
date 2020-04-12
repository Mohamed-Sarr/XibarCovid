<?php
    require_once('connexion.php');

 
 
    $query="SELECT * FROM counter_table WHERE ip_adress='$visitor_ip'";
    $result=mysqli_query($conn,$query);



    if (!$result) {
        die("Retriving Query Error<br>".$query);
    }
    $total_visitors=mysqli_num_rows($result);
    if ($total_visitors<1) {
        $query="INSERT INTO counter_table(ip_adress) VALUES('$visitor_ip')";
        $result=mysqli_query($conn,$query);
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <style>
        .wrapper{
            height:300px;
            width:300px;
            background-color:skyblue;
            margin:auto;
            text-align:center;
            border:1px solid white;
            box-shadow:2px 2px 10px gray;
        }
        h1{
            background-color: mediumseagreen;
            color:white;
            border-bottom:2px solid white;
        }
        h3{
            font-size:5em;
        }
        h1,h3{
            padding:20px;
            margin:0px;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <h1>Visitor Count</h1>
        <h3><?php echo $total_visitors;?></h3>
    </div>
</body>
</html>
