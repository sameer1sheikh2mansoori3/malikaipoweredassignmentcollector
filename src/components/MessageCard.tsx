import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// Define the type for the message prop
interface Message {
  content: string;
  _id: string;
}

// Define the type for the component props
interface MessageCardProps {
  message: Message;
  onMessageDelete: (id: string) => void;
}

export const MessageCard: React.FC<MessageCardProps> = ({ message, onMessageDelete }) => {
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
          <Link href={formattedLink} target="_blank" rel="noopener noreferrer">
            <Button>
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
