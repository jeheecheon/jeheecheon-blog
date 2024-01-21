import { ReactElement, useState } from 'react'
import { Header } from '@/pages/blog/page/components/Header'
import { Footer } from '@/pages/blog/page/components/Footer'
import { Sidebar } from '@/pages/blog/page/components/Sidebar'


import backgroundImage from '@/common/assets/images/default/banner.jpg';

export const Layout = ({ children, className }: {
    children: ReactElement | ReactElement[],
    className?: string
}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [bannerTitle, setBannerTitle] = useState("");

    return (<>
        <div className={`bg-white dark:bg-gray-900 min-h-screen h-auto font-['Noto_Sans_KR']
            flex flex-col justify-between ${className}`}>

            <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} />
            <Header show={showSidebar} setShowSidebar={setShowSidebar} />

            {/* Page Header Image */}
            <div className='bg-fixed h-[75vh] bg-center' style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <span className='absolute bottom-[60%] right-[50%] translate-y-[60%] translate-x-[50%]
                    text-white text-3xl text-pretty text-center'>
                    {bannerTitle}
                </span>
                <span className='absolute top-[65px] right-[5px] text-white text-lg '>
                    😁 항상 &#160;<span className='bg-yellow-400 bg-opacity-60'>화이팅</span>
                </span>
            </div>

            {/* Content body */}
            <div className='mb-auto bg-slate-50'>
                {children}
            </div>

            <Footer />

        </div>
    </>
    )
}
