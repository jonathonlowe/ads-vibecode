import React, { useState, useEffect, useRef } from 'react';
import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Heading from '@atlaskit/heading';
import { Text } from '@atlaskit/primitives';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';
import Badge from '@atlaskit/badge';
import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';
import EmptyState from '@atlaskit/empty-state';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import InlineDialog from '@atlaskit/inline-dialog';
import Textarea from '@atlaskit/textarea';
import Textfield from '@atlaskit/textfield';
import Select from '@atlaskit/select';
import PageHeader from '@atlaskit/page-header';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import SectionMessage from '@atlaskit/section-message';


// Icons
import BugIcon from '@atlaskit/icon-object/glyph/bug/16';
import TaskIcon from '@atlaskit/icon-object/glyph/task/16';
import ImprovementIcon from '@atlaskit/icon-object/glyph/improvement/16';
import StoryIcon from '@atlaskit/icon-object/glyph/story/16';
import EpicIcon from '@atlaskit/icon-object/glyph/epic/16';
import MoreIcon from '@atlaskit/icon/glyph/more';
import EditIcon from '@atlaskit/icon/glyph/edit';
import CommentIcon from '@atlaskit/icon/glyph/comment';
import AttachmentIcon from '@atlaskit/icon/glyph/attachment';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import PersonIcon from '@atlaskit/icon/glyph/person';
import PriorityHighIcon from '@atlaskit/icon/glyph/arrow-up';
import PriorityLowIcon from '@atlaskit/icon/glyph/arrow-down';
import WatchIcon from '@atlaskit/icon/glyph/watch';
import ShareIcon from '@atlaskit/icon/glyph/share';
import LinkIcon from '@atlaskit/icon/glyph/link';
import CodeIcon from '@atlaskit/icon/glyph/code';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import CheckIcon from '@atlaskit/icon/glyph/check';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import DocumentIcon from '@atlaskit/icon/glyph/document';
import AddIcon from '@atlaskit/icon/glyph/add';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import StarIcon from '@atlaskit/icon/glyph/star';
import PremiumIcon from '@atlaskit/icon/glyph/premium';
import SearchIcon from '@atlaskit/icon/glyph/search';
import QuestionIcon from '@atlaskit/icon/glyph/question';
import NotificationIcon from '@atlaskit/icon/glyph/notification';
import ChatIcon from '@atlaskit/icon/glyph/comment';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import RecentIcon from '@atlaskit/icon/glyph/recent';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import TeamIcon from '@atlaskit/icon/glyph/people';
import RoadmapIcon from '@atlaskit/icon/glyph/roadmap';
import PlansIcon from '@atlaskit/icon/glyph/calendar';
import RocketIcon from '@atlaskit/icon/glyph/ship';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import TargetIcon from '@atlaskit/icon/glyph/canvas';
import GridIcon from '@atlaskit/icon/glyph/menu';
import HistoryIcon from '@atlaskit/icon/glyph/recent';
import MaximizeIcon from '@atlaskit/icon/glyph/vid-full-screen-on';
import SendIcon from '@atlaskit/icon/glyph/send';
import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import MentionIcon from '@atlaskit/icon/glyph/mention';

const Container = styled.div`
  width: 100%;
  background-color: ${token('elevation.surface')};
  padding: 0 40px;
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${token('space.100')};
  padding: ${token('space.200')} 0;
  font-size: 14px;
  color: ${token('color.text.subtle')};
`;

const BreadcrumbsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
`;

const TopIconButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
`;

const GlobalNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1D2125;
  padding: 0 ${token('space.200')};
  height: 56px;
  border-bottom: 1px solid #2C333A;
`;

const GlobalNavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
`;

const GlobalNavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 900px;
  margin: 0 ${token('space.400')};
`;

const GlobalNavRight = styled.div`
  display: flex;
  align-items: center;
`;

const JiraLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
`;

const JiraLogoIcon = () => (
  <svg width="56" height="24" viewBox="0 0 56 24">
    <path fill="#1868db" d="M0 6a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"></path>
    <path fill="white" d="M9.051 15.434H7.734c-1.988 0-3.413-1.218-3.413-3h7.085c.367 0 .605.26.605.63v7.13c-1.772 0-2.96-1.435-2.96-3.434zm3.5-3.543h-1.318c-1.987 0-3.413-1.196-3.413-2.978h7.085c.367 0 .627.239.627.608v7.13c-1.772 0-2.981-1.435-2.981-3.434zm3.52-3.522h-1.317c-1.987 0-3.413-1.217-3.413-3h7.085c.367 0 .605.262.605.61v7.129c-1.771 0-2.96-1.435-2.96-3.434z"></path>
    <path fill="#FFFFFF" d="M50.89 17.13a2.9 2.9 0 0 1-1.59-.46q-.7-.46-1.12-1.33-.41-.88-.41-2.15 0-1.29.42-2.17.42-.87 1.14-1.32a2.9 2.9 0 0 1 1.58-.44q.66 0 1.09.23.43.22.69.54t.4.61h.08V9.36h1.91V17h-1.9v-1.22h-.08a2.6 2.6 0 0 1-.41.61q-.27.32-.7.53t-1.08.21m.57-1.55q.55 0 .94-.3.38-.3.58-.84.21-.54.21-1.25 0-.72-.2-1.25t-.58-.83q-.38-.29-.94-.29-.57 0-.96.3-.38.3-.58.83a3.6 3.6 0 0 0-.19 1.23q0 .69.2 1.23t.58.85q.39.31.95.31M42.78 17V9.36h1.87v1.31h.08q.21-.68.71-1.05a1.93 1.93 0 0 1 1.16-.36q.15 0 .34.02.19.01.32.04v1.74a2 2 0 0 0-.38-.07 5 5 0 0 0-.48-.03q-.48 0-.86.21a1.5 1.5 0 0 0-.6.57 1.65 1.65 0 0 0-.21.85V17zm-3.73 0V9.36h1.93V17zm-.02-8.73V6.52h1.98v1.75zm-5.17 8.87q-1.55 0-2.45-.82-.9-.83-.9-2.35v-.59h1.96v.61q0 .77.38 1.16t1.02.39 1-.39q.38-.4.38-1.16V6.82h1.94v7.14q0 1.52-.9 2.35-.89.83-2.43.83"></path>
  </svg>
);

const NavButton = styled.button`
  background: none;
  border: none;
  color: #B3BAC5;
  padding: ${token('space.100')} ${token('space.200')};
  border-radius: ${token('border.radius.100')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    background-color: #282E33;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: ${token('space.100')} ${token('space.200')};
  gap: ${token('space.100')};
  width: 100%;
  max-width: 800px;
  border: 1px solid #6B7280;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: #FFFFFF;
  font-size: 14px;
  
  &::placeholder {
    color: #8C9BAB;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #B3BAC5;
  padding: ${token('space.100')};
  border-radius: ${token('border.radius.100')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #282E33;
  }
`;

const CreateButton = styled.button`
  background-color: ${token('color.link')};
  border: none;
  color: #000000;
  padding: ${token('space.100')} ${token('space.200')};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  margin-left: ${token('space.200')};
  
  &:hover {
    opacity: 0.8;
  }
`;

const MainLayout = styled.div`
  display: flex;
  min-height: calc(100vh - 56px);
`;

const LeftSidebar = styled.nav<{ isOpen: boolean }>`
  width: ${props => props.isOpen ? '280px' : '0'};
  background-color: #1D2125;
  border-right: 1px solid #2C333A;
  padding: ${props => props.isOpen ? token('space.200') + ' 0' : '0'};
  flex-shrink: 0;
  color: #B3BAC5;
  overflow: hidden;
  transition: width 0.2s ease, padding 0.2s ease;
`;

const NavSidebarSection = styled.div`
  margin-bottom: ${token('space.200')};
`;

const NavSidebarSectionTitle = styled.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #8C9BAB;
  margin-bottom: ${token('space.100')};
  padding: 0 ${token('space.300')};
`;

const SidebarNavItem = styled.button<{ isActive?: boolean; hasChevron?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${token('space.200')};
  width: 100%;
  padding: ${token('space.100')} ${token('space.300')};
  background: none;
  border: none;
  color: #B3BAC5;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  
  ${props => props.isActive && `
    background-color: #1C2B41;
    color: #579DFF;
    border-right: 2px solid #579DFF;
  `}
  
  &:hover {
    background-color: ${props => props.isActive ? '#1C2B41' : '#282E33'};
  }
`;

const NavItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
`;

const ProjectItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
  padding: ${token('space.100')} ${token('space.300')};
  color: #B3BAC5;
  font-size: 14px;
  cursor: pointer;
  
  ${props => props.isActive && `
    background-color: #1C2B41;
    color: #579DFF;
    border-right: 2px solid #579DFF;
  `}
  
  &:hover {
    background-color: ${props => props.isActive ? '#1C2B41' : '#282E33'};
  }
`;

const ProjectIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: #579DFF;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${token('space.100')} ${token('space.300')};
  color: #B3BAC5;
  font-size: 14px;
`;

const ProjectsActions = styled.div`
  display: flex;
  gap: ${token('space.050')};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #8C9BAB;
  cursor: pointer;
  padding: 2px;
  
  &:hover {
    color: #B3BAC5;
  }
`;

const AppIntegration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${token('space.200')};
  padding: ${token('space.100')} ${token('space.300')};
  color: #B3BAC5;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #282E33;
  }
`;

const AppIcon = styled.div<{ bgColor: string }>`
  width: 16px;
  height: 16px;
  background-color: ${props => props.bgColor};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExternalLinkIcon = styled.div`
  color: #8C9BAB;
  font-size: 12px;
`;

const MainContentArea = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatPanel = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 56px;
  right: 0;
  width: 400px;
  height: calc(100vh - 56px);
  background-color: #1D2125;
  border-left: 1px solid #2C333A;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
`;

const ChatHeader = styled.div`
  padding: ${token('space.200')};
  border-bottom: 1px solid #2C333A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1D2125;
  color: #FFFFFF;
`;

