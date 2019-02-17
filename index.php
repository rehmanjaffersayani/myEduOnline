<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$result=array();

if(isset($_GET['file'])){

    $filename = $_GET['file'];

    if (strpos($filename, '.json')) {
       
        $filename = str_replace('.json','',$filename);
    }
    $filename =$filename. '.json';
   
    if(file_exists ($filename)){
      $data =   file_get_contents($filename);
      $data = json_decode($data);

      if(array_key_exists('quest_paths', $data[0] )|| array_key_exists('fullname', $data[0]) ){
        $result['status']=true;
        $result['message']='Fetching Json data';
        $result['data']=$data;
      }else{
        $result['status']=false;
        $result['message']='Unable to load JSON file';
      }

    }else{
        
    $result['status']=false;
    $result['message']='File doesn\'t exist';
    }
}

else{
   
    $result['status']=false;
    $result['message']='File param missing in url';
    
}

echo json_encode($result)
?>