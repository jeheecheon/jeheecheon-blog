import { RootState } from '@/common/redux/store';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/common/components/Button';
import CustomTextArea from '@/common/components/post/CustomTextArea';
import Avatar from '@/common/components/post/Avatar';
import { makeVisible } from '../../redux/signInModalSlice';
import { HandleError } from '@/common/utils/responses';

interface CommentWriteAreaProps {
    postId: string;
    replyingTo?: string;
    handleCancelClicked?: () => void | undefined;
    refreshComments: () => void;
    className?: string;
}

const CommentWriteArea: React.FC<CommentWriteAreaProps> = React.memo(({
    postId,
    replyingTo,
    handleCancelClicked,
    refreshComments,
    className
}) => {
    const user = useSelector((state: RootState) => state.user)
    const isAuthenticated = useMemo(
        () => user.email !== undefined && user.email !== null && user.email !== '',
        [user.email]
    )
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const handleType: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if (isAuthenticated === false)
            dispatch(makeVisible());
        else {
            setContent(e.currentTarget.value);
        }
    }

    const handleUpload = () => {
        fetch(`/api/blog/post/${postId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                parent_comment_id: replyingTo
            })
        })
            .then(res => {
                if (res.ok) {
                    refreshComments()
                    setContent("");
                }
                else
                    HandleError(res);
            })
            .catch(err => {
                console.error(err);
                alert("Failed to upload the comment..");
            })
            .finally(() => handleCancelClicked && handleCancelClicked())
    }

    return (
        <div className={`rounded-lg flex flex-row justify-between items-start
                px-4 py-3 bg-default-4 dark:bg-body-dark  ${className}`} >

            <Avatar
                avatar={isAuthenticated && user.avatar ? user.avatar : undefined}
                width={45}
            >
                <svg width="45px" height="45px" viewBox="0 0 128 128" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs><style dangerouslySetInnerHTML={{ "__html": ".cls-1{fill:#a7aece;}.cls-2{fill:#ffffff;opacity:0.3;}.cls-3{fill:#7f3838;}.cls-4{fill:#bc5b57;}.cls-5{fill:#ffd8c9;}.cls-10,.cls-6,.cls-9{fill:none;stroke-linecap:round;}.cls-10,.cls-6{stroke:#393c54;stroke-linejoin:round;}.cls-6{stroke-width:3px;}.cls-7{fill:#393c54;}.cls-8{fill:#515570;}.cls-9{stroke:#ffffff;stroke-miterlimit:10;stroke-width:2px;opacity:0.1;}.cls-10{stroke-width:6px;}" }} /></defs><title /><circle className="cls-1" cx="64" cy="64" r="60" /><circle className="cls-2" cx="64" cy="64" r="48" /><path className="cls-3" d="M40,22A10,10,0,0,0,30,32v81.43a59.62,59.62,0,0,0,20,8.91V32A10,10,0,0,0,40,22Z" /><path className="cls-4" d="M107.85,85.85c0-14.49-9.1-25-21.9-28.94l2-3.31a.59.59,0,0,0-.58-.9l-6,.82a.59.59,0,0,1-.54-1l2.66-3.2a.59.59,0,0,0-.54-1,100,100,0,0,0-21.07,5.4A35,35,0,0,0,40.15,85.85v3.22c0,15.48-1.65,21.18-6.36,26.76h0a59.94,59.94,0,0,0,72-8.77l0-.16A94.24,94.24,0,0,0,107.85,85.85Z" /><path className="cls-5" d="M88.74,93.46a6.31,6.31,0,0,1-5-7.63,6.55,6.55,0,0,1,7.58-4.72l5.91,1A.8.8,0,0,0,98,81c-3.89-7-13.76-12.64-24-12.64S53.88,74,50,81a.8.8,0,0,0,.83,1.18l5.91-1a6.55,6.55,0,0,1,7.58,4.72,6.31,6.31,0,0,1-5.05,7.63L51.09,94.9a.8.8,0,0,0-.53,1.23c3.23,5,10.2,8.42,23.44,8.42s20.21-3.38,23.44-8.42a.8.8,0,0,0-.53-1.23Z" /><path className="cls-6" d="M81.89,92.19a9,9,0,0,1-2.77,2.21,11.61,11.61,0,0,1-10.24,0" /><path className="cls-7" d="M79.12,86.62c0,2.83-2.29,4.25-5.12,4.25s-5.12-1.42-5.12-4.25C68.88,85,79.12,84.75,79.12,86.62Z" /><path className="cls-7" d="M57.33,87.48l3.05-.73a.71.71,0,0,1,.89.68,4,4,0,0,1-4.28,4,3.9,3.9,0,0,1-3-1.84,3.94,3.94,0,0,1,5.53-5.37.73.73,0,0,1,.08,1.11Z" /><path className="cls-7" d="M90.4,87.48l3-.73a.72.72,0,0,1,.89.68,4,4,0,0,1-4.29,4,3.88,3.88,0,0,1-3-1.84,3.94,3.94,0,0,1,5.52-5.37.72.72,0,0,1,.09,1.11Z" /><path className="cls-7" d="M92,29H15.28A59.76,59.76,0,0,0,7.09,45H92a8,8,0,0,0,0-16Z" /><circle className="cls-8" cx="92" cy="37" r="8" /><circle className="cls-9" cx="92" cy="37" r="4.31" /><line className="cls-10" x1="13" x2="20.5" y1="42" y2="49.5" /><line className="cls-10" x1="66" x2="74.38" y1="32.1" y2="23.72" /></svg>
            </Avatar>

            <div className='w-full flex flex-col items-end gap-3 -mt-5 ml-3'>
                <CustomTextArea
                    content={content}
                    handleType={handleType}
                    className='w-full focus:outline-none overflow-y-hidden resize-none
                        border-b-[1px] border-slate-500
                        bg-transparent'
                />
                <div className='flex items-center justify-end w-full gap-3'>
                    {
                        replyingTo &&
                        <Button onClick={() => {
                            setContent('');
                            if (handleCancelClicked !== undefined)
                                handleCancelClicked();
                        }}
                            className=''
                        >
                            Cancel
                        </Button>
                    }
                    <Button
                        onClick={handleUpload}
                        className='text-orange-400 dark:text-orange-400 font-bold dark:font-bold'
                    >
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    )
});

export default CommentWriteArea