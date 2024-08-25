import { Button, Flex, Form, Input, Grid, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useTranslation } from 'react-i18next';
import { IToken, LoginRequestType } from '@/types';
import authServices from '@/services/auth.services';
import { LocalStorageKey } from '@/constants/local-storage.constants';
import { setCookie } from '@/utils/cookies.utils';
import { RoleTypes } from '@/constants/user.constants';
import { useLocalStorage } from '@uidotdev/usehooks';

const { useBreakpoint } = Grid;

export default function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation('auth');
  // const location = useLocation();
  const [, setToken] = useLocalStorage(LocalStorageKey.access_token, '');
  const [isLoading, setLoading] = useState(false);
  
  const screens = useBreakpoint();

  const onFinished = async (form: LoginRequestType) => {
    navigate('/'); // TODO: remove this line if not demo

    try {
      setLoading(true);
      const res = await authServices.login(form);
      const tokenDecode: IToken = jwtDecode(res.accessToken);
      if (tokenDecode?.role?.type === RoleTypes.Admin && tokenDecode?.role?.permissions?.length) {
        setToken(res.accessToken);
        setCookie(LocalStorageKey.refresh_token, res.refreshToken, {
          expires: new Date(Date.now() + res.refreshTokenExpiry * 1000),
        });

        // if (!!res) {
          // const search = formatSearch(location.search);
          // const from = search.from || { pathname: '/' };
        // }

        navigate('/');
      } else {
        message.error(t('email_not_exited'))
      }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    } catch (_e) {
      message.error(t('an_error_occurred'));
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form<LoginRequestType>
      onFinish={onFinished}
      style={{
        alignItems: 'start',
        width: '100%',
      }}>
      <Form.Item
        name='email'
        label="Email"
        labelCol={{ span: 24 }}
        style={{ width: screens.lg ? '70%' : '100%' }}
        rules={[
          {
            required: true,
            message: t('please_input_your_email'),
          },
          {
            type: 'email',
            message: t('please_input_a_valid_email'),
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name='password'
        label={t('Password')}
        labelCol={{ span: 24 }}
        style={{ width: screens.lg ? '70%' : '100%' }}
        rules={[
          {
            required: true,
            message: t('please_input_your_password'),
          },
        ]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item>
        <Flex justify='space-between' style={{ width: screens.lg ? '70%' : '100%'}}>
          <Button htmlType='submit' type='primary' loading={isLoading}>
            {t('Continue')}
          </Button>
          <Button type='link' href='/auth/password-reset'>
            {t('Forgot password')}?
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
