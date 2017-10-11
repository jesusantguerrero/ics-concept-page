<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class App extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
    $this->load->library('parser');
    $this->load->library('auth');
  }

	public function index()
	{
    if ($this->auth->isLoged()) {
      $this->home();
    } else {
      $this->login();
    }
  }

  public function home($page = 'app'){
    $data = $this->defineData($page);
    $this->parser->parse('admin/layouts/head',$data);
    $navigation = $this->load->view('admin/layouts/navigation','', true);
    $this->parser->parse('admin/app',['navigation' => $navigation]);
    $this->parser->parse('admin/layouts/footer',$data);
  }

  public function login($page = 'home')
  {
    $data = $this->defineData($page);
    $this->parser->parse('home',$data);
  }


  private function defineData($title,$js = [] ,$css = [])
  {
    $jsFiles = [];
    $cssFiles = [];
    $js = array_merge($js,['jquery-3.2.1.min','popper.min','manifest','vendor','bootstrap.min',$title]);
    $css = array_merge($css,['bootstrap.min',$title]);
    $assets   = 'assets/';

    foreach ($js as $filename) {
      array_push($jsFiles, ['link' => base_url()."{$assets}js/{$filename}.js"]);
    }

    foreach ($css as $filename) {
      array_push($cssFiles,['link' => base_url()."{$assets}css/{$filename}.css"]);
    }

    return  [
      'title'=> $title,
      'css'  => $cssFiles,
      'js'   => $jsFiles
    ];
  }
}
