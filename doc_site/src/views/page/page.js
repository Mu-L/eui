import React from 'react';

import {
  KuiPage,
  KuiPageBody,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection,
  KuiPageHeader,
  KuiPageHeaderSection,
  KuiPageSidebar,
  KuiTitle,
} from '../../../../components';

export default () => (

  <KuiPage>
    <KuiPageHeader>
      <KuiPageHeaderSection>
        <KuiTitle size="large">
          <h1>Page title</h1>
        </KuiTitle>
      </KuiPageHeaderSection>
      <KuiPageHeaderSection>
        Page abilities
      </KuiPageHeaderSection>
    </KuiPageHeader>
    <KuiPageBody>
      <KuiPageSidebar>
        Sidebar nav
      </KuiPageSidebar>
      <KuiPageContent>
        <KuiPageContentHeader>
          <KuiPageContentHeaderSection>
            <KuiTitle>
              <h2>Content title</h2>
            </KuiTitle>
          </KuiPageContentHeaderSection>
          <KuiPageContentHeaderSection>
            Content abilities
          </KuiPageContentHeaderSection>
        </KuiPageContentHeader>
        <KuiPageContentBody>
          Content body
        </KuiPageContentBody>
      </KuiPageContent>
    </KuiPageBody>
  </KuiPage>
);
