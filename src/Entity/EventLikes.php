<?php

namespace App\Entity;

use App\Repository\EventLikesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventLikesRepository::class)]
class EventLikes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $eventId;

    #[ORM\Column(type: 'integer')]
    private $likeCount;

    #[ORM\Column(type: 'integer')]
    private $interestCount;

    #[ORM\Column(type: 'date')]
    private $endDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEventId(): ?string
    {
        return $this->eventId;
    }

    public function setEventId(string $eventId): self
    {
        $this->eventId = $eventId;

        return $this;
    }

    public function getLikeCount(): ?int
    {
        return $this->likeCount;
    }

    public function setLikeCount(int $likeCount): self
    {
        $this->likeCount = $likeCount;

        return $this;
    }

    public function getInterestCount(): ?int
    {
        return $this->interestCount;
    }

    public function setInterestCount(int $interestCount): self
    {
        $this->interestCount = $interestCount;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }
}
