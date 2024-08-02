import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const MessageCard = ({ message, onMessageDelete }) => {
  const { content, _id } = message;
  const [rollNumber, assignmentLink, messageText] = content.split('||');

  // Ensure the assignment link has the correct protocol
  const formattedLink = assignmentLink.trim().startsWith('http') ? assignmentLink.trim() : `https://${assignmentLink.trim()}`;

  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold">Message</h3>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div>
          <strong>Roll Number:</strong> {rollNumber}
        </div>
        <div>
          <Link href={formattedLink} passHref>
            <Button  target="_blank" rel="noopener noreferrer">
              Go to Assignment
            </Button>
          </Link>
        </div>
        <div>
          <strong>Message:</strong> {messageText}
        </div>
        <div>
          <Button
            variant="destructive"
            onClick={() => onMessageDelete(_id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
