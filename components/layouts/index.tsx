import React, { useState } from 'react';
import { Drawer, Layout } from 'antd';
import Logo from '../logo';
import Controls from '../controls';
import { MapProvider } from 'react-map-gl';
import Loader from '../loader';
import { FaBars } from 'react-icons/fa';

const { Sider, Content } = Layout;

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    if (loading) return <Loader />;
    return (
        <MapProvider>
            <Drawer
                className="!bg-dark !text-primary"
                width={255}
                closable={false}
                placement="left"
                onClose={() => setVisible(false)}
                open={visible}
            >
                <Logo type="no-background" />
                <Controls />
            </Drawer>
            <Layout className="font-primary antialiased min-w-full min-h-screen ">
                <section className="w-full overflow-hidden">
                    <div className=" lg:flex w-full lg:h-screen overflow-x-hidden">
                        <Sider width={200} className="text-primary p-4 hidden lg:block overflow-y-scroll">
                            <Logo type="no-background" />
                            <Controls />
                        </Sider>
                        <Content className=" relative overflow-y-auto">
                            <div className="absolute top-0 z-50 left-0 bg-dark rounded-full p-4" onClick={() => setVisible(true)}>
                                <FaBars className="text-2xl text-white" />
                            </div>
                            {children}
                        </Content>
                    </div>
                </section>
            </Layout>
        </MapProvider>
    );
};

export default MainLayout;
