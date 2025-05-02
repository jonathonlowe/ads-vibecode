import { TicketCardProps } from '../components/TicketCard';

const ticketTitles = [
  'Update user authentication flow',
  'Fix navigation menu responsiveness',
  'Implement dark mode support',
  'Optimize image loading performance',
  'Add form validation',
  'Fix cross-browser compatibility issues',
  'Implement search functionality',
  'Update API integration',
  'Fix memory leak in dashboard',
  'Add error boundary handling',
];

const assignees = [
  { name: 'Sarah Chen', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Mike Johnson', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Emily Davis', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Alex Kim', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
];

const types: TicketCardProps['type'][] = ['task', 'bug', 'story', 'improvement'];
const statuses: TicketCardProps['status'][] = ['in progress', 'done', 'to do'];

export const generateRandomTickets = (count: number): TicketCardProps[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `VTF-${Math.floor(Math.random() * 10000)}`,
    title: ticketTitles[Math.floor(Math.random() * ticketTitles.length)],
    type: types[Math.floor(Math.random() * types.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    assignee: assignees[Math.floor(Math.random() * assignees.length)],
  }));
};

// Generate a set of tickets for each month
export const ticketsByMonth = new Map(
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => [
    month,
    generateRandomTickets(5) // 5 tickets per month
  ])
); 