import { BreadcrumbProps, Breadcrumb as BaseBreadcrumb, theme } from 'antd';
import { Link } from 'react-router-dom';

const { useToken } = theme;

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { token } = useToken();
  return (
    <BaseBreadcrumb
      {...props}
      itemRender={(currentRoute, _params, items, paths) => {
        const isLast = currentRoute?.title === items[items.length - 1]?.title;
        if (isLast) {
          return (
            <span
              style={{
                fontWeight: '600',
                color: token.colorPrimary
              }}
            >
              {currentRoute.title}
            </span>
          );
        }
        if (paths?.length) {
          return <Link to={`/${paths.join('/')}`}>{currentRoute.title}</Link>;
        }
        return <span>{currentRoute.title}</span>;
      }}
    />
  );
};
