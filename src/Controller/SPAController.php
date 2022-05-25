<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Config\Framework\HttpClientConfig;

class SPAController extends AbstractController
{
    private $client;

    #[Route('/{reactRoute}', name: 'spa_home', requirements:["reactRoute"=>"^(?!spa).+"], defaults:["reactRoute"=>null])]
    public function index(): Response
    {
        // $response = $client->request('GET', 'https://...');
        return $this->render("/spa/index.html.twig", );
    }
}
