import React, { useState } from 'react';
import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Heading from '@atlaskit/heading';
import { Text } from '@atlaskit/primitives';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';
import Badge from '@atlaskit/badge';
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Tabs, { Tab, TabList } from '@atlaskit/tabs';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Textfield from '@atlaskit/textfield';
import Select from '@atlaskit/select';

// Icons
import ProjectIcon from '@atlaskit/icon/glyph/folder';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import BacklogIcon from '@atlaskit/icon/glyph/backlog';
import BoardIcon from '@atlaskit/icon/glyph/board';
import ReportsIcon from '@atlaskit/icon/glyph/graph-line';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import ReleaseIcon from '@atlaskit/icon/glyph/ship';
import ComponentIcon from '@atlaskit/icon/glyph/component';
import SearchIcon from '@atlaskit/icon/glyph/search';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import MoreIcon from '@atlaskit/icon/glyph/more';
import StarIcon from '@atlaskit/icon/glyph/star';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';

const NavigationContainer = styled.div`
  background-color: ${token('elevation.surface')};
  border-bottom: 1px solid ${token('color.border')};
`;

const ProjectHeader = styled.div`
  padding: ${token('space.200')} ${token('space.300')};
  border-bottom: 1px solid ${token('color.border')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.200')};
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
`;

const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
`;

const TabsContainer = styled.div`
  padding: 0 ${token('space.300')};
  
  .tabs-list {
    border-bottom: none;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: calc(100vh - 140px);
`;

const Sidebar = styled.div`
  background-color: ${token('elevation.surface.sunken')};
  border-right: 1px solid ${token('color.border')};
  padding: ${token('space.300')};
`;

const SidebarSection = styled.div`
  margin-bottom: ${token('space.400')};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SidebarTitle = styled.div`
  font-weight: 600;
  color: ${token('color.text.subtle')};
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: ${token('space.200')};
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${token('space.100')};
  padding: ${token('space.100')} ${token('space.150')};
  border-radius: ${token('border.radius.100')};
  cursor: pointer;
  margin-bottom: ${token('space.050')};
  
  &:hover {
    background-color: ${token('color.background.neutral.subtle.hovered')};
  }
  
  &.active {
    background-color: ${token('color.background.selected')};
    color: ${token('color.text.selected')};
  }
`;

const FilterSection = styled.div`
  margin-bottom: ${token('space.300')};
`;

const QuickFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${token('space.100')};
  border: 1px solid ${token('color.border')};
  border-radius: ${token('border.radius.100')};
  margin-bottom: ${token('space.100')};
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background-color: ${token('color.background.neutral.subtle.hovered')};
  }
`;

const MainContent = styled.div`
  padding: ${token('space.300')};
