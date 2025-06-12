import React, { useState } from 'react';
import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
  Profile,
  Search,
  Create,
  Notifications,
  AppSwitcher,
  Settings,
  Help,
} from '@atlaskit/atlassian-navigation';
import { token } from '@atlaskit/tokens';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Badge from '@atlaskit/badge';
import Modal, { ModalTransition, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '@atlaskit/modal-dialog';
import Textfield from '@atlaskit/textfield';
import Select from '@atlaskit/select';

// Icons
import { JiraIcon } from '@atlaskit/logo';
import SearchIcon from '@atlaskit/icon/glyph/search';
import NotificationIcon from '@atlaskit/icon/glyph/notification';
import AddIcon from '@atlaskit/icon/glyph/add';
import QuestionIcon from '@atlaskit/icon/glyph/question';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import AppsIcon from '@atlaskit/icon/glyph/app-switcher';
import ChatIcon from '@atlaskit/icon/glyph/comment';

const GlobalNavigation: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const productHomeProps = {
    icon: JiraIcon,
    logo: JiraIcon,
    href: '/',
  };

  const profileProps = {
    icon: (
      <Avatar
        size="small"
        name="John Doe"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    ),
    href: '/profile',
    tooltip: 'Your profile and settings',
  };

  const searchProps = {
    placeholder: 'Search',
    tooltip: 'Search',
    label: 'Search',
    value: searchValue,
    onChange: (value: string) => setSearchValue(value),
  };

  const notificationsProps = {
    icon: NotificationIcon,
    tooltip: 'Notifications',
    badge: () => <Badge appearance="important" max={9}>3</Badge>,
  };

  const helpProps = {
    icon: QuestionIcon,
    tooltip: 'Help',
  };

  const settingsProps = {
    icon: SettingsIcon,
    tooltip: 'Settings',
  };

  const appSwitcherProps = {
    icon: AppsIcon,
    tooltip: 'Apps',
  };

  const createProps = {
    icon: AddIcon,
    text: 'Create',
    tooltip: 'Create',
    onClick: () => setIsCreateModalOpen(true),
  };

  const issueTypes = [
    { label: 'Story', value: 'story' },
    { label: 'Task', value: 'task' },
    { label: 'Bug', value: 'bug' },
    { label: 'Epic', value: 'epic' },
    { label: 'Subtask', value: 'subtask' },
  ];

  const projects = [
    { label: 'Sample Project (PROJ)', value: 'PROJ' },
    { label: 'Mobile App (MOB)', value: 'MOB' },
    { label: 'Web Platform (WEB)', value: 'WEB' },
    { label: 'API Services (API)', value: 'API' },
  ];

  return (
    <>
      <AtlassianNavigation
        label="Jira"
        moreLabel="More"
        primaryItems={[]}
        renderAppSwitcher={() => (
          <DropdownMenu
            trigger={({ triggerRef, ...props }) => (
              <AppSwitcher
                {...appSwitcherProps}
                {...props}
                ref={triggerRef}
              />
            )}
          >
            <DropdownItemGroup title="Atlassian products">
              <DropdownItem>
                <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                  <JiraIcon size="small" />
                  Jira Software
                </div>
              </DropdownItem>
              <DropdownItem>
                <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#0052CC', borderRadius: 2 }} />
                  Confluence
                </div>
              </DropdownItem>
              <DropdownItem>
                <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#00875A', borderRadius: 2 }} />
                  Bitbucket
                </div>
              </DropdownItem>
              <DropdownItem>
                <div style={{ display: 'flex', alignItems: 'center', gap: token('space.100') }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#6554C0', borderRadius: 2 }} />
                  Trello
                </div>
              </DropdownItem>
            </DropdownItemGroup>
            <DropdownItemGroup>
              <DropdownItem>View all products</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        )}
        renderProductHome={() => <ProductHome {...productHomeProps} />}
        renderSearch={() => <Search {...searchProps} />}
        renderCreate={() => <Create {...createProps} />}
        renderNotifications={() => (
          <DropdownMenu
            trigger={({ triggerRef, ...props }) => (
              <Button
                {...props}
                ref={triggerRef}
                appearance="subtle"
                iconBefore={ChatIcon}
              />
            )}
          >
            <DropdownItemGroup title="Rovo Chat">
              <DropdownItem>Start new conversation</DropdownItem>
              <DropdownItem>Chat history</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        )}
        renderHelp={() => (
          <DropdownMenu
            trigger={({ triggerRef, ...props }) => (
              <Notifications
                {...notificationsProps}
                {...props}
                ref={triggerRef}
              />
            )}
          >
            <DropdownItemGroup title="Notifications">
              <DropdownItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: token('space.050') }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>PROJ-124 was updated</div>
                  <div style={{ fontSize: '12px', color: token('color.text.subtlest') }}>
                    Jane Smith updated the description • 2h ago
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: token('space.050') }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>You were mentioned in PROJ-125</div>
                  <div style={{ fontSize: '12px', color: token('color.text.subtlest') }}>
                    Bob Wilson mentioned you in a comment • 4h ago
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: token('space.050') }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>Sprint "Backend APIs" completed</div>
                  <div style={{ fontSize: '12px', color: token('color.text.subtlest') }}>
                    15 of 18 issues completed • 1d ago
                  </div>
                </div>
              </DropdownItem>
            </DropdownItemGroup>
            <DropdownItemGroup>
              <DropdownItem href="/notifications">View all notifications</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        )}
        renderSettings={() => (
          <DropdownMenu
            trigger={({ triggerRef, ...props }) => (
              <Help
                {...helpProps}
                {...props}
                ref={triggerRef}
              />
            )}
          >
            <DropdownItemGroup title="Help">
              <DropdownItem>Jira guide</DropdownItem>
              <DropdownItem>Keyboard shortcuts</DropdownItem>
              <DropdownItem>About Jira</DropdownItem>
            </DropdownItemGroup>
            <DropdownItemGroup>
              <DropdownItem>Contact support</DropdownItem>
              <DropdownItem>Provide feedback</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        )}
        renderProfile={() => (
          <>
            <DropdownMenu
              trigger={({ triggerRef, ...props }) => (
                <Button
                  {...props}
                  ref={triggerRef}
                  appearance="subtle"
                  iconBefore={SettingsIcon}
                />
              )}
            >
              <DropdownItemGroup title="Jira settings">
                <DropdownItem>Products</DropdownItem>
                <DropdownItem>User management</DropdownItem>
                <DropdownItem>Global permissions</DropdownItem>
              </DropdownItemGroup>
              <DropdownItemGroup title="Personal settings">
                <DropdownItem>Personal settings</DropdownItem>
                <DropdownItem>Language & region</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
            <DropdownMenu
              trigger={({ triggerRef, ...props }) => (
                <Profile
                  {...profileProps}
                  {...props}
                  ref={triggerRef}
                />
              )}
            >
              <DropdownItemGroup title="John Doe">
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Personal settings</DropdownItem>
                <DropdownItem>Notification settings</DropdownItem>
              </DropdownItemGroup>
              <DropdownItemGroup>
                <DropdownItem>Privacy policy</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
          </>
        )}
      />

      {/* Create Issue Modal */}
      <ModalTransition>
        {isCreateModalOpen && (
          <Modal onClose={() => setIsCreateModalOpen(false)} width="medium">
            <ModalHeader>
              <ModalTitle>Create issue</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: token('space.300') }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: token('space.100'),
                    fontWeight: 600,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: token('color.text.subtle')
                  }}>
                    Project *
                  </label>
                  <Select
                    placeholder="Select project"
                    options={projects}
                    defaultValue={projects[0]}
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: token('space.100'),
                    fontWeight: 600,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: token('color.text.subtle')
                  }}>
                    Issue Type *
                  </label>
                  <Select
                    placeholder="Select issue type"
                    options={issueTypes}
                    defaultValue={issueTypes[0]}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: token('space.100'),
                    fontWeight: 600,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: token('color.text.subtle')
                  }}>
                    Summary *
                  </label>
                  <Textfield placeholder="What needs to be done?" />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: token('space.100'),
                    fontWeight: 600,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: token('color.text.subtle')
                  }}>
                    Description
                  </label>
                  <Textfield 
                    placeholder="Add a description..."
                    elemAfterInput={<div style={{ height: '80px' }} />}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={() => setIsCreateModalOpen(false)}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={() => setIsCreateModalOpen(false)}>
                Create
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default GlobalNavigation; 