<?php

namespace App\Controller;

use App\Entity\EventLikes;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/spa', name: 'app_crud')]
class CrudController extends AbstractController
{
    #[Route('/addlikes', name: 'add_likes', methods: ["POST", "GET"] )]
    public function addLike(Request $request, ManagerRegistry $doctrine, EntityManagerInterface $entitymanager): Response
    {   
        $em = $doctrine->getManager();

        $date = new \Datetime($request->request->get("endDate"));
        $singleEvent = new EventLikes();
        $singleEvent->setEventId($request->request->get("eventId"));
        $singleEvent->setLikeCount($request->request->get("likeCount"));
        $singleEvent->setInterestCount($request->request->get("interestCount"));
        $singleEvent->setEndDate($date);

        $em->persist($singleEvent);
        $em->flush();

        if ($singleEvent == []) {
            echo "array is empty";
            exit;
        }


        return $this->json("Created new blog with an id of: " . $singleEvent->getId());
    } 


    #[Route('/getlikes', name: 'get_likes', methods: ["GET"] )]
    public function getLikes(EntityManagerInterface $em): Response
    {
        $likes = $em->getRepository(EventLikes::class)->findAll();
        $data = [];

        foreach ($likes as $like) {
            $data[] = [
                'id' => $like->getId(),
                'eventId' => $like->getEventId(),
                'likeCount' => $like->getLikeCount(),
                'interestCount' => $like->getInterestCount(),
                'endDate' => $like->getEndDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route("/updatelike/{id}", name: "update_likes")]
    public function updatelike(int $id, Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $singleEvent = $entityManager->getRepository(EventLikes::class)->find($id);

        $content = json_decode($request->getContent());

        $singleEvent->setLikeCount($singleEvent->getLikeCount() + $content->likeCount);
        $singleEvent->setInterestCount($singleEvent->getInterestCount() + $content->interestCount);
        $entityManager->flush();

        $data = [
            'id' => $singleEvent->getId(),
            'likeCount' => $singleEvent->getLikeCount(),
            'interestCount' => $singleEvent->getInterestCount(),
        ];


        return $this->json($data);
    }

}
