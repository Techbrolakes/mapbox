import React from 'react';
import { Layout } from 'antd';
import Logo from '../logo';

const { Header, Sider, Content } = Layout;

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Layout>
            <div className="md:flex w-full h-screen overflow-x-hidden">
                <Sider width={200} className="text-primary p-4">
                    <Logo type="no-background" />
                </Sider>
                <Content>{children}</Content>
            </div>
        </Layout>
    );
};

export default MainLayout;
