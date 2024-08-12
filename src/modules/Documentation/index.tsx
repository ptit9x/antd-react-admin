import type { FC } from 'react';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const div = <div style={{ height: 200 }}>2333</div>;

const DocumentationModule: FC = () => {
  return (
    <div>
      <Typography className="innerText">
        <Title>
          Introduction
        </Title>
        <Paragraph>
        react-antd-admin is an enterprise - level background management system template based on react and ant-design. Use the latest React Hooks API instead of the traditional class API, Typescript was also used to standardize code readability and maintainability, enhancing development efficiency, Use redux as the global state management library. This project allows you to quickly develop a new project template and remove some of the code according to your needs. If you don't have a need to use templates, This project will also be a good resource for learning react and typescript. In addition, if you think this project is worth optimizing or modifying, please feel free to ask, my contact information will be shown at the bottom of the article.
        </Paragraph>
        <Title>
        Catalogue
        </Title>
        <Paragraph>
        Click the catalogue to quickly reach the specified content
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <a href="#layout">
              Layout
              </a>
            </li>
            <li>
              <a href="#routes">
              Routes
              </a>
            </li>
            <li>
              <a href="#request">
              HTTP Request
              </a>
            </li>
          </ul>
        </Paragraph>
        <Title id="layout" level={2}>
        2333
        </Title>
        <Paragraph>{div}</Paragraph>
        <Title id="routes" level={2}>
        2333
        </Title>
        <Paragraph>{div}</Paragraph>
        <Title id="request" level={2}>
          request
        </Title>
        <Paragraph>{div}</Paragraph>
      </Typography>
    </div>
  );
};

export default DocumentationModule;
