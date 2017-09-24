<?php

class User_model extends CI_model
{
  public function __construct()
  {
    parent::__construct();
  }

  public function add($user)
  {

  }

  public function update($user,$user_id)
  {

  }

  public function delete($user_id)
  {

  }

  public function get_user($user_id)
  {
    $user = $this->db->where('user_id',$user_id)
                     ->or_where('nickname',$user_id)
                     ->get('ic_users',1);
    if($user){
      return $user->row_array();
    }
    return false;
  }

  public function get_users()
  {

  }


}
