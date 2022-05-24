<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SPAController extends AbstractController
{
    #[Route('/{reactRoute}', name: 'spa_home', requirements:["reactRoute"=>"^(?!spa).+"], defaults:["reactRoute"=>null])]
    public function index(): Response
    {
        return $this->render("/spa/index.html.twig");
    }
}
