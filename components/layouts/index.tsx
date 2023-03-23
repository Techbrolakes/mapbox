import React from 'react';
import { Layout } from 'antd';
import Logo from '../logo';
import Controls from '../controls';
import { MapProvider } from 'react-map-gl';

const { Sider, Content } = Layout;

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <MapProvider>
            <Layout className="font-primary antialiased min-w-full min-h-screen ">
                <section className="w-full overflow-hidden">
                    <div className="lg:flex w-full lg:h-screen overflow-x-hidden">
                        <Sider width={200} className="text-primary p-4 overflow-y-scroll">
                            <Logo type="no-background" />
                            <Controls />
                        </Sider>
                        <Content className="overflow-y-auto">{children}</Content>
                    </div>
                </section>
            </Layout>
        </MapProvider>
    );
};

export default MainLayout;
