import { Layout, Row } from 'antd';
import React from 'react';

export const ContactUsView = () => {
  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <span className={'contact-title'}></span>
      <Row className={'collections-layout-container'} gutter={32}>
        <span className={'contact-content'}>
          Feel free to reach us at <i>hello@blockfin.com</i>
        </span>
      </Row>
    </Layout>
  );
};