const ChatSidebar = styled.div`
  width: 80px;
  background-color: #161A1D;
  border-right: 1px solid #2C333A;
  display: flex;
  flex-direction: column;
  padding: ${token('space.200')} 0;
`;

const ChatSidebarItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${token('space.200')} ${token('space.100')};
  cursor: pointer;
  color: ${props => props.isActive ? '#579DFF' : '#8C9BAB'};
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  gap: ${token('space.100')};
  
  ${props => props.isActive && `
    background-color: #1C2B41;
    border-right: 2px solid #579DFF;
  `}
  
  &:hover {
    background-color: ${props => props.isActive ? '#1C2B41' : '#282E33'};
    color: ${props => props.isActive ? '#579DFF' : '#B3BAC5'};
  }
`;

const ChatSidebarIcon = styled.div<{ bgColor?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || '#579DFF'};
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const ChatMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatWelcome = styled.div`
  padding: ${token('space.400')};
  text-align: center;
  color: #B3BAC5;
`;

const ChatWelcomeTitle = styled.h2`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: ${token('space.200')};
`;

const ChatWelcomeSubtitle = styled.p`
  color: #8C9BAB;
  margin-bottom: ${token('space.300')};
  line-height: 1.4;
`;

const ChatWelcomeLink = styled.a`
  color: #579DFF;
  text-decoration: underline;
  
  &:hover {
    color: #85B8FF;
  }
`;

const ChatSuggestionCard = styled.div`
  background-color: #282E33;
  border: 1px solid #3C4147;
  border-radius: 8px;
  padding: ${token('space.300')};
  margin-bottom: ${token('space.200')};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2C333A;
    border-color: #4C5862;
  }
`;

const ChatSuggestionIcon = styled.div`
  color: #579DFF;
  margin-bottom: ${token('space.100')};
`;

const ChatSuggestionTitle = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: ${token('space.100')};
`;

const ChatSuggestionDescription = styled.div`
  color: #8C9BAB;
  font-size: 14px;
  line-height: 1.4;
`;

const ChatAgentSection = styled.div`
  padding: 0 ${token('space.400')};
  margin-bottom: ${token('space.300')};
`;

const ChatAgentTitle = styled.h3`
  color: #B3BAC5;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: ${token('space.200')};
`;

const ChatAgentCard = styled.div`
  background-color: #282E33;
  border: 1px solid #3C4147;
  border-radius: 8px;
  padding: ${token('space.300')};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2C333A;
    border-color: #4C5862;
  }
`;

const ChatAgentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.100')};
`;

const ChatAgentAvatar = styled.div`
  width: 24px;
  height: 24px;
  background-color: #4ADE80;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

const ChatAgentName = styled.div`
  color: #FFFFFF;
  font-weight: 600;
`;

const ChatAgentAuthor = styled.div`
  color: #579DFF;
  font-size: 12px;
`;

const ChatAgentDescription = styled.div`
  color: #8C9BAB;
  font-size: 14px;
`;

const ChatBrowseButton = styled.button`
  background-color: #282E33;
  border: 1px solid #3C4147;
  color: #B3BAC5;
  padding: ${token('space.200')} ${token('space.300')};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin: 0 ${token('space.400')} ${token('space.300')};
  
  &:hover {
    background-color: #2C333A;
    border-color: #4C5862;
  }
`;

const ChatInputContainer = styled.div`
  padding: ${token('space.300')} ${token('space.400')};
  border-top: 1px solid #2C333A;
  margin-top: auto;
`;

const ChatInputWrapper = styled.div`
  position: relative;
  background-color: #282E33;
  border: 1px solid #3C4147;
  border-radius: 8px;
  padding: ${token('space.200')};
`;

const ChatInputField = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #FFFFFF;
  font-size: 14px;
  
  &::placeholder {
    color: #8C9BAB;
  }
`;

const ChatInputActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  margin-top: ${token('space.200')};
`;

const ChatInputButton = styled.button`
  background: none;
  border: none;
  color: #8C9BAB;
  cursor: pointer;
  padding: ${token('space.050')};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #B3BAC5;
  }
`;

const ChatSendButton = styled.button`
  background: none;
  border: none;
  color: #579DFF;
  cursor: pointer;
  padding: ${token('space.050')};
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #85B8FF;
  }
  
  &:disabled {
    color: #4C5862;
    cursor: not-allowed;
  }
`;

const ChatDisclaimer = styled.div`
  color: #6B7280;
  font-size: 12px;
  text-align: center;
  padding: ${token('space.200')} ${token('space.400')};
  border-top: 1px solid #2C333A;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  color: #8C9BAB;
  cursor: pointer;
  padding: ${token('space.050')};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #B3BAC5;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${token('space.300')};
  display: flex;
  flex-direction: column;
  gap: ${token('space.300')};
`;

