 $url=parse_url(getenv("mysql://b1fe07d1504bdd:94fb20e4@us-cdbr-east-05.cleardb.net/heroku_ca22a5369c52f17?reconnect=true"));

    $server = $url["us-cdbr-east-05.cleardb.net"];
    $username = $url["b1fe07d1504bdd"];
    $password = $url["94fb20e4"];
    $db = substr($url["heroku_ca22a5369c52f17"],1);

    mysqli_connect($server, $username, $password);


    mysqli_select_db($db);

    if ($_SERVER['SERVER_NAME'] == "thawing-island-242342379.herokuapp.com") {
    	$url = parse_url(getenv("CLEARDB_DATABASE_URL"));
    	$host = $url["host"];
    	$username = $url["user"];
    	$password = $url["pass"];
    	$dbname = substr($url["path"], 1);
    } else {
    	$host = 'localhost';
    	$dbname = 'db';
    	$username = 'user';
    	$password = '123';
    }