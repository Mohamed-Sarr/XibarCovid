<?php

            
        $hostname="localhost";
        $db_user="root";
        $db_pass="";
        $db_name="covid_01";

        $conn=mysqli_connect($hostname,$db_user,$db_pass,$db_name);
        if (mysqli_connect_errno()) {
            die("Error connecting to the Database");
        }
        $visitor_ip=$_SERVER['REMOTE_ADDR'];




?>