const ChatMessage = styled.div<{ isOwn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin-bottom: ${token('space.300')};
`;

const MessageBubble = styled.div<{ isOwn?: boolean; isBot?: boolean }>`
  background-color: ${props => 
    props.isOwn ? '#1C4A73' : 'transparent'};
  color: ${props => props.isOwn ? '#FFFFFF' : '#B3BAC5'};
  padding: ${props => props.isOwn ? `${token('space.200')} ${token('space.300')}` : '0'};
  border-radius: ${props => props.isOwn ? '12px' : '0'};
  max-width: 80%;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: ${token('space.200')};
`;

const BotMessage = styled.div`
  color: #B3BAC5;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: ${token('space.300')};
`;

const BotGreeting = styled.div`
  color: #B3BAC5;
  font-size: 16px;
  margin-bottom: ${token('space.300')};
`;

const MessageActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
  margin-top: ${token('space.200')};
`;

const MessageActionButton = styled.button`
  background: none;
  border: 1px solid #3C4147;
  color: #8C9BAB;
  padding: ${token('space.100')};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #282E33;
    border-color: #4C5862;
  }
`;

const BulletList = styled.ul`
  margin: ${token('space.200')} 0;
  padding-left: ${token('space.400')};
  color: #B3BAC5;
`;

const BulletItem = styled.li`
  margin-bottom: ${token('space.200')};
  line-height: 1.5;
  
  strong {
    color: #FFFFFF;
  }
`;

const SourcesSection = styled.div`
  margin-top: ${token('space.400')};
  padding-top: ${token('space.300')};
  border-top: 1px solid #2C333A;
`;

const SourcesTitle = styled.div`
  color: #579DFF;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: ${token('space.200')};
`;

const SourceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.200')};
  font-size: 14px;
`;

const SourceNumber = styled.div`
  color: #8C9BAB;
  font-weight: 600;
  min-width: 16px;
`;

const SourceContent = styled.div`
  flex: 1;
`;

const SourceLink = styled.a`
  color: #579DFF;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SourceBadge = styled.span<{ type: 'done' | 'bug' }>`
  background-color: ${props => props.type === 'done' ? '#1F845A' : '#DE350B'};
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  margin-left: ${token('space.100')};
`;

const MessageAuthor = styled.div`
  font-size: 12px;
  color: ${token('color.text.subtle')};
  margin-bottom: ${token('space.050')};
`;

const ChatInput = styled.div`
  padding: ${token('space.200')};
  border-top: 1px solid ${token('color.border')};
  display: flex;
  gap: ${token('space.100')};
`;

const ChatTextarea = styled.textarea`
  flex: 1;
  min-height: 40px;
  max-height: 100px;
  padding: ${token('space.100')};
  border: 1px solid ${token('color.border')};
  border-radius: ${token('border.radius.100')};
  resize: none;
  font-family: inherit;
  font-size: 14px;
  
  &:focus {
    outline: 2px solid ${token('color.border.focused')};
    border-color: ${token('color.border.focused')};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${token('color.text.subtle')};
  cursor: pointer;
  padding: ${token('space.050')};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${token('color.text')};
  }
`;

const BreadcrumbItem = styled.span`
  color: ${token('color.text')};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  color: ${token('color.text.subtlest')};
`;

const MainHeader = styled.div`
  padding: 0 0 ${token('space.400')};
`;

const TitleSection = styled.div`
  margin-bottom: ${token('space.100')};
`;

const ActionButtonsRow = styled.div`
  display: flex;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.200')};
`;

const StyledButton = styled(Button)`
  border: 1px solid ${token('color.border')} !important;
  background-color: transparent !important;
  transition: all 0.2s ease !important;
  
  &:hover {
    background-color: ${token('color.background.neutral.subtle.hovered')} !important;
    border-color: ${token('color.border.bold')} !important;
  }
`;

const UnsavedChangesIndicator = styled.span`
  color: ${token('color.text.subtle')};
  font-size: 14px;
  font-weight: normal;
`;

const DescriptionContainer = styled.div`
  margin-bottom: ${token('space.400')};
`;

const DescriptionHeaderInline = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.100')};
`;

const DescriptionContent = styled.div`
  background-color: ${token('color.background.neutral.subtle')};
  border-radius: ${token('border.radius.200')};
  line-height: 1.5;
`;

const ContentGrid = styled.div<{ isDetailsPanelOpen: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.isDetailsPanelOpen ? '1fr 576px' : '1fr'};
  gap: ${props => props.isDetailsPanelOpen ? token('space.400') : '0'};
  transition: grid-template-columns 0.3s ease, gap 0.3s ease;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  min-width: 0;
`;

const Sidebar = styled.div`
  background-color: ${token('elevation.surface')};
  border: 1px solid ${token('color.border')};
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
`;

const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.300')};
`;

const IssueKey = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  color: ${token('color.text.subtle')};
  font-weight: 600;
`;

const IssueTitle = styled.div`
  margin: ${token('space.200')} 0;
`;

const Description = styled.div`
  margin: ${token('space.300')} 0;
  padding: ${token('space.200')};
  background-color: ${token('color.background.neutral.subtle')};
  border-radius: ${token('border.radius.100')};
  min-height: 120px;
`;

const SidebarSection = styled.div`
  display: flex;
  align-items: center;
  gap: calc(${token('space.300')} * 8 - 100px);
  margin-bottom: ${token('space.250')};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SidebarLabel = styled.div`
  font-weight: 600;
  color: ${token('color.text.subtle')};
  font-size: 12px;
  min-width: 120px;
  flex-shrink: 0;
`;

const SidebarValue = styled.div`
  flex: 1;
`;

const DevelopmentSection = styled.div`
  margin-bottom: ${token('space.250')};
`;

const DevelopmentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${token('space.100')} 0;
  font-size: 14px;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
`;

const DevelopmentItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  color: ${token('color.link')};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const StatusBadge = styled.div<{ status: 'new' | 'pending' | 'done' }>`
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  
  ${props => {
    if (props.status === 'new') {
      return `
        background-color: transparent;
        color: ${token('color.text')};
        border: 1px solid ${token('color.border.accent.purple')};
      `;
    }
    if (props.status === 'pending') {
      return `
        background-color: transparent;
        color: ${token('color.text')};
        border: 1px solid ${token('color.border.accent.orange')};
      `;
    }
    return `
      background-color: ${token('color.background.accent.green.subtler')};
      color: ${token('color.text.accent.green')};
    `;
  }}
`;

const CollapsibleSection = styled.div`
  border: 1px solid ${token('color.border')};
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${token('color.background.neutral')};
`;

const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  padding: ${token('space.200')};
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: ${token('color.background.neutral.subtle.hovered')};
  }
`;

const TimestampSection = styled.div`
  padding-top: ${token('space.200')};
  margin-top: ${token('space.200')};
  font-size: 12px;
  color: ${token('color.text.subtlest')};
`;



const ConfigureButton = styled.button`
  background: none;
  border: none;
  color: ${token('color.link')};
  font-size: 12px;
  cursor: pointer;
  float: right;
  
  &:hover {
    text-decoration: underline;
  }
`;

const OctagonalAvatar = styled.div<{ size: 'xsmall' | 'small' | 'medium' }>`
  width: ${props => props.size === 'xsmall' ? '22px' : props.size === 'small' ? '32px' : '43px'};
  height: ${props => props.size === 'xsmall' ? '22px' : props.size === 'small' ? '32px' : '43px'};
  background-color: #FF4444;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${props => props.size === 'xsmall' ? '12px' : props.size === 'small' ? '15px' : '18px'};
  flex-shrink: 0;
  position: relative;
`;

const AbstractShape = styled.div<{ shape: 'triangle' | 'circle' | 'diamond'; size: 'xsmall' | 'small' | 'medium' }>`
  position: absolute;
  background-color: white;
  
  ${props => {
    const baseSize = props.size === 'xsmall' ? 8 : props.size === 'small' ? 12 : 16;
    
    if (props.shape === 'triangle') {
      return `
        width: 0;
        height: 0;
        border-left: ${baseSize/2}px solid transparent;
        border-right: ${baseSize/2}px solid transparent;
        border-bottom: ${baseSize}px solid white;
        background: none;
      `;
    }
    
    if (props.shape === 'circle') {
      return `
        width: ${baseSize}px;
        height: ${baseSize}px;
        border-radius: 50%;
      `;
    }
    
    if (props.shape === 'diamond') {
      return `
        width: ${baseSize}px;
        height: ${baseSize}px;
        transform: rotate(45deg);
      `;
    }
  }}
`;

const CommentSection = styled.div`
  margin-top: ${token('space.400')};
`;

const Comment = styled.div`
  display: flex;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.300')};
  padding: ${token('space.200')};
  background-color: ${token('color.background.neutral.subtle')};
  border-radius: ${token('border.radius.100')};
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  margin-bottom: ${token('space.100')};
`;

const ActionBar = styled.div`
  display: flex;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.300')};
  padding: 0;
`;

const WatchersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${token('space.100')};
`;

const ActivityItem = styled.div`
  display: flex;
  gap: ${token('space.200')};
  margin-bottom: ${token('space.200')};
  padding: ${token('space.100')};
  border-left: 2px solid ${token('color.border')};
  padding-left: ${token('space.200')};
`;

const RainbowLoadingBar = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, 
    ${token('color.background.accent.red.subtler')}, 
    ${token('color.background.accent.orange.subtler')}, 
    ${token('color.background.accent.yellow.subtler')}, 
    ${token('color.background.accent.green.subtler')}, 
    ${token('color.background.accent.blue.subtler')}, 
    ${token('color.background.accent.purple.subtler')}, 
    ${token('color.background.accent.magenta.subtler')},
    ${token('color.background.accent.red.subtler')}
  );
  background-size: 400% 100%;
  animation: rainbow 5s linear infinite;
  border-radius: 2px;
  margin: ${token('space.100')} 0;
  
  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
  }
`;

const TransformingText = styled.span<{ isTransforming: boolean }>`
  ${props => props.isTransforming && `
    animation: textTransform 2s ease-in-out;
  `}
  
  @keyframes textTransform {
    0% { opacity: 1; transform: scale(1); }
    25% { opacity: 0.5; transform: scale(1.05) rotateX(10deg); }
    50% { opacity: 0.3; transform: scale(0.95) rotateX(-10deg); }
    75% { opacity: 0.7; transform: scale(1.02) rotateX(5deg); }
    100% { opacity: 1; transform: scale(1) rotateX(0deg); }
  }
`;

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return 'inprogress';
    case 'done':
      return 'success';
    case 'to do':
      return 'default';
    case 'blocked':
      return 'removed';
    default:
      return 'default';
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'high':
    case 'highest':
      return <PriorityHighIcon label="High Priority" primaryColor={token('color.icon.danger')} />;
    case 'low':
    case 'lowest':
      return <PriorityLowIcon label="Low Priority" primaryColor={token('color.icon.success')} />;
    default:
      return null;
  }
};

const getTypeIcon = (type: string) => {
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

interface JiraIssue {
  key: string;
  summary: string;
  description: string;
  type: 'task' | 'bug' | 'story' | 'improvement';
  status: string;
  priority: 'highest' | 'high' | 'medium' | 'low' | 'lowest';
  assignee: {
    name: string;
    email: string;
    avatarUrl?: string;
  } | null;
  reporter: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  labels: string[];
  components: string[];
  fixVersions: string[];
  storyPoints?: number;
  timeTracking: {
    originalEstimate?: string;
    remainingEstimate?: string;
    timeSpent?: string;
  };
  created: string;
  updated: string;
  dueDate?: string;
  watchers: Array<{
    name: string;
    avatarUrl?: string;
  }>;
  comments: Array<{
    id: string;
    author: {
      name: string;
      avatarUrl?: string;
    };
    body: string;
    created: string;
  }>;
  activity: Array<{
    id: string;
    author: {
      name: string;
      avatarUrl?: string;
    };
    action: string;
    timestamp: string;
  }>;
  attachments: Array<{
    id: string;
    name: string;
    size: string;
    author: {
      name: string;
    };
    created: string;
  }>;
}

// Sample assignee options
const assigneeOptions = [
  { 
    label: 'Unassigned', 
    value: null, 
    data: null 
  },
  { 
    label: 'John Doe', 
    value: 'john.doe@company.com', 
    data: { 
      name: 'John Doe', 
      email: 'john.doe@company.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Jane Smith', 
    value: 'jane.smith@company.com', 
    data: { 
      name: 'Jane Smith', 
      email: 'jane.smith@company.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b96c77e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Mike Johnson', 
    value: 'mike.johnson@company.com', 
    data: { 
      name: 'Mike Johnson', 
      email: 'mike.johnson@company.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Sarah Wilson', 
    value: 'sarah.wilson@company.com', 
    data: { 
      name: 'Sarah Wilson', 
      email: 'sarah.wilson@company.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Issue Improver', 
    value: 'issue.improver@ai.com', 
    data: { 
      name: 'Issue Improver', 
      email: 'issue.improver@ai.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Labeller', 
    value: 'labeller@ai.com', 
    data: { 
      name: 'Labeller', 
      email: 'labeller@ai.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  },
  { 
    label: 'Pirate Talk', 
    value: 'pirate.talk@ai.com', 
    data: { 
      name: 'Pirate Talk', 
      email: 'pirate.talk@ai.com', 
      avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
    } 
  }
];

// Sample data
const sampleIssue: JiraIssue = {
  key: 'PROJ-123',
  summary: 'Implement user authentication flow with OAuth integration',
  description: `
## Overview
We need to implement a comprehensive user authentication flow that supports multiple OAuth providers.

## Requirements
- Google OAuth integration
- GitHub OAuth integration
- Email/password fallback
- JWT token management
- Session persistence

## Acceptance Criteria
- [ ] Users can sign in with Google
- [ ] Users can sign in with GitHub
- [ ] Users can create accounts with email/password
- [ ] Tokens are properly managed and refreshed
- [ ] Sessions persist across browser sessions
  `,
  type: 'story',
  status: 'In Progress',
  priority: 'high',
  assignee: {
    name: 'John Doe',
    email: 'john.doe@company.com',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  reporter: {
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  labels: ['authentication', 'oauth', 'security', 'frontend'],
  components: ['Frontend', 'Authentication Service'],
  fixVersions: ['v2.1.0'],
  storyPoints: 8,
  timeTracking: {
    originalEstimate: '2w',
    remainingEstimate: '1w 2d',
    timeSpent: '3d'
  },
  created: '2024-06-01T10:00:00Z',
  updated: '2024-06-10T15:30:00Z',
  dueDate: '2024-06-15T23:59:59Z',
  watchers: [
    { name: 'Alice Johnson', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'Bob Wilson', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'Carol Davis' }
  ],
  comments: [
    {
      id: '1',
      author: {
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      body: 'I\'ve started working on the Google OAuth integration. The basic flow is working but I need to handle edge cases for token refresh.',
      created: '2024-06-08T09:00:00Z'
    },
    {
      id: '2',
      author: {
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      body: 'Great progress! Make sure to add proper error handling for network failures during the OAuth flow.',
      created: '2024-06-08T14:30:00Z'
    }
  ],
  activity: [
    {
      id: '1',
      author: {
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      action: 'Changed status from "To Do" to "In Progress"',
      timestamp: '2024-06-05T10:00:00Z'
    },
    {
      id: '2',
      author: {
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      action: 'Added label "security"',
      timestamp: '2024-06-03T16:00:00Z'
    }
  ],
  attachments: [
    {
      id: '1',
      name: 'oauth-flow-diagram.png',
      size: '2.3 MB',
      author: { name: 'Jane Smith' },
      created: '2024-06-02T11:00:00Z'
    },
    {
      id: '2',
      name: 'auth-requirements.pdf',
      size: '856 KB',
      author: { name: 'John Doe' },
      created: '2024-06-01T15:00:00Z'
    }
  ]
};

const isAIAgent = (identifier: string) => identifier?.includes('@ai.com') || identifier?.toLowerCase().includes('pirate talk') || identifier?.toLowerCase().includes('issue improver') || identifier?.toLowerCase().includes('labeller');

const convertToPirateSpeak = (text: string): string => {
  const pirateReplacements: { [key: string]: string } = {
    'OAuth': 'O-Arrth',
    'authentication': 'verification of ye scallywag\'s identity',
    'implementation': 'construction',
    'system': 'ship',
    'user': 'matey',
    'users': 'crew',
    'login': 'board the ship',
    'secure': 'protected by Davy Jones\' locker',
    'token': 'treasure map',
    'endpoint': 'port',
    'API': 'Arrr-P-I',
    'security': 'protection from sea monsters',
    'integration': 'alliance',
    'access': 'permission to board',
    'permissions': 'sailing privileges',
    'requirements': 'demands of the cap\'n',
    'configuration': 'ship rigging',
    'database': 'treasure chest',
    'server': 'flagship',
    'client': 'crew member',
    'application': 'vessel',
    'implement': 'construct',
    'feature': 'treasure',
    'bug': 'sea monster',
    'issue': 'problem on the high seas',
    'fix': 'repair',
    'update': 'improve the ship',
    'deploy': 'set sail',
    'development': 'shipbuilding',
    'production': 'the open seas',
    'testing': 'checking for leaks',
    'code': 'ship blueprints',
    'framework': 'ship\'s skeleton',
    'library': 'captain\'s collection',
    'module': 'ship component',
    'function': 'ship operation',
    'method': 'sailing technique',
    'class': 'ship type',
    'variable': 'treasure location',
    'data': 'cargo',
    'response': 'message from another ship',
    'request': 'signal to another vessel',
    'error': 'shipwreck',
    'exception': 'storm at sea',
    'success': 'successful voyage',
    'failure': 'ship sinking',
    'performance': 'speed of the vessel',
    'optimization': 'making the ship faster',
    'monitoring': 'keeping watch',
    'logging': 'ship\'s logbook',
    'dashboard': 'captain\'s quarters view',
    'interface': 'ship\'s controls',
    'component': 'ship part',
    'service': 'crew duty',
    'microservice': 'small crew duty',
    'architecture': 'ship design',
    'design': 'blueprint',
    'pattern': 'sailing route',
    'best practices': 'wisdom of old sea dogs',
    'standards': 'pirate code',
    'guidelines': 'sailing rules',
    'documentation': 'treasure map instructions',
    'workflow': 'daily ship operations',
    'process': 'sailing procedure',
    'pipeline': 'supply route',
    'deployment': 'setting sail',
    'release': 'launching the ship',
    'version': 'ship model',
    'upgrade': 'better ship parts',
    'migration': 'changing ports',
    'backup': 'spare treasure chest',
    'restore': 'recover lost treasure',
    'sync': 'sailing in formation',
    'async': 'independent sailing',
    'queue': 'waiting line of ships',
    'cache': 'quick access treasure',
    'storage': 'ship\'s hold',
    'memory': 'crew\'s knowledge',
    'processor': 'ship\'s engine',
    'network': 'fleet communication',
    'connection': 'rope between ships',
    'protocol': 'communication rules',
    'encryption': 'secret pirate code',
    'hash': 'treasure marker',
    'algorithm': 'navigation method',
    'logic': 'captain\'s reasoning',
    'business logic': 'merchant\'s rules',
    'validation': 'checking the cargo',
    'verification': 'confirming identity',
    'authorization': 'permission from the cap\'n',
    'session': 'time aboard ship',
    'cookie': 'ship\'s biscuit',
    'browser': 'spyglass',
    'mobile': 'small ship',
    'desktop': 'large ship',
    'responsive': 'adaptable to any vessel',
    'scalable': 'grows like a mighty fleet',
    'maintainable': 'easy to keep shipshape',
    'readable': 'clear as the North Star',
    'efficient': 'swift as the wind',
    'robust': 'strong as an ironclad',
    'flexible': 'agile as a nimble sloop',
    'reliable': 'trustworthy as an old sea dog',
    'stable': 'steady as a well-built galleon',
    'consistent': 'regular as the tides',
    'compatible': 'sailing well together',
    'integrated': 'working as one crew',
    'automated': 'sailing itself',
    'manual': 'done by hand',
    'real-time': 'happening right now on deck',
    'batch': 'group of cargo',
    'streaming': 'flowing like the sea',
    'parallel': 'multiple ships sailing together',
    'sequential': 'one after another',
    'concurrent': 'at the same time',
    'distributed': 'spread across the seven seas',
    'centralized': 'all in the main ship',
    'decentralized': 'scattered among the fleet',
    'load balancing': 'sharing the cargo weight',
    'failover': 'backup when ship goes down',
    'redundancy': 'extra ships just in case',
    'availability': 'ship ready to sail',
    'uptime': 'time ship stays afloat',
    'downtime': 'time ship is in port',
    'maintenance': 'keeping ship seaworthy',
    'support': 'help from other pirates',
    'troubleshooting': 'fixing ship problems',
         'debugging': 'hunting down sea monsters',
     'refactoring': 'rebuilding parts of ship',
    'enhancement': 'improving the vessel',
    'feature request': 'crew wanting new treasure',
    'requirement': 'captain\'s orders',
    'specification': 'detailed ship plans',
    'acceptance criteria': 'what makes captain happy',
    'user story': 'tale of a crew member',
    'epic': 'grand adventure',
    'sprint': 'short voyage',
    'iteration': 'round trip',
    'milestone': 'important island reached',
    'deadline': 'when ship must reach port',
    'timeline': 'voyage schedule',
    'roadmap': 'planned route across seas',
    'backlog': 'list of treasures to find',
    'priority': 'most important treasure',
    'scope': 'size of the adventure',
    'estimate': 'guess at voyage length',
    'effort': 'crew work needed',
    'complexity': 'how tricky the navigation',
    'risk': 'chance of meeting sea monsters',
    'dependency': 'needing another ship first',
    'blocker': 'obstacle in ship\'s path',
    'impediment': 'something slowing the voyage',
    'velocity': 'how fast crew works',
    'capacity': 'how much ship can carry',
    'throughput': 'treasures found per day',
    'metrics': 'ways to measure success',
    'analytics': 'studying the treasure maps',
    'reporting': 'telling tales of adventure',
    'insights': 'wisdom gained from voyages',
    'feedback': 'word from other pirates',
    'review': 'checking the ship\'s condition',
    'approval': 'captain\'s blessing',
    'governance': 'pirate council rules',
    'compliance': 'following the pirate code',
    'audit': 'inspection by the admiralty',
    'policy': 'rules of the sea',
    'procedure': 'way things be done',
    'standard': 'how all ships should sail',
    'guideline': 'suggestions for good sailing'
  };

  let pirateText = text;
  
  // Apply word replacements
  Object.entries(pirateReplacements).forEach(([original, pirate]) => {
    const regex = new RegExp(original, 'gi');
    pirateText = pirateText.replace(regex, pirate);
  });
  
  // Add some pirate flair
  pirateText = pirateText.replace(/\./g, ', savvy!');
  pirateText = pirateText.replace(/!/g, ', arrr!');
  pirateText = pirateText.replace(/\?/g, ', ye scallywag?');
  
  return pirateText;
};

const AIAgentAvatar: React.FC<{ name: string; size: 'xsmall' | 'small' | 'medium' }> = ({ name, size }) => {
  const getShapeForAgent = (agentName: string): 'triangle' | 'circle' | 'diamond' => {
    if (agentName.toLowerCase().includes('improver')) return 'triangle';
    if (agentName.toLowerCase().includes('labeller')) return 'circle';
    if (agentName.toLowerCase().includes('pirate')) return 'diamond';
    return 'circle'; // default
  };

  const shape = getShapeForAgent(name);
  
  return (
    <OctagonalAvatar size={size}>
      <AbstractShape shape={shape} size={size} />
    </OctagonalAvatar>
  );
};

export const JiraIssueView: React.FC<{ issue?: JiraIssue }> = ({ issue = sampleIssue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isWatching, setIsWatching] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(issue);
  const [isPirateTransforming, setIsPirateTransforming] = useState(false);
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const [isTransformingTitle, setIsTransformingTitle] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(true);
  const [isDetailsPanelCollapsed, setIsDetailsPanelCollapsed] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<Array<{
    id: string;
    author: string;
    message: string;
    timestamp: string;
    isOwn: boolean;
    isNotification: boolean;
  }>>([]);

  useEffect(() => {
    console.log('Chat state changed:', isChatOpen);
  }, [isChatOpen]);

  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    const messageText = chatMessage.trim();
    const newMessage = {
      id: `msg-${Date.now()}`,
      author: 'You',
      message: messageText,
      timestamp: new Date().toISOString(),
      isOwn: true,
      isNotification: false
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    setChatMessage('');
    
    // Generate AI response based on message content
    setTimeout(() => {
      let responseMessage = '';
      const lowerMessage = messageText.toLowerCase();
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        responseMessage = "Hello! How can I help you today?";
      } else if (lowerMessage.includes('fun')) {
        responseMessage = `I can definitely do some fun things! Here are a few ways we can have fun together:

• **Create charts**: I can generate bar, line, pie, or scatter charts if you give me some data or a topic.

• **Play with words**: I can help you write poems, jokes, or even short stories.

• **Trivia and quizzes**: I can generate trivia questions or quizzes on topics you like.

• **Explore Atlassian Labs features**: If you use Atlassian tools, there are experimental features (like new editors or branch views) you can try out for a fresh experience.

• **Collaborative content creation**: In Confluence, you can create spaces for personal projects, team games, or even fun knowledge bases with images, videos, and more.

Let me know what sounds fun to you, or suggest something and I'll see what I can do!`;
      } else if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
        responseMessage = "I'm here to help! I can assist with Jira issues, project management, code generation, documentation, and much more. What would you like help with?";
      } else if (lowerMessage.includes('jira') || lowerMessage.includes('issue')) {
        responseMessage = "I can help you with Jira-related tasks! I can help you understand issues, suggest improvements, generate code, or assist with project planning. What specific aspect of Jira would you like help with?";
      } else if (lowerMessage.includes('code') || lowerMessage.includes('programming')) {
        responseMessage = "I'd be happy to help with coding! I can generate code, review existing code, suggest improvements, help with debugging, or explain programming concepts. What programming task are you working on?";
      } else {
        // Generic helpful response
        const responses = [
          "That's interesting! Can you tell me more about what you're trying to accomplish?",
          "I'd be happy to help with that. Could you provide more details about what you need?",
          "Great question! Let me think about the best way to assist you with this.",
          "I'm here to help! What specific aspect would you like me to focus on?",
          "Thanks for sharing that. How can I best support you with this topic?"
        ];
        responseMessage = responses[Math.floor(Math.random() * responses.length)];
      }
      
      const autoResponse = {
        id: `auto-${Date.now()}`,
        author: 'Rovo Chat',
        message: responseMessage,
        timestamp: new Date().toISOString(),
        isOwn: false,
        isNotification: false
      };
      setChatMessages(prev => [...prev, autoResponse]);
    }, 1000); // 1 second delay for more natural feel
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAssigneeChange = (option: any) => {
    const newAssignee = option?.data || null;
    
    // Check if Pirate Talk AI agent is being assigned
    const isPirateTalkSelected = newAssignee && newAssignee.name?.toLowerCase().includes('pirate talk');
    
    setCurrentIssue(prev => {
      
      if (isPirateTalkSelected && !isPirateTransforming) {
        // Add pirate activation message to chat
        const pirateActivationMessage = {
          id: `pirate-activation-${Date.now()}`,
          author: 'Pirate Talk AI',
          message: "Ahoy mateys! 🏴‍☠️ This here scallywag be activated and ready to set sail! All ye landlubbers' content shall be transformed into proper pirate speak, savvy? Batten down the hatches, for this issue be mine to command now! Arrr! ⚓",
          timestamp: new Date().toISOString(),
          isOwn: false,
          isNotification: true
        };
        
        setChatMessages(prev => [...prev, pirateActivationMessage]);
        
        // Open chat panel to show the notification
        setIsChatOpen(true);
        
        // Start the transformation sequence
        setIsPirateTransforming(true);
        setShowLoadingBar(true);
        
        // Step 1: Show loading bar for 3 seconds
        setTimeout(() => {
          setShowLoadingBar(false);
          setIsTransformingTitle(true);
          
          // Step 2: Transform title after loading bar completes
          setTimeout(() => {
            setCurrentIssue(current => ({
              ...current,
              summary: convertToPirateSpeak(current.summary),
              description: convertToPirateSpeak(current.description)
            }));
            setIsTransformingTitle(false);
            
            // Step 3: Add completion message to chat
            setTimeout(() => {
              const completionMessage = {
                id: `pirate-completion-${Date.now()}`,
                author: 'Pirate Talk AI',
                message: "Arrr! The deed be done, ye landlubbers! 🏴‍☠️ This here problem on the high seas has been transformed into proper pirate speak, as befits a true buccaneer! The title and description now speak the language of the seven seas, savvy! Now back to yer regular crew member it shall be, arrr! ⚓✨",
                timestamp: new Date().toISOString(),
                isOwn: false,
                isNotification: true
              };
              
              setChatMessages(prev => [...prev, completionMessage]);
              
              setCurrentIssue(current => ({
                ...current,
                // Step 4: Reassign to John Doe
                assignee: {
                  name: 'John Doe',
                  email: 'john.doe@company.com',
                  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                }
              }));
              
              setIsPirateTransforming(false);
            }, 1000);
          }, 2000); // Time for title transformation animation
        }, 3000); // 3 seconds for loading bar
      }
      
      return {
        ...prev,
        assignee: newAssignee
      };
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  return (
    <div>
      <GlobalNavigation>
        <GlobalNavLeft>
          <IconButton onClick={() => setIsLeftNavOpen(!isLeftNavOpen)}>
            <GridIcon primaryColor="#B3BAC5" label="Toggle navigation" />
          </IconButton>
          <JiraLogo>
            <JiraLogoIcon />
          </JiraLogo>
        </GlobalNavLeft>
        <GlobalNavCenter>
          <SearchContainer>
            <SearchIcon primaryColor="#8C9BAB" label="Search" size="small" />
            <SearchInput placeholder="Search" />
          </SearchContainer>
          <CreateButton>
            <AddIcon primaryColor="#000000" label="Create" size="small" />
            Create
          </CreateButton>
        </GlobalNavCenter>
        <GlobalNavRight>
          <IconButton onClick={() => {
            console.log('Chat button clicked');
            setIsChatOpen(true);
          }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', border: '1px solid #3C4147', borderRadius: '6px' }}>
            <ChatIcon primaryColor="#B3BAC5" label="Rovo Chat" size="medium" />
            <span style={{ color: '#B3BAC5', fontSize: '14px', fontWeight: '500' }}>Rovo Chat</span>
          </IconButton>
          <IconButton>
            <NotificationIcon primaryColor="#B3BAC5" label="Notifications" size="medium" />
          </IconButton>
          <IconButton>
            <QuestionIcon primaryColor="#B3BAC5" label="Help" size="medium" />
          </IconButton>
          <IconButton>
            <SettingsIcon primaryColor="#B3BAC5" label="Settings" size="medium" />
          </IconButton>
          <Avatar
            size="small"
            name="John Doe"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </GlobalNavRight>
      </GlobalNavigation>
      <MainLayout>
        <LeftSidebar isOpen={isLeftNavOpen}>
          <div style={{ paddingBottom: '16px' }}>
                          <SidebarNavItem>
              <NavItemLeft>
                <PersonIcon primaryColor="#B3BAC5" label="For you" />
                For you
              </NavItemLeft>
            </SidebarNavItem>
            
            <SidebarNavItem hasChevron>
              <NavItemLeft>
                <RecentIcon primaryColor="#B3BAC5" label="Recent" />
                Recent
              </NavItemLeft>
              <ChevronRightIcon primaryColor="#8C9BAB" size="small" label="Expand" />
            </SidebarNavItem>
            
            <SidebarNavItem hasChevron>
              <NavItemLeft>
                <StarIcon primaryColor="#B3BAC5" label="Starred" />
                Starred
              </NavItemLeft>
              <ChevronRightIcon primaryColor="#8C9BAB" size="small" label="Expand" />
            </SidebarNavItem>
            
            <SidebarNavItem>
              <NavItemLeft>
                <AppSwitcherIcon primaryColor="#B3BAC5" label="Apps" />
                Apps
              </NavItemLeft>
            </SidebarNavItem>
            
            <SidebarNavItem>
              <NavItemLeft>
                <RoadmapIcon primaryColor="#B3BAC5" label="Roadmaps" />
                Roadmaps
              </NavItemLeft>
            </SidebarNavItem>
            
            <SidebarNavItem>
              <NavItemLeft>
                <PlansIcon primaryColor="#B3BAC5" label="Plans" />
                Plans
              </NavItemLeft>
            </SidebarNavItem>
          </div>
          
          <div style={{ paddingBottom: '16px' }}>
            <ProjectsHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RocketIcon primaryColor="#B3BAC5" label="Projects" />
                Projects
              </div>
              <ProjectsActions>
                <ActionButton>
                  <AddIcon primaryColor="#8C9BAB" size="small" label="Add" />
                </ActionButton>
                <ActionButton>
                  <MoreIcon primaryColor="#8C9BAB" size="small" label="More" />
                </ActionButton>
              </ProjectsActions>
            </ProjectsHeader>
            
            <div style={{ paddingLeft: '16px', marginBottom: '8px' }}>
              <div style={{ color: '#8C9BAB', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', padding: '0 16px' }}>
                Recent
              </div>
            </div>
            
            <ProjectItem isActive>
              <ProjectIcon>N</ProjectIcon>
              NOVACORP
            </ProjectItem>
            
            <SidebarNavItem style={{ paddingLeft: '48px' }}>
              <NavItemLeft>
                View all projects
              </NavItemLeft>
            </SidebarNavItem>
          </div>
          
          <div style={{ paddingBottom: '16px' }}>
            <SidebarNavItem>
              <NavItemLeft>
                <FilterIcon primaryColor="#B3BAC5" label="Filters" />
                Filters
              </NavItemLeft>
            </SidebarNavItem>
            
            <SidebarNavItem>
              <NavItemLeft>
                <DashboardIcon primaryColor="#B3BAC5" label="Dashboards" />
                Dashboards
              </NavItemLeft>
            </SidebarNavItem>
            
            <SidebarNavItem>
              <NavItemLeft>
                <TeamIcon primaryColor="#B3BAC5" label="Teams" />
                Teams
              </NavItemLeft>
            </SidebarNavItem>
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <AppIntegration>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AppIcon bgColor="#1D7AFC">C</AppIcon>
                Confluence
              </div>
              <ExternalLinkIcon>
                <ShortcutIcon primaryColor="#8C9BAB" size="small" label="External link" />
              </ExternalLinkIcon>
            </AppIntegration>
            
            <AppIntegration>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AppIcon bgColor="#9333EA">L</AppIcon>
                Loom
              </div>
              <ExternalLinkIcon>
                <ShortcutIcon primaryColor="#8C9BAB" size="small" label="External link" />
              </ExternalLinkIcon>
            </AppIntegration>
            
            <AppIntegration>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AppIcon bgColor="#EAB308">A</AppIcon>
                Assets
              </div>
              <ExternalLinkIcon>
                <ShortcutIcon primaryColor="#8C9BAB" size="small" label="External link" />
              </ExternalLinkIcon>
            </AppIntegration>
            
            <AppIntegration>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AppIcon bgColor="#6B7280">
                  <TargetIcon primaryColor="white" size="small" label="Goals" />
                </AppIcon>
                Goals
              </div>
              <ExternalLinkIcon>
                <ShortcutIcon primaryColor="#8C9BAB" size="small" label="External link" />
              </ExternalLinkIcon>
            </AppIntegration>
            
            <SidebarNavItem style={{ marginTop: '16px' }}>
              <NavItemLeft>
                <SettingsIcon primaryColor="#B3BAC5" label="Customize sidebar" />
                Customize sidebar
              </NavItemLeft>
            </SidebarNavItem>
          </div>
        </LeftSidebar>
        <MainContentArea>
    <Container>
      <BreadcrumbsContainer>
        <BreadcrumbsLeft>
          <BreadcrumbItem>Projects</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>NOVACORP</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
            <EpicIcon label="Epic" />
            NOV-5
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
            <StoryIcon label="Story" />
            NOV-30
          </BreadcrumbItem>
        </BreadcrumbsLeft>
        <TopIconButtons>
          <StyledButton 
            appearance="subtle"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minWidth: '32px',
              padding: token('space.100')
            }}
          >
            <WatchIcon label="Watch" size="small" />
          </StyledButton>
          <StyledButton 
            appearance="subtle"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minWidth: '32px',
              padding: token('space.100')
            }}
          >
            <ShareIcon label="Share" size="small" />
          </StyledButton>
          <StyledButton 
            appearance="subtle"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minWidth: '32px',
              padding: token('space.100')
            }}
          >
            <AppSwitcherIcon label="App Switcher" size="small" />
          </StyledButton>
          <StyledButton 
            appearance="subtle"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minWidth: '32px',
              padding: token('space.100')
            }}
          >
            <MoreIcon label="More" size="small" />
          </StyledButton>
        </TopIconButtons>
      </BreadcrumbsContainer>

      <ContentGrid isDetailsPanelOpen={isDetailsPanelOpen}>
        <MainContent>
          <MainHeader>
            <TitleSection>
              <Heading size="xlarge">
                <TransformingText isTransforming={isTransformingTitle}>
                  {currentIssue.summary}
                </TransformingText>
              </Heading>
            </TitleSection>

            <ActionButtonsRow>
              <StyledButton appearance="subtle">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: token('space.100')
                }}>
                  <AddIcon label="Add" size="small" />
                  Add
                </div>
              </StyledButton>
              <StyledButton appearance="subtle">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: token('space.100')
                }}>
                  <SettingsIcon label="Apps" size="small" />
                  Apps
                </div>
              </StyledButton>
              <StyledButton 
                appearance="subtle" 
                onClick={() => setIsDetailsPanelOpen(!isDetailsPanelOpen)}
              >
                                 <div style={{ 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: token('space.100')
                 }}>
                   <div style={{ 
                     transform: isDetailsPanelOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                     transition: 'transform 0.3s ease',
                     display: 'flex',
                     alignItems: 'center'
                   }}>
                     <ChevronRightIcon 
                       label={isDetailsPanelOpen ? "Hide Details" : "Show Details"} 
                       size="small"
                     />
                   </div>
                   {isDetailsPanelOpen ? 'Hide Details' : 'Show Details'}
                 </div>
              </StyledButton>
            </ActionButtonsRow>

            <DescriptionContainer>
              <DescriptionHeaderInline>
                <Heading size="medium">Description</Heading>
                <UnsavedChangesIndicator>• Unsaved changes</UnsavedChangesIndicator>
              </DescriptionHeaderInline>
              <DescriptionContent>
                {isEditing ? (
                  <div>
                    <Textarea
                      defaultValue={issue.description}
                      minimumRows={6}
                      resize="vertical"
                    />
                    <div style={{ marginTop: token('space.200'), display: 'flex', gap: token('space.200') }}>
                      <Button 
                        appearance="primary"
                        style={{ transition: 'all 0.2s ease' }}
                      >
                        Save
                      </Button>
                      <Button 
                        appearance="subtle" 
                        onClick={() => setIsEditing(false)}
                        style={{ transition: 'all 0.2s ease' }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Text>
                    {issue.description}
                  </Text>
                )}
              </DescriptionContent>
            </DescriptionContainer>
          </MainHeader>

          <Tabs id="issue-tabs">
            <TabList>
              <Tab>Comments ({currentIssue.comments.length})</Tab>
              <Tab>Activity</Tab>
              <Tab>Attachments ({issue.attachments.length})</Tab>
            </TabList>
            <TabPanel>
              <CommentSection>
                <Heading size="medium" as="h3">Comments</Heading>
                
                <div style={{ marginTop: token('space.300') }}>
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment((e.target as HTMLTextAreaElement).value)}
                    minimumRows={3}
                  />
                  <div style={{ marginTop: token('space.200'), display: 'flex', gap: token('space.200') }}>
                    <Button 
                      appearance="primary" 
                      isDisabled={!newComment.trim()}
                      style={{ transition: 'all 0.2s ease' }}
                    >
                      Comment
                    </Button>
                    <Button 
                      appearance="subtle" 
                      onClick={() => setNewComment('')}
                      style={{ transition: 'all 0.2s ease' }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>

                <div style={{ marginTop: token('space.400') }}>
                  {currentIssue.comments.length === 0 ? (
                    <EmptyState
                      header="No comments yet"
                      description="Be the first to add a comment to this issue."
                    />
                  ) : (
                    currentIssue.comments.map((comment) => (
                      <Comment key={comment.id}>
                        {isAIAgent(comment.author.name) ? (
                          <AIAgentAvatar name={comment.author.name} size="medium" />
                        ) : (
                          <Avatar
                            size="medium"
                            name={comment.author.name}
                            src={comment.author.avatarUrl}
                          />
                        )}
                        <CommentContent>
                          <CommentHeader>
                            <Text weight="medium">{comment.author.name}</Text>
                            <Text size="small" color="color.text.subtlest">
                              {formatTimeAgo(comment.created)}
                            </Text>
                          </CommentHeader>
                          <Text>{comment.body}</Text>
                        </CommentContent>
                      </Comment>
                    ))
                  )}
                  {showLoadingBar && (
                    <div style={{ margin: `${token('space.100')} 0 ${token('space.200')} 0` }}>
                      <Text size="small" color="color.text.subtle">
                        🏴‍☠️ Transforming content to pirate speak...
                      </Text>
                      <RainbowLoadingBar />
                    </div>
                  )}
                </div>
              </CommentSection>
            </TabPanel>
            <TabPanel>
              <div style={{ marginTop: token('space.300') }}>
                <Heading size="medium" as="h3">Activity</Heading>
                <div style={{ marginTop: token('space.300') }}>
                  {issue.activity.map((activity) => (
                    <ActivityItem key={activity.id}>
                      <Avatar
                        size="small"
                        name={activity.author.name}
                        src={activity.author.avatarUrl}
                      />
                      <div>
                        <Text>
                          <Text weight="medium">{activity.author.name}</Text> {activity.action}
                        </Text>
                        <Text size="small" color="color.text.subtlest">
                          {formatTimeAgo(activity.timestamp)}
                        </Text>
                      </div>
                    </ActivityItem>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div style={{ marginTop: token('space.300') }}>
                <Heading size="medium" as="h3">Attachments</Heading>
                <div style={{ marginTop: token('space.300') }}>
                  {issue.attachments.length === 0 ? (
                    <EmptyState
                      header="No attachments"
                      description="Drag and drop files here or click to upload."
                    />
                  ) : (
                    issue.attachments.map((attachment) => (
                      <div
                        key={attachment.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: token('space.200'),
                          padding: token('space.200'),
                          border: `1px solid ${token('color.border')}`,
                          borderRadius: token('border.radius.100'),
                          marginBottom: token('space.200')
                        }}
                      >
                        <AttachmentIcon label="Attachment" />
                        <div style={{ flex: 1 }}>
                          <Text weight="medium">{attachment.name}</Text>
                          <Text size="small" color="color.text.subtlest">
                            {attachment.size} • Added by {attachment.author.name} • {formatTimeAgo(attachment.created)}
                          </Text>
                        </div>
                        <Button 
                          appearance="subtle"
                          style={{ transition: 'all 0.2s ease' }}
                        >
                          Download
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </MainContent>

        <div>
          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
            <Button 
              appearance="default"
              style={{
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: token('space.100')
              }}>
                <span style={{ fontWeight: 'bold' }}>To Do</span>
                <ChevronDownIcon label="Expand" />
              </div>
            </Button>
            <StyledButton 
              appearance="subtle"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                minWidth: '32px'
              }}
            >
              <StarIcon label="Star" size="small" />
            </StyledButton>
            <StyledButton appearance="subtle">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px'
              }}>
                <PremiumIcon label="Premium" size="small" />
                   Improve issues
              </div>
            </StyledButton>
          </div>
          
          {isDetailsPanelOpen && (
            <Sidebar>
          {/* Details Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: token('space.200'),
            marginBottom: isDetailsPanelCollapsed ? '0' : token('space.200'),
            backgroundColor: token('color.background.neutral'),
            borderBottom: `1px solid ${token('color.border')}`
          }}>
            <Text weight="semibold">Details</Text>
            <div style={{ display: 'flex', gap: token('space.100') }}>
              <SettingsIcon label="Configure" />
              <div 
                style={{ 
                  cursor: 'pointer',
                  transform: isDetailsPanelCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => setIsDetailsPanelCollapsed(!isDetailsPanelCollapsed)}
              >
                <ChevronDownIcon label={isDetailsPanelCollapsed ? "Expand" : "Collapse"} />
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          {!isDetailsPanelCollapsed && (
            <div style={{ padding: token('space.200') }}>
          
          {/* Assignee */}
          <SidebarSection>
            <SidebarLabel>Assignee</SidebarLabel>
            <SidebarValue>
              <Select
                options={assigneeOptions}
                value={assigneeOptions.find(option => 
                  currentIssue.assignee ? option.value === currentIssue.assignee.email : option.value === null
                )}
                onChange={handleAssigneeChange}
                placeholder="Select assignee..."
                isSearchable={false}
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    border: 'none',
                    background: 'transparent',
                    boxShadow: 'none',
                    padding: 0,
                    minHeight: 'auto',
                    cursor: 'pointer',
                    '&:hover': {
                      border: 'none'
                    }
                  }),
                  valueContainer: (provided: any) => ({
                    ...provided,
                    padding: 0
                  }),
                  indicatorsContainer: (provided: any) => ({
                    ...provided,
                    display: 'none'
                  }),
                  placeholder: (provided: any) => ({
                    ...provided,
                    margin: 0,
                    color: token('color.text.subtlest')
                  }),
                  singleValue: (provided: any) => ({
                    ...provided,
                    margin: 0,
                    color: token('color.text')
                  }),
                  menu: (provided: any) => ({
                    ...provided,
                    zIndex: 9999
                  })
                }}
                formatOptionLabel={(data: any) => {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                      {data.data ? (
                        <>
                          {isAIAgent(data.data.email) ? (
                            <AIAgentAvatar name={data.data.name} size="xsmall" />
                          ) : (
                            <Avatar size="xsmall" name={data.data.name} src={data.data.avatarUrl} />
                          )}
                          <Text>{data.data.name}</Text>
                        </>
                      ) : (
                        <>
                          <PersonIcon label="Person" />
                          <Text color="color.text.subtlest">Unassigned</Text>
                        </>
                      )}
                    </div>
                  )
                }}
              />
            </SidebarValue>
          </SidebarSection>

          {/* Labels */}
          <SidebarSection>
            <SidebarLabel>Labels</SidebarLabel>
            <SidebarValue>
              {issue.labels.length > 0 ? (
                <TagGroup>
                  {issue.labels.map((label) => (
                    <Tag key={label} text={label} />
                  ))}
                </TagGroup>
              ) : (
                <Text color="color.text.subtlest">None</Text>
              )}
            </SidebarValue>
          </SidebarSection>

          {/* Parent */}
          <SidebarSection>
            <SidebarLabel>Parent</SidebarLabel>
            <SidebarValue>
              <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                <ImprovementIcon label="Epic" />
                <span style={{ color: token('color.link'), cursor: 'pointer' }}>
                  NOV-5 Project Management and Coord
                </span>
              </div>
            </SidebarValue>
          </SidebarSection>

          {/* Team */}
          <SidebarSection>
            <SidebarLabel>Team</SidebarLabel>
            <SidebarValue>
              <Text color="color.text.subtlest">None</Text>
            </SidebarValue>
          </SidebarSection>

          {/* Sprint */}
          <SidebarSection>
            <SidebarLabel>Sprint</SidebarLabel>
            <SidebarValue>
              <span style={{ color: token('color.link'), cursor: 'pointer' }}>
                NOV Sprint 2 <span style={{ color: token('color.text.subtlest') }}>+1</span>
              </span>
            </SidebarValue>
          </SidebarSection>

          {/* Story point estimate */}
          <SidebarSection>
            <SidebarLabel>Story point estimate</SidebarLabel>
            <SidebarValue>
              <Text color="color.text.subtlest">None</Text>
            </SidebarValue>
          </SidebarSection>

          {/* Development */}
          <SidebarSection>
            <SidebarLabel>Development</SidebarLabel>
            <DevelopmentSection>
              <DevelopmentItem>
                                 <DevelopmentItemLeft>
                   <DocumentIcon label="Document" size="small" />
                   Write coding plan
                 </DevelopmentItemLeft>
              </DevelopmentItem>
              
              <DevelopmentItem>
                <DevelopmentItemLeft>
                  <CodeIcon label="Code" size="small" />
                  Generate code
                  <StatusBadge status="new">NEW</StatusBadge>
                </DevelopmentItemLeft>
              </DevelopmentItem>
              
              <DevelopmentItem>
                <DevelopmentItemLeft>
                  <LinkIcon label="Branch" size="small" />
                  Create branch
                </DevelopmentItemLeft>
                <ChevronDownIcon label="Expand" size="small" />
              </DevelopmentItem>
              
              <DevelopmentItem>
                <DevelopmentItemLeft>
                  <LinkIcon label="Commit" size="small" />
                  Create commit
                </DevelopmentItemLeft>
                <ChevronDownIcon label="Expand" size="small" />
              </DevelopmentItem>
              
              <DevelopmentItem>
                <DevelopmentItemLeft>
                  <SettingsIcon label="Setup" size="small" />
                  Set up deployment tools
                </DevelopmentItemLeft>
                <StatusBadge status="pending">PENDING</StatusBadge>
              </DevelopmentItem>
            </DevelopmentSection>
          </SidebarSection>

          {/* Releases */}
          <SidebarSection>
            <SidebarLabel>Releases</SidebarLabel>
            <SidebarValue>
              <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100'), color: token('color.link'), cursor: 'pointer' }}>
                <span>+</span>
                Add feature flag
                <ChevronDownIcon label="Expand" />
              </div>
            </SidebarValue>
          </SidebarSection>

          {/* Reporter */}
          <SidebarSection style={{ marginBottom: 0 }}>
            <SidebarLabel>Reporter</SidebarLabel>
            <SidebarValue>
              <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                <Avatar
                  size="small"
                  name={currentIssue.reporter.name}
                  src={currentIssue.reporter.avatarUrl}
                />
                <Text>{currentIssue.reporter.name}</Text>
              </div>
            </SidebarValue>
          </SidebarSection>
          </div>
          )}
        </Sidebar>
          )}
        
        {/* Collapsible Sections Below Details Panel */}
        <div style={{ marginTop: '8px' }}>
          <CollapsibleSection>
            <CollapsibleHeader>
              <Text weight="medium">Automation</Text>
              <Text size="small" color="color.text.subtlest">Rule executions</Text>
              <div style={{ marginLeft: 'auto' }}>
                <ChevronDownIcon label="Expand" />
              </div>
            </CollapsibleHeader>
          </CollapsibleSection>

          <CollapsibleSection>
            <CollapsibleHeader>
              <Text weight="medium">Sentry</Text>
              <Text size="small" color="color.text.subtlest">Linked Issues</Text>
              <div style={{ marginLeft: 'auto' }}>
                <ChevronDownIcon label="Expand" />
              </div>
            </CollapsibleHeader>
          </CollapsibleSection>

          <CollapsibleSection>
            <CollapsibleHeader>
              <Text weight="medium">Checklist</Text>
              <Text size="small" color="color.text.subtlest">Open Checklist</Text>
              <div style={{ marginLeft: 'auto' }}>
                <ChevronDownIcon label="Expand" />
              </div>
            </CollapsibleHeader>
          </CollapsibleSection>
          
          {/* Timestamps */}
          <TimestampSection>
            <div>Created {formatDate(issue.created)}</div>
            <div>Updated {formatDate(issue.updated)}</div>
            <ConfigureButton>Configure</ConfigureButton>
          </TimestampSection>
        </div>
        </div>
      </ContentGrid>

    </Container>
        </MainContentArea>
      </MainLayout>
      
      {/* Chat Panel */}
      <ChatPanel isOpen={isChatOpen}>
        <ChatHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ChatSidebarIcon bgColor="#579DFF">
              <ChatIcon primaryColor="white" size="small" label="Chat" />
            </ChatSidebarIcon>
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Chat</span>
          </div>
          <HeaderActions>
            <HeaderButton>
              <EditIcon primaryColor="#8C9BAB" size="small" label="New" />
            </HeaderButton>
            <HeaderButton>
              <MaximizeIcon primaryColor="#8C9BAB" size="small" label="Maximize" />
            </HeaderButton>
            <HeaderButton onClick={() => setIsChatOpen(false)}>
              <CrossIcon primaryColor="#8C9BAB" size="small" label="Close" />
            </HeaderButton>
          </HeaderActions>
        </ChatHeader>
        
        <div style={{ display: 'flex', flex: 1 }}>
          <ChatSidebar>
            <ChatSidebarItem isActive>
              <ChatSidebarIcon bgColor="#579DFF">
                <ChatIcon primaryColor="white" size="small" label="Chat" />
              </ChatSidebarIcon>
              Chat
            </ChatSidebarItem>
            
            <ChatSidebarItem>
              <ChatSidebarIcon bgColor="#8C9BAB">
                <HistoryIcon primaryColor="white" size="small" label="History" />
              </ChatSidebarIcon>
              History
            </ChatSidebarItem>
            
            <ChatSidebarItem>
              <ChatSidebarIcon bgColor="#8C9BAB">
                <PersonIcon primaryColor="white" size="small" label="Agents" />
              </ChatSidebarIcon>
              Agents
            </ChatSidebarItem>
          </ChatSidebar>
          
          <ChatMainContent>
            {chatMessages.length === 0 ? (
              <>
                <ChatWelcome>
                  <ChatWelcomeTitle>Hey, Jonathon</ChatWelcomeTitle>
                  <ChatWelcomeSubtitle>
                    Pick a conversation starter or ask anything.<br />
                    <ChatWelcomeLink href="#" target="_blank">
                      Discover Rovo Chat and Agents ↗
                    </ChatWelcomeLink>
                  </ChatWelcomeSubtitle>
                  
                  <div style={{ padding: '0 20px' }}>
                    <ChatSuggestionCard onClick={() => {
                      const message = "What should I work on next?";
                      const newMessage = {
                        id: `msg-${Date.now()}`,
                        author: 'You',
                        message: message,
                        timestamp: new Date().toISOString(),
                        isOwn: true,
                        isNotification: false
                      };
                      setChatMessages(prev => [...prev, newMessage]);
                      
                      // Generate response
                      setTimeout(() => {
                        const autoResponse = {
                          id: `auto-${Date.now()}`,
                          author: 'Rovo Chat',
                          message: "I can help you prioritize your work! Based on your current Jira issues and project status, here are some suggestions for what to work on next:\n\n• **High Priority Issues**: Focus on any critical bugs or blockers first\n• **Sprint Goals**: Work on items that align with your current sprint objectives\n• **Dependencies**: Tackle tasks that other team members are waiting for\n• **Quick Wins**: Consider smaller tasks that can be completed quickly for momentum\n\nWould you like me to analyze your specific Jira board to give more targeted recommendations?",
                          timestamp: new Date().toISOString(),
                          isOwn: false,
                          isNotification: false
                        };
                        setChatMessages(prev => [...prev, autoResponse]);
                      }, 1000);
                    }}>
                      <ChatSuggestionIcon>
                        <RoadmapIcon primaryColor="#579DFF" size="medium" label="Be productive" />
                      </ChatSuggestionIcon>
                      <ChatSuggestionTitle>Be productive</ChatSuggestionTitle>
                      <ChatSuggestionDescription>
                        What should I work on next?
                      </ChatSuggestionDescription>
                    </ChatSuggestionCard>
                    
                    <ChatSuggestionCard onClick={() => {
                      const message = "How many work items are assigned to person?";
                      const newMessage = {
                        id: `msg-${Date.now()}`,
                        author: 'You',
                        message: message,
                        timestamp: new Date().toISOString(),
                        isOwn: true,
                        isNotification: false
                      };
                      setChatMessages(prev => [...prev, newMessage]);
                      
                      // Generate response
                      setTimeout(() => {
                        const autoResponse = {
                          id: `auto-${Date.now()}`,
                          author: 'Rovo Chat',
                          message: "I can help you find information about work item assignments! To get specific numbers, I would need to access your Jira instance. However, I can guide you on how to find this information:\n\n• **JQL Search**: Use `assignee = \"person name\"` in Jira search\n• **User Profile**: Check the person's profile page for their assigned issues\n• **Dashboard Gadgets**: Use the \"Assigned to Me\" or \"Filter Results\" gadgets\n• **Reports**: Generate workload reports from the Reports section\n\nWould you like me to help you create a specific JQL query for this search?",
                          timestamp: new Date().toISOString(),
                          isOwn: false,
                          isNotification: false
                        };
                        setChatMessages(prev => [...prev, autoResponse]);
                      }, 1000);
                    }}>
                      <ChatSuggestionIcon>
                        <SearchIcon primaryColor="#579DFF" size="medium" label="Find people" />
                      </ChatSuggestionIcon>
                      <ChatSuggestionTitle>Find people</ChatSuggestionTitle>
                      <ChatSuggestionDescription>
                        How many work items are assigned to person?
                      </ChatSuggestionDescription>
                    </ChatSuggestionCard>
                    
                    <ChatSuggestionCard onClick={() => {
                      const message = "can you do anything fun ?";
                      const newMessage = {
                        id: `msg-${Date.now()}`,
                        author: 'You',
                        message: message,
                        timestamp: new Date().toISOString(),
                        isOwn: true,
                        isNotification: false
                      };
                      setChatMessages(prev => [...prev, newMessage]);
                      
                      // Generate response
                      setTimeout(() => {
                        const autoResponse = {
                          id: `auto-${Date.now()}`,
                          author: 'Rovo Chat',
                          message: "I can definitely do some fun things! Here are a few ways we can have fun together:\n\n• **Create charts**: I can generate bar, line, pie, or scatter charts if you give me some data or a topic.\n\n• **Play with words**: I can help you write poems, jokes, or even short stories.\n\n• **Trivia and quizzes**: I can generate trivia questions or quizzes on topics you like.\n\n• **Explore Atlassian Labs features**: If you use Atlassian tools, there are experimental features (like new editors or branch views) you can try out for a fresh experience.\n\n• **Collaborative content creation**: In Confluence, you can create spaces for personal projects, team games, or even fun knowledge bases with images, videos, and more.\n\nLet me know what sounds fun to you, or suggest something and I'll see what I can do!",
                          timestamp: new Date().toISOString(),
                          isOwn: false,
                          isNotification: false
                        };
                        setChatMessages(prev => [...prev, autoResponse]);
                      }, 1000);
                    }}>
                      <ChatSuggestionIcon>
                        <SearchIcon primaryColor="#579DFF" size="medium" label="Get answers" />
                      </ChatSuggestionIcon>
                      <ChatSuggestionTitle>Get answers</ChatSuggestionTitle>
                      <ChatSuggestionDescription>
                        Are there any Jira work items not connected to a parent work item?
                      </ChatSuggestionDescription>
                    </ChatSuggestionCard>
                  </div>
                </ChatWelcome>
                
                <ChatAgentSection>
                  <ChatAgentTitle>Chat with a Rovo Agent</ChatAgentTitle>
                  <ChatAgentCard>
                    <ChatAgentHeader>
                      <ChatAgentAvatar>J</ChatAgentAvatar>
                      <div>
                        <ChatAgentName>Junit5 Enabler</ChatAgentName>
                        <ChatAgentAuthor>by Arun Antony ↗</ChatAgentAuthor>
                      </div>
                    </ChatAgentHeader>
                    <ChatAgentDescription>
                      Enable Junit5 in Project
                    </ChatAgentDescription>
                  </ChatAgentCard>
                </ChatAgentSection>
                
                <ChatBrowseButton>
                  Browse Agents
                </ChatBrowseButton>
              </>
            ) : (
              <ChatMessages ref={chatMessagesRef}>
                {chatMessages.map((msg) => (
                  <ChatMessage key={msg.id} isOwn={msg.isOwn}>
                    {msg.isOwn ? (
                      <MessageBubble isOwn={true}>
                        {msg.message}
                      </MessageBubble>
                    ) : (
                      <div>
                        <BotGreeting>Hello! How can I help you today?</BotGreeting>
                        <BotMessage>
                          {msg.message.split('\n').map((line, index) => {
                            if (line.startsWith('• **') && line.includes('**:')) {
                              const [title, description] = line.split('**:');
                              return (
                                <BulletItem key={index}>
                                  <strong>{title.replace('• **', '')}</strong>: {description}
                                </BulletItem>
                              );
                            }
                            return <div key={index}>{line}</div>;
                          })}
                        </BotMessage>
                        <MessageActions>
                          <MessageActionButton>
                            <PriorityHighIcon primaryColor="#8C9BAB" size="small" label="Like" />
                          </MessageActionButton>
                          <MessageActionButton>
                            <PriorityLowIcon primaryColor="#8C9BAB" size="small" label="Dislike" />
                          </MessageActionButton>
                          <MessageActionButton>
                            <DocumentIcon primaryColor="#8C9BAB" size="small" label="Copy" />
                          </MessageActionButton>
                        </MessageActions>
                        
                        {msg.message.includes('Create charts') && (
                          <SourcesSection>
                            <SourcesTitle>Sources</SourcesTitle>
                            <SourceItem>
                              <SourceNumber>1.</SourceNumber>
                              <SourceContent>
                                <SourceLink href="#">
                                  ✅ COREX-4633: Turn branch-view-spa feature flag to an internal Atlassian Labs feature flag
                                </SourceLink>
                                <SourceBadge type="done">DONE</SourceBadge>
                              </SourceContent>
                            </SourceItem>
                            <SourceItem>
                              <SourceNumber>2.</SourceNumber>
                              <SourceContent>
                                <SourceLink href="#">
                                  🐛 COREX-3292: atlassian-editor feature has a misleading description (visible to users via labs)
                                </SourceLink>
                                <SourceBadge type="bug">DONE</SourceBadge>
                              </SourceContent>
                            </SourceItem>
                            <SourceItem>
                              <SourceNumber>3.</SourceNumber>
                              <SourceContent>
                                <SourceLink href="#">
                                  📄 Getting started in Confluence
                                </SourceLink>
                              </SourceContent>
                            </SourceItem>
                            <SourceItem>
                              <SourceNumber>4.</SourceNumber>
                              <SourceContent>
                                <SourceLink href="#">
                                  📄 Getting started in Confluence
                                </SourceLink>
                              </SourceContent>
                            </SourceItem>
                          </SourcesSection>
                        )}
                      </div>
                    )}
                  </ChatMessage>
                ))}
              </ChatMessages>
            )}
            
            <ChatInputContainer>
              <ChatInputWrapper>
                <ChatInputField 
                  placeholder="Write a prompt to get started"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </ChatInputWrapper>
              <ChatInputActions>
                <ChatInputButton>
                  <AttachmentIcon primaryColor="#8C9BAB" size="small" label="Attach" />
                </ChatInputButton>
                <ChatInputButton>
                  <LinkIcon primaryColor="#8C9BAB" size="small" label="Link" />
                </ChatInputButton>
                <ChatInputButton>
                  <MentionIcon primaryColor="#8C9BAB" size="small" label="Mention" />
                </ChatInputButton>
                <ChatSendButton 
                  disabled={!chatMessage.trim()}
                  onClick={handleSendMessage}
                >
                  <SendIcon primaryColor={chatMessage.trim() ? "#579DFF" : "#4C5862"} size="small" label="Send" />
                </ChatSendButton>
              </ChatInputActions>
            </ChatInputContainer>
            
            <ChatDisclaimer>
              ⓘ Uses AI. Verify results.
            </ChatDisclaimer>
          </ChatMainContent>
        </div>
      </ChatPanel>
    </div>
  );
};

export default JiraIssueView;
