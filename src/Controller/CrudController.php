<?php

namespace App\Controller;

use App\Entity\EventLikes;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/spa', name: 'app_crud')]
class CrudController extends AbstractController
{
    #[Route('/addlikes', name: 'add_likes', methods: ["POST"] )]
    public function newBlog(Request $request, ManagerRegistry $doctrine): Response
    {   
        
        
        $em = $doctrine->getManager();
        $singleEvent = new EventLikes();
        $singleEvent->setEventId($request->request->get("eventId"));
        $singleEvent->setLikeCount($request->request->get("likeCount"));
        $singleEvent->setInterestCount($request->request->get("interestCount"));

        $em->persist($singleEvent);
        $em->flush();

        if ($singleEvent == []) {
            echo "array is empty";
            exit;
        }


        return $this->json("Created new blog with an id of: " . $singleEvent->getId());
    } 
}
