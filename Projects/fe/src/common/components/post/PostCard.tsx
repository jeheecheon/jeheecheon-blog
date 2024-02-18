import { PostInfo } from '@/common/types/Post';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';
import { flattenOutCategoriesV1 } from '@/common/utils/category';
import React from 'react';

interface PostCardProps {
    className?: string,
    post: PostInfo
}

const PostCard: React.FC<PostCardProps> = ({ className, post }) => {
    const leafCategories = useSelector((state: RootState) => state.category.leafCategories);

    return (
        <article className={`max-w-[800px] h-fit w-full
        group hover:cursor-pointer pb-3 border-b-2
        ${className}`}>
            <div className='flex justify-between text-slate-500 text-sm'>
                <span className='text-right text-xs'>Published: {post.UploadedAt.toLocaleDateString()}</span>
                {/* <span className='self-end'>23 views</span> */}
            </div>

            <div className='font-semibold text-xl md:text-2xl text-pretty text-slate-600 group-hover:text-sky-700'>
                {post.Title}
            </div>
            
            <div className='flex flex-row justify-start items-end fill-sky-700 mt-2'>
                {/* Likes */}
                <div className='flex flex-row items-center mr-2'>
                    {/* <svg className='mr-1 text-1xl' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z" /></svg> */}
                    <svg className='mr-[2px]' xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 -960 960 960" width="24"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" /></svg>
                    <span className="text-base">
                        {post.LikeCnt}
                    </span>
                </div>

                {/* Comments */}
                <div className='flex flex-row items-center'>
                    <svg className="mr-[2px]" xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 -960 960 960" width="24"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" /></svg>
                    <span className="text-base">
                        {post.CommentCnt}
                    </span>
                </div>

                {/* Categories */}
                <div className='ml-auto text-sky-700 text-pretty text-sm md:text-lg'>
                    {
                        leafCategories && flattenOutCategoriesV1(leafCategories.find(category => category.Id === post.CategoryId))
                    }
                </div>
            </div>
        </article>
    )
}

export default PostCard;