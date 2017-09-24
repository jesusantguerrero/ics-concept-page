<?php

  class Auth {
    public function __construct()
    {
      $ci =& get_instance();
      $this->session = $_SESSION;
      $this->user = $ci->load->model('user_model');
    }

    public function login($nickname, $password, $mode = 'admin')
    {
      $user = $this->user_model->get_user($nickname);

      if ($user) {
        if (password_verify($password,$user['password'])) {
          $_SESSION['user_data'] = $user['user_id'];
          return true;
        }
      }
      return false;
    }

    public function isLoged()
    {
      return (bool) isset($_SESSION['user_data']);
    }

    public function resetPassword()
    {

    }

    public function logout()
    {
      session_unset($_SESSION['user_data']);
      session_destroy();
    }

    public function getToken()
    {

    }

    public function has_permission($level,$page){

    }
  }
