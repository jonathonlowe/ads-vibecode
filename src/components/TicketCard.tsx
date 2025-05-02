import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';
import BugIcon from '@atlaskit/icon-object/glyph/bug/16';
import TaskIcon from '@atlaskit/icon-object/glyph/task/16';
import ImprovementIcon from '@atlaskit/icon-object/glyph/improvement/16';
import StoryIcon from '@atlaskit/icon-object/glyph/story/16';

interface TicketCardProps {
  id: string;
  title: string;
  type: 'task' | 'bug' | 'story' | 'improvement';
  status: 'in progress' | 'done' | 'to do';
  assignee: {
    name: string;
    avatarUrl?: string;
  };
}

const CardContainer = styled.div`
  padding: ${token('space.200')};
  background-color: ${token('elevation.surface')};
  border: 1px solid ${token('color.border')};
  border-radius: ${token('border.radius.100')};
  cursor: pointer;

  &:hover {
    background-color: ${token('color.background.neutral.subtle.hovered')};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  margin-bottom: ${token('space.100')};
`;

const TicketId = styled.span`
  color: ${token('color.text.subtle')};
  font-size: 12px;
`;

const Title = styled.div`
  color: ${token('color.text')};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: ${token('space.100')};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${token('space.100')};
`;

const getStatusColor = (status: TicketCardProps['status']) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return 'inprogress';
    case 'done':
      return 'success';
    case 'to do':
      return 'default';
    default:
      return 'default';
  }
};

const getTypeIcon = (type: TicketCardProps['type']) => {
  switch (type.toLowerCase()) {
    case 'task':
      return <TaskIcon label="Task" />;
    case 'bug':
      return <BugIcon label="Bug" />;
    case 'improvement':
      return <ImprovementIcon label="Improvement" />;
    case 'story':
      return <StoryIcon label="Story" />;
    default:
      return <TaskIcon label="Task" />;
  }
};

export const TicketCard = ({ id, title, type, status, assignee }: TicketCardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <span>{getTypeIcon(type)}</span>
        <TicketId>{id}</TicketId>
      </CardHeader>
      <Title>{title}</Title>
      <CardFooter>
        <Lozenge appearance={getStatusColor(status)}>{status}</Lozenge>
        <Avatar
          size="small"
          name={assignee.name}
          src={assignee.avatarUrl}
        />
      </CardFooter>
    </CardContainer>
  );
};

export type { TicketCardProps }; 