`;

interface LocalNavigationProps {
  activeTab?: string;
  children: React.ReactNode;
}

const LocalNavigation: React.FC<LocalNavigationProps> = ({ activeTab = 'issues', children }) => {
  const [isStarred, setIsStarred] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all-issues');

  const projectTabs = [
    { id: 'issues', label: 'Issues', icon: IssuesIcon },
    { id: 'backlog', label: 'Backlog', icon: BacklogIcon },
    { id: 'board', label: 'Active sprints', icon: BoardIcon },
    { id: 'reports', label: 'Reports', icon: ReportsIcon },
    { id: 'releases', label: 'Releases', icon: ReleaseIcon },
    { id: 'components', label: 'Components', icon: ComponentIcon },
  ];

  const quickFilters = [
    { id: 'all-issues', label: 'All issues', count: 47 },
    { id: 'my-open-issues', label: 'My open issues', count: 8 },
    { id: 'reported-by-me', label: 'Reported by me', count: 12 },
    { id: 'recently-updated', label: 'Recently updated', count: 15 },
    { id: 'done-issues', label: 'Done issues', count: 24 },
  ];

  const issueTypes = [
    { label: 'All', count: 47, color: 'default' },
    { label: 'Story', count: 18, color: 'success' },
    { label: 'Task', count: 12, color: 'default' },
    { label: 'Bug', count: 9, color: 'danger' },
    { label: 'Epic', count: 3, color: 'purple' },
    { label: 'Subtask', count: 5, color: 'default' },
  ];

  return (
    <>
      <NavigationContainer>
        <ProjectHeader>
          <ProjectInfo>
            <Avatar
              size="medium"
              name="Sample Project"
              appearance="square"
            />
            <ProjectDetails>
              <ProjectTitle>
                <Heading size="medium" as="h1">Sample Project</Heading>
                <Button
                  appearance="subtle"
                  spacing="none"
                  onClick={() => setIsStarred(!isStarred)}
                >
                  {isStarred ? (
                    <StarFilledIcon label="Unstar project" primaryColor={token('color.icon.warning')} />
                  ) : (
                    <StarIcon label="Star project" />
                  )}
                </Button>
              </ProjectTitle>
              <Text size="small" color="color.text.subtle">
                Software project • PROJ
              </Text>
            </ProjectDetails>
          </ProjectInfo>
          
          <ProjectActions>
            <Button appearance="subtle">
              <SearchIcon label="Search" />
            </Button>
            <DropdownMenu
              trigger={({ triggerRef, ...props }) => (
                <Button {...props} ref={triggerRef} appearance="subtle">
                  <MoreIcon label="More actions" />
                </Button>
              )}
            >
              <DropdownItemGroup title="Project actions">
                <DropdownItem>Project settings</DropdownItem>
                <DropdownItem>Move to trash</DropdownItem>
                <DropdownItem>Export</DropdownItem>
              </DropdownItemGroup>
              <DropdownItemGroup title="Automation">
                <DropdownItem>Automation rules</DropdownItem>
                <DropdownItem>Workflow</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
            <Button>
              <SettingsIcon label="Project settings" />
              Project settings
            </Button>
          </ProjectActions>
        </ProjectHeader>

        <TabsContainer>
          <Tabs id="project-tabs">
            <TabList>
              {projectTabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <Tab key={tab.id}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                      <IconComponent label={tab.label} size="small" />
                      {tab.label}
                    </div>
                  </Tab>
                );
              })}
            </TabList>
          </Tabs>
        </TabsContainer>
      </NavigationContainer>

      <ContentLayout>
        <Sidebar>
          <SidebarSection>
            <FilterSection>
              <Textfield
                placeholder="Search issues..."
                elemBeforeInput={<SearchIcon label="Search" size="small" />}
              />
            </FilterSection>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Quick Filters</SidebarTitle>
            {quickFilters.map((filter) => (
              <QuickFilter
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                style={{
                  backgroundColor: selectedFilter === filter.id ? token('color.background.selected') : 'transparent',
                  borderColor: selectedFilter === filter.id ? token('color.border.selected') : token('color.border'),
                }}
              >
                <span>{filter.label}</span>
                <Badge appearance="default">{filter.count}</Badge>
              </QuickFilter>
            ))}
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Issue Types</SidebarTitle>
            {issueTypes.map((type) => (
              <SidebarItem key={type.label}>
                <Lozenge appearance={type.color as any}>
                  {type.label}
                </Lozenge>
                <Badge appearance="default">{type.count}</Badge>
              </SidebarItem>
            ))}
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>People</SidebarTitle>
            <SidebarItem>
              <Avatar size="xsmall" name="Unassigned" />
              <Text size="small">Unassigned (12)</Text>
            </SidebarItem>
            <SidebarItem>
              <Avatar 
                size="xsmall" 
                name="John Doe"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Text size="small">John Doe (8)</Text>
            </SidebarItem>
            <SidebarItem>
              <Avatar 
                size="xsmall" 
                name="Jane Smith"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Text size="small">Jane Smith (15)</Text>
            </SidebarItem>
            <SidebarItem>
              <Avatar 
                size="xsmall" 
                name="Bob Wilson"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Text size="small">Bob Wilson (12)</Text>
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Versions</SidebarTitle>
            <SidebarItem>
              <Text size="small">v2.1.0 (8 issues)</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">v2.0.0 (24 issues)</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">v1.9.0 (15 issues)</Text>
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Components</SidebarTitle>
            <SidebarItem>
              <Text size="small">Frontend (18)</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">Backend API (15)</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">Database (8)</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">DevOps (6)</Text>
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Recently Viewed</SidebarTitle>
            <SidebarItem>
              <Text size="small">PROJ-123</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">PROJ-122</Text>
            </SidebarItem>
            <SidebarItem>
              <Text size="small">PROJ-121</Text>
            </SidebarItem>
          </SidebarSection>
        </Sidebar>

        <MainContent>
          {children}
        </MainContent>
      </ContentLayout>
    </>
  );
};

export default LocalNavigation; 