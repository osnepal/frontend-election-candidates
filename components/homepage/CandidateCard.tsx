import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";

interface CandidateCardProps {
  name: string;
  party: string;
  avatar?: string;
  votes?: number;
  verified?: boolean;
  onVote?: () => void;
}

export function CandidateCard({
  name,
  party,
  avatar,
  votes,
  verified,
  onVote,
}: CandidateCardProps) {
  return (
    <Card className="w-full hover:border-1 hover:border-primary h-fit shadow-sm hover:shadow-lg transition rounded-2xl bg-background/50 backdrop-blur-md">
      <CardHeader>
        <img
          className="h-[200px] w-[100%] object-cover rounded-lg select-none"
          src={avatar!}
          alt={name}
        />
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          <CardTitle className="text-base font-semibold">{name}</CardTitle>
          <span className="text-sm text-muted-foreground">{party}</span>
          {verified && (
            <Badge className="absolute top-4 right-4 ml-auto bg-background text-green-700 border border-green-200 dark:border-green-900">
              Verified
            </Badge>
          )}
        </div>

        {votes === undefined && (
          <p className="text-sm text-muted-foreground">
            Votes: <span className="font-medium">{votes}</span>
          </p>
        )}
      </CardContent>

      <CardFooter className=" gap-2">
        <Button
          variant="outline"
          className="text-green-700 flex-1 cursor-pointer"
          onClick={onVote}
        >
          Like <ThumbsUp />
        </Button>
        <Button
          variant="outline"
          className="text-red-700 flex-1 cursor-pointer"
          onClick={onVote}
        >
          Dislike <ThumbsDown />
        </Button>
      </CardFooter>
    </Card>
  );
